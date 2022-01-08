import React from "react";
import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
} from "./Header.styles";
import { useEthers } from "@usedapp/core";
import { Link } from "react-router-dom";

function Header() {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const isConnected = account !== undefined;

  return (
    <Container>
      <Link to="home">
        <strong>BITECOIN</strong>
      </Link>
      <Menu>
        <Link to="dashboard">dashboard</Link>
        <Link to="deposit">deposit</Link>
        <Link to="farm">farm</Link>
        <Link to="stake">stake</Link>
        <Link to="lottery">lottery</Link>
        <Link to="swap">swap</Link>
        <Link to="nfts">nfts</Link>
        <Link to="borrow">borrow</Link>
        <Link to="wallet">wallet</Link>
      </Menu>
      <RightMenu>
        <div>
          {isConnected ? (
            <button class="btn btn-warning" onClick={deactivate}>
              DISCONNECT WALLET
            </button>
          ) : (
            <button class="btn btn-warning" onClick={activateBrowserWallet}>
              CONNECT WALLET
            </button>
          )}
        </div>
        <CustomMenu />
      </RightMenu>
      {/* <BurgerNav>
                    <li><a href="home">country</a></li>
                    <li><a href="home">depatures</a></li>
                    <li><a href="home">arrivals</a></li>
                    <li><a href="home">price feeds</a></li>
                    <li><a href="home">schedules</a></li>
                    <li><a href="home">location</a></li>
               </BurgerNav> */}
    </Container>
  );
}

export default Header;
