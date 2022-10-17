// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    Pausable,
    Ownable,
    ERC721Burnable
{
    //<---------------------OERATIONS----------------------------->

    using Counters for Counters.Counter;

    //<---------------------VARIABLES----------------------------->

    Counters.Counter private _tokenIdCounter;
    address marketAddress;

    //##################################################################################

    constructor(address _marketAddress) ERC721("NFT", "NFT") {
        marketAddress = _marketAddress;
    }

    //##################################################################################

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }

    //##################################################################################

    function pause() public onlyOwner {
        _pause();
    }

    //##################################################################################

    function unpause() public onlyOwner {
        _unpause();
    }

    //##################################################################################

    function safeMint(string memory uri) public returns (uint256) {
        //inrements counter as client has minted current token
        _tokenIdCounter.increment();
        //keeping track of the image the client wants to mint
        uint256 tokenIdItem = _tokenIdCounter.current();
        //sends token to the client who requested for a token
        _safeMint(msg.sender, tokenIdItem);
        //sets token uri to current user to requested for a mint
        _setTokenURI(tokenIdItem, uri);
        //
        setApprovalForAll(marketAddress, true);
        return tokenIdItem;
    }

    //##################################################################################

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    //##################################################################################

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    //##################################################################################

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    //##################################################################################

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    //##################################################################################
}
