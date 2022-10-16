// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

error RaffleDraw__NotEnoughETHFundsEntered();
error RaffleDraw__TransferFailed();
error RaffleDraw__RaffleNotOpen();
error RaffleDraw__UpkeepNotNeeded(
    uint256 currentBalance,
    uint256 numPlayers,
    uint256 raffleState
);

abstract contract RaffleDraw is VRFConsumerBaseV2, KeeperCompatibleInterface {
    // <========= State Variables =======>
    //Types  of lottery user can enter
    uint256 private immutable i_miniLotteryEntranceAmount = 100;
    uint256 private immutable i_medLotteryEntranceAmount = 500;
    uint256 private immutable i_maxLotteryEntranceAmount = 1000;
    address payable[] private s_players;
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    bytes32 private immutable i_gasLane;
    uint64 private immutable i_subscriptionId;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private immutable i_gasLimit;
    uint32 private constant NUM_WORDS = 1;
    address private s_recentWinner;
    uint256 public immutable i_interval;
    RaffleState private s_raffleState;
    uint256 private s_lastTimeStamp;

    // <========= Events =======>
    event RaffleDrawEntered(address indexed player);
    event RequestRaffleDrawWinner(uint256 indexed requestId);
    event WinnerPicked(address indexed player);

    enum RaffleState {
        OPEN,
        CALCULATING,
        CLOSED,
        PENDING
    }

    //###############################################################################

    constructor(
        address vrfCoordinatorV2,
        uint256 _entranceFee,
        bytes32 gasLane,
        uint64 subscriptionId,
        uint32 gasLimit,
        uint256 updateInterval
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        //   if (_entranceFee == i_miniLotteryEntranceAmount) {
        //if user enter with minimum lottery fee
        _entranceFee == i_miniLotteryEntranceAmount;
        //   }
        //   else if(_entranceFee == i_medLotteryEntranceAmount){
        //    //if user enter with medium lottery fee
        //   _entranceFee == i_medLotteryEntranceAmount;
        //   }
        //   else{
        //    //if user enter with maximum lottery fee
        //    _entranceFee == i_maxLotteryEntranceAmount;
        //   }

        //#####
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        //#####
        i_gasLane = gasLane;
        //#####
        i_subscriptionId = subscriptionId;
        //#####
        i_gasLimit = gasLimit;
        //#####
        i_interval = updateInterval;

        //state of the raffle draw
        s_raffleState = RaffleState.OPEN;

        //time
        s_lastTimeStamp = block.timestamp;
    }

    //###############################################################################

    function enterRaffleDraw() public payable {
        //get user entery amount
        if (
            msg.value < i_miniLotteryEntranceAmount /*|| msg.value < i_medLotteryEntranceAmount || msg.value < i_maxLotteryEntranceAmount*/
        ) {
            revert RaffleDraw__NotEnoughETHFundsEntered();
        }

        //if raffle not open
        if (s_raffleState != RaffleState.OPEN) {
            revert RaffleDraw__RaffleNotOpen();
        }

        //if payment successfull add player to a list
        s_players.push(payable(msg.sender));

        emit RaffleDrawEntered(msg.sender);
    }

    //###############################################################################

    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        bool isOpen = RaffleState.OPEN == s_raffleState;
        bool timePassed = ((block.timestamp - s_lastTimeStamp) > i_interval);
        bool hasPlayers = s_players.length > 0;
        bool hasBalance = address(this).balance > 0;

        upkeepNeeded = (timePassed && isOpen && hasBalance && hasPlayers);
        return (upkeepNeeded, "0x0"); // can we comment this out?
    }

    //###############################################################################

    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        // require(upkeepNeeded, "Upkeep not needed");
        if (!upkeepNeeded) {
            revert RaffleDraw__UpkeepNotNeeded(
                address(this).balance,
                s_players.length,
                uint256(s_raffleState)
            );
        }
        //changing draw state
        s_raffleState = RaffleState.CALCULATING;

        //#######
        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_gasLimit,
            NUM_WORDS
        );

        emit RequestRaffleDrawWinner(requestId);
    }

    //###############################################################################

    function fufillRandomNumbers(
        uint256, /*requestId*/
        uint256[] memory randomWords
    ) internal override {
        //getting the index oftyhe new winner
        uint256 indexOfWinner = randomWords[0] % s_players.length;

        //mapping the new winner
        address payable recentWinner = s_players[indexOfWinner];

        //assigning a new winner
        s_recentWinner = recentWinner;

        //reset the list of players after a winner is declared
        s_players = new address payable[](0);

        //reset timestamp
        s_lastTimeStamp = block.timestamp;

        s_raffleState = RaffleState.OPEN;

        //######
        //sending the winner the money
        (bool success, ) = recentWinner.call{value: address(this).balance}("");

        if (!success) {
            revert RaffleDraw__TransferFailed();
        }
        //######
        emit WinnerPicked(recentWinner);
    }

    // <========= Getter Functions =======>
    //###############################################################################

    function getRaffleState() public view returns (RaffleState) {
        return s_raffleState;
    }

    //#########################
    function getNumWords() public pure returns (uint256) {
        return NUM_WORDS;
    }

    //#########################
    function getRequestConfirmations() public pure returns (uint256) {
        return REQUEST_CONFIRMATIONS;
    }

    //#########################
    function getRecentWinner() public view returns (address) {
        return s_recentWinner;
    }

    //#########################
    function getPlayer(uint256 index) public view returns (address) {
        return s_players[index];
    }

    //#########################
    function getLastTimeStamp() public view returns (uint256) {
        return s_lastTimeStamp;
    }

    //#########################
    function getInterval() public view returns (uint256) {
        return i_interval;
    }

    //#########################
    function getEntranceFee() public view returns (uint256) {
        // if (i_miniLotteryEntranceAmount == i_miniLotteryEntranceAmount) {
        //if user enter with minimum lottery fee return the mini entrance fee
        return i_miniLotteryEntranceAmount;
        // }
        // else if( i_medLotteryEntranceAmount == i_medLotteryEntranceAmount){
        //  //if user enter with medium lottery fee  return the medium entrance fee
        // return i_medLotteryEntranceAmount;
        // }
        // else{
        //  //if user enter with maximum lottery fee  return the maximum entrance fee
        //  return i_maxLotteryEntranceAmount;
        // }
    }

    //#########################
    function getNumberOfPlayers() public view returns (uint256) {
        return s_players.length;
    }
}
