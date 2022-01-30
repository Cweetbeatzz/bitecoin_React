//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

import "./SimbaToken.sol";
import "./DaiToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// This interface represents all tokens that will be added to this Defi Application
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract YieldFarm is Ownable {
    // ############################################################################

    uint256 minimumStakeAmount;
    address[] public stakers;
    string public name = "Simba Yield Farming";
    IERC20 public simbaToken;
    address[] public allowedTokens;
    // ############################################################################
    //the address of the token mapped to the users address mapped to the amount he/she staked
    mapping(address => mapping(address => uint256)) public getStakedBalanceById;
    // verify if user has staked;
    mapping(address => bool) public hasStaked;
    //check if user is currently stakin
    mapping(address => bool) public isStaking;
    //returns a single token from a list of allowed tokens
    mapping(address => uint256) public getUniqueTokenStakedById;
    //gets the current price value of each token matched with ethereum price value
    mapping(address => address) public getPricefeedByTokenId;
    //from a list of users that have staked get a users from that list by his/her id
    mapping(address => uint256) public getStakersById;

    // ############################################################################

    constructor(address _simbatoken) public {
        //
        simbaToken = IERC20(_simbatoken);

        //minimum staking amount is $100
        minimumStakeAmount = 100 ether;
    }

    // ############################################################################
    function getStakersIdByTheirAddress(address _user)
        public
        returns (uint256)
    {
        //inital value set
        uint256 userAddress = 0;
        //
        for (uint256 i = 0; i < stakers.length; i++) {
            //
            if (getStakersById[_user] < 0) {
                revert("User not Found");
            }
        }
        return getStakersById[_user];
    }

    // ############################################################################

    function changeMinStakeFee(uint256 _price)
        public
        view
        onlyOwner
        returns (uint256)
    {
        //changes the minimum amount of staking fee and admin wishes to
        return _price = minimumStakeAmount;
    }

    // ############################################################################

    function getMinStakeFee() public view returns (uint256) {
        //if the user has upto $100 he can stake else exit
        return minimumStakeAmount;
    }

    // ############################################################################

    function Stake(uint256 _amount, address _token) public payable {
        require(AllowedTokenForStaking(_token), "Token is not allowed");
        //getting the minimum required fee to invest
        require(
            msg.value >= getMinStakeFee(),
            "Minimum Fee Requirments to Stake is not met"
        );
        //user deposits minimum amout of token required to invest to this contract
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        //get if user has already staked on a token
        getUniqueTokenUserStaked(msg.sender, _token);
        //mapping for each user & how much he/she staked
        //the staking balance of a user on a specfic token is set or added up if he/she wishes to stake more
        getStakedBalanceById[_token][msg.sender] += _amount;
        //get stake status
        if (getUniqueTokenStakedById[msg.sender] == 1) {
            //if a user has staked on a token add him/her to a list of stakers
            stakers.push(msg.sender);
        }
        //status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // ############################################################################
    //gets the amount of token user has/is currently staking in
    function getUniqueTokenUserStaked(address _user, address _token) internal {
        //if the current reading balance of a user on a token reads 0 add new else update
        if (getStakedBalanceById[_user][_token] <= 0) {
            getUniqueTokenStakedById[_user] += 1;
        }
    }

    // ############################################################################
    function AddTokens(address _token) public onlyOwner {
        // only admin can add tokens
        allowedTokens.push(_token);
    }

    // ############################################################################
    function RemoveLastToken() public onlyOwner {
        // only admin can remove last tokens listed in the series of tokens
        allowedTokens.pop();
    }

    // ############################################################################

    function AllowedTokenForStaking(address _token) public returns (bool) {
        //only tokens listed can be staked on
        for (uint256 i = 0; i < allowedTokens.length; i++) {
            if (allowedTokens[i] == _token) {
                return true;
            }
        }
        return false;
    }

    // ############################################################################

    function unStake(address _token) public {
        uint256 userBalance = getStakedBalanceById[_token][msg.sender];
        //
        require(
            userBalance > 0 && userBalance >= getMinStakeFee(),
            "Your Staked amount is incorrect"
        );
        //
        //transfer the accurate value the user staked initially i.e all amount no left overs
        IERC20(_token).transfer(msg.sender, userBalance);
        //update users balance to be 0
        getStakedBalanceById[_token][msg.sender] == 0;
        //remove user unique token from staked token list
        getUniqueTokenStakedById[msg.sender] -= 1;
    }

    // ############################################################################

    function AwardIntrests() public payable onlyOwner {
        //looping through all stakers list

        for (uint256 i = 0; i < stakers.length; i++) {
            //get the user
            address user = stakers[i];
            //mapped address of the user connecting he/she balance ###getting the balance
            uint256 amountToSend = getAmountToSendAsIntrest(user);
            //sending the intrest
            simbaToken.transfer(user, amountToSend);
            // sending rewards only if the balance from the array shows that the user has staked so
            // if less than or equal to zero they have not staked
        }
    }

    // ############################################################################
    function setTokenPriceFeed(address _token, address _pricefeed)
        public
        onlyOwner
    {
        getPricefeedByTokenId[_token] = _pricefeed;
    }

    // ############################################################################

    function getTokenPriceFeed(address _token)
        public
        view
        returns (uint256, uint256)
    {
        //gets the token
        address tokenAddress = getPricefeedByTokenId[_token];
        //gets the pricefeed of the unique token output from the list
        AggregatorV3Interface priceFeed = AggregatorV3Interface(tokenAddress);
        //returns the price feed of the token
        (, int256 price, , , ) = priceFeed.latestRoundData();
        uint256 decimals = uint256(priceFeed.decimals());
        //returned price
        return (uint256(price), decimals);
    }

    // ############################################################################
    function getAmountToSendAsIntrest(address _user)
        public
        view
        returns (uint256)
    {
        uint256 totalAmount = 0;
        //ensures the users must have an amount staked on a token
        require(getUniqueTokenStakedById[_user] > 0, "No token staked...");
        //find token users has staked in
        for (uint256 i; i < allowedTokens.length; i++) {
            totalAmount += getIntrestAmountToSendPerToken(
                _user,
                allowedTokens[i]
            );
        }
        return totalAmount;
    }

    // ############################################################################

    function getIntrestAmountToSendPerToken(address _user, address _token)
        public
        view
        returns (uint256)
    {
        if (getUniqueTokenStakedById[_user] <= 0) {
            return 0;
        }
        (uint256 pricefeed, uint256 decimals) = getTokenPriceFeed(_token);
        return ((getStakedBalanceById[_user][_token] * pricefeed) /
            (10**decimals));
    }
}
