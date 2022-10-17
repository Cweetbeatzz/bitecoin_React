// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Market is ReentrancyGuard {
    //<---------------------OERATIONS----------------------------->

    using Counters for Counters.Counter;

    //<---------------------VARIABLES----------------------------->

    //token count
    Counters.Counter private _tokenItemIdCounter;
    // number of tokens sold
    Counters.Counter private _tokenItemIdSoldCounter;
    //current owner of the contract
    address payable public Owner;
    // amount of eth any seller wants to sell on this platform must pay in order to sell an nft
    //price is set to $10
    uint256 public platformPrice = 0.03 ether;
    //how much a seller places fr a token he/she wants to sell for
    uint256 public nftPurchaseFee;
    //current owner of the nft
    address payable public currentOwnerBuyer;

    //##################################################################################

    // a list of nft details each token will have on the nft market place
    struct tokenMarketItem {
        //address of each contract deployed by an owner
        address Nft;
        // name of every nft item
        string tokenName;
        //nft item to be bought
        uint256 itemId;
        //id of the nft item
        uint256 tokenId;
        //current owner of an nft
        address payable currentOwnerBuyer;
        //previous owner of an nft i.e the seller
        address payable previousOwnerSeller;
        //how much a seller places fr a token he/she wants to sell for
        uint256 nftPurchaseFee;
        //if token is not available for sale
        bool isSold;
        //is a token avalable for sale
        bool forSale;
    }
    //##################################################################################

    //<---------------------MAPPINGS----------------------------->

    // find the details of a particular token with attributes attached with it
    mapping(uint256 => tokenMarketItem) private marketIdItem;
    //##################################################################################

    //<---------------------EVENTS----------------------------->
    // logs of when token is sold
    event MarketItemCreated(
        address indexed Nft,
        string tokenName,
        uint256 indexed itemId,
        uint256 indexed tokenId,
        address currentOwner,
        address previousOwner,
        uint256 nftPurchaseFee,
        bool isSold,
        bool forSale
    );

    //##################################################################################

    constructor() ReentrancyGuard() {
        // initializes the owner to be the only payable address of the contract & the owner of the comtract
        Owner = payable(msg.sender);
    }

    //##################################################################################
    //seller creating an nft must pass in these attributes to be able to sell
    function createMarketItemToken(
        address _Nft,
        string memory _tokenName,
        uint256 _tokenId,
        uint256 _price
    ) public payable nonReentrant {
        require(_price > 0, "Price must be greater than 0");

        require(
            msg.value >= platformPrice,
            "Minimum amount must be equal or greater than the Platform Fee"
        );

        //incrementing the id after nft creation
        _tokenItemIdCounter.increment();

        //setting item to the current inremented counter
        uint256 itemId = _tokenItemIdCounter.current();

        //passing the current index count id mapped to the attributes of the created market list item
        marketIdItem[itemId] = tokenMarketItem(
            //the nft contract address
            _Nft,
            //token name
            _tokenName,
            //item id
            itemId,
            //token id
            _tokenId,
            //the owner of the address that going to be paid if a buyer approaches
            payable(address(0)),
            //the buyer
            payable(msg.sender),
            //the amount of the nft
            _price,
            //this nft is not sold
            false,
            //the nft is for sale
            true
        );
        //transfer nft/token to this contract
        IERC721(_Nft).transferFrom(msg.sender, address(this), _tokenId);

        // this call enables visible transcations to show on chain
        emit MarketItemCreated(
            _Nft,
            _tokenName,
            itemId,
            _tokenId,
            address(0),
            msg.sender,
            _price,
            false,
            true
        );
    }

    //##################################################################################

    //gets the price every user who wants to sell nft token must pay in order to sell of this platform
    function getPlatformEntryPrice() public view returns (uint256) {
        return platformPrice;
    }

    //##################################################################################
    //sets a new price for every seller has to pay to sell on this platform
    function changePlatformEntryPrice(uint256 _newPrice)
        public
        returns (uint256)
    {
        if (msg.sender == address(this)) {
            platformPrice = _newPrice;
        }
        return platformPrice;
    }

    //##################################################################################
    //sets a new price for the token as a user wish
    function changeTokenPrice(uint256 _tokenId, uint256 _newPrice)
        public
        returns (uint256)
    {
        if (msg.sender == currentOwnerBuyer) {
            nftPurchaseFee = _newPrice;
        }
        return nftPurchaseFee;
    }

    //##################################################################################

    //sell token passing the unique id of the token
    function sellMarketTokenItem(address _Nft, uint256 _itemId)
        public
        payable
        nonReentrant
    {
        //retrieve the price seller has placed for sale for an item/token
        uint256 token_price = marketIdItem[_itemId].nftPurchaseFee;
        //retrieve the id of the token
        uint256 token_id = marketIdItem[_itemId].tokenId;
        //amount paid must be equal to what the seller has placed as sellers bid
        require(
            msg.value >= nftPurchaseFee,
            "Price must be equal to or greater than Asking Price"
        );
        //paying the seller the token amount
        marketIdItem[_itemId].currentOwnerBuyer.transfer(msg.value);
        //transfer nft/token to the buyer
        IERC721(_Nft).transferFrom(address(this), msg.sender, _itemId);
        //setting the current owner of the nft item to  be the payable
        marketIdItem[_itemId].currentOwnerBuyer = payable(msg.sender);
        //setting the current nft item for sale to be true
        marketIdItem[_itemId].isSold = true;
        //setting the current nft item not for sale cause it has just been bought
        marketIdItem[_itemId].forSale = false;
        //increase number of item/token sold
        _tokenItemIdSoldCounter.increment();
        //
        payable(Owner).transfer(platformPrice);
    }

    //##################################################################################

    //buy token passing the unique id of the token
    function buyToken(uint256 _tokenId) public payable {}

    //##################################################################################

    //if pruchase successful & complete transfer token passing the unique id of the token to the new buyer
    function TransferToken(address to, uint256 _tokenId) public payable {}

    //##################################################################################

    //get owner of token
    function getTokenOwner() public view returns (address) {
        return currentOwnerBuyer;
    }

    //##################################################################################
    //get total supply of tokens
    function getTotalTokenMarketSupply()
        public
        view
        returns (tokenMarketItem[] memory)
    {
        //gets the current token count retriving the most recent transcation
        uint256 itemCount = _tokenItemIdCounter.current();
        //unSold tokens list
        uint256 unSoldTokensCount = _tokenItemIdCounter.current() -
            _tokenItemIdSoldCounter.current();

        uint256 itemIndex = 0;

        tokenMarketItem[] memory items = new tokenMarketItem[](
            unSoldTokensCount
        );
        // loop through all tokens by seller

        for (uint256 i = 0; i < itemCount; i++) {
            //check token record if its attached to an owner if yes its been sold
            // if no its not been sold & should be up for sale

            if (marketIdItem[i + 1].currentOwnerBuyer == address(0)) {
                uint256 currentId = marketIdItem[i + 1].itemId;

                tokenMarketItem storage currentItem = marketIdItem[currentId];

                items[itemIndex] = currentItem;

                itemIndex += 1;
            }
        }
        //returns all unsold tokens/items
        return items;
    }

    //##################################################################################
    //get all token/nfts owned by a buyer/user
    function getClientOwnedNfts()
        public
        view
        returns (tokenMarketItem[] memory)
    {
        //get all token supplied
        uint256 totalTokenCount = _tokenItemIdCounter.current();
        uint256 tokenCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalTokenCount; i++) {
            //check if the sender wanting to retrieve all nfts owned by him/her address
            //is matched with the address saved on block
            if (marketIdItem[i + 1].currentOwnerBuyer == msg.sender) {
                tokenCount += 1;
            }
        }

        tokenMarketItem[] memory items = new tokenMarketItem[](tokenCount);

        for (uint256 i = 0; i < totalTokenCount; i++) {
            if (marketIdItem[i + 1].currentOwnerBuyer == msg.sender) {
                uint256 currentId = marketIdItem[i + 1].itemId;
                tokenMarketItem storage currentItem = marketIdItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    //##################################################################################
    //get all token/nfts owned by a seller
    function getAdminOwnedNfts()
        public
        view
        returns (tokenMarketItem[] memory)
    {
        //get all token supplied
        uint256 totalTokenCount = _tokenItemIdCounter.current();
        uint256 tokenCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalTokenCount; i++) {
            //check if the sender wanting to retrieve all nfts owned by him/her address
            //is matched with the address saved on block
            if (marketIdItem[i + 1].previousOwnerSeller == msg.sender) {
                tokenCount += 1;
            }
        }

        tokenMarketItem[] memory items = new tokenMarketItem[](tokenCount);

        for (uint256 i = 0; i < totalTokenCount; i++) {
            if (marketIdItem[i + 1].previousOwnerSeller == msg.sender) {
                uint256 currentId = marketIdItem[i + 1].itemId;
                tokenMarketItem storage currentItem = marketIdItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }
}
