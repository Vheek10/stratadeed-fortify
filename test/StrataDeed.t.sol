// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../contracts/StrataDeedRWA.sol";
import "../contracts/StrataDeedNFT.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract StrataDeedTest is Test {
    StrataDeedRWA public rwa_impl;
    StrataDeedNFT public nft_impl;
    StrataDeedRWA public rwa;
    StrataDeedNFT public nft;
    address public owner = address(1);
    address public admin = address(2);
    address[] public admins;

    function setUp() public {
        admins.push(admin);
        admins.push(address(3));
        admins.push(address(4));

        rwa_impl = new StrataDeedRWA();
        nft_impl = new StrataDeedNFT();

        // Deploy RWA Proxy
        ERC1967Proxy rwa_proxy = new ERC1967Proxy(
            address(rwa_impl),
            abi.encodeWithSelector(StrataDeedRWA.initialize.selector, 1000 ether, owner, admins)
        );
        rwa = StrataDeedRWA(payable(address(rwa_proxy)));

        // Deploy NFT Proxy
        ERC1967Proxy nft_proxy = new ERC1967Proxy(
            address(nft_impl),
            abi.encodeWithSelector(StrataDeedNFT.initialize.selector, owner)
        );
        nft = StrataDeedNFT(payable(address(nft_proxy)));
    }

    function testInitialization() public {
        assertEq(rwa.owner(), owner);
        assertEq(nft.name(), "StrataDeed Property Deed");
    }
}
