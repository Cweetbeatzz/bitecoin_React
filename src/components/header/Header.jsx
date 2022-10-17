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
import "./Header.styles.css";

function Header() {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  //if account is undefined  account is not connected else account is connected
  const isConnected = account !== undefined;

  return (
    <Container>
      <nav
        className="container navbar navbar-expand-lg navbar-dark p-4"
        id="cont"
      >
        <div>
          <Link className="navbar-brand" to="home">
            <strong className="  text-white">BITECOIN</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <div className="menu">
            <ul className="navbar-nav gap-4">
              <li className="nav-item active">
                <Link to="dashboard">dashboard</Link>
              </li>
              <li class="nav-item">
                <Link to="deposit">deposit</Link>
              </li>
              <li className="nav-item">
                <Link to="pools">pools</Link>
              </li>
              <li className="nav-item">
                <Link to="stake">stake</Link>
              </li>
              <li className="nav-item">
                <Link to="LotteryHome">lottery</Link>
              </li>
              <li className="nav-item">
                <Link to="swap">swap</Link>
              </li>
              <li className="nav-item">
                <Link to="nfts">nfts</Link>
              </li>
              <li className="nav-item">
                <Link to="borrow">borrow</Link>
              </li>
              <li className="nav-item">
                <Link to="wallet">wallet</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {isConnected ? (
            <button
              className="btn btn-danger"
              id="metabutton"
              onClick={deactivate}
            >
              <strong>DISCONNECT WALLET</strong>{" "}
              <img src="images/metamask.svg" alt="" className="metaimg" />
            </button>
          ) : (
            <button className="btn btn-warning" onClick={activateBrowserWallet}>
              <strong>CONNECT WALLET</strong>{" "}
              <img src="images/metamask.svg" alt="" className="metaimg" />
            </button>
          )}
        </div>
      </nav>
    </Container>
  );
}

export default Header;
