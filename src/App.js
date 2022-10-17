import React, { Component } from "react";
import "./App.css";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  ChainId,
} from "@usedapp/core";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import Stake from "./components/stake/Stake";
import Wallet from "./components/wallet/Wallet.jsx";
import Footer from "./components/footer/Footer.js";
import Lottery from "./components/lottery/Lottery.js";
import Borrow from "./components/borrow/Borrow.js";
import Swap from "./components/swap/Swap.js";
import Deposit from "./components/deposit/Deposit.js";
import Nfts from "./components/nft/Nfts.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import Pools from "./components/pools/Pools.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { LotteryProvider } from "./Context/Others/LotteryContext";
import EnterLottery from "./components/lottery/EnterLottery";

class App extends Component {
  //#############################################################################
  render() {
    return (
      <div className="App">
        <MoralisProvider initializeOnMount={false}>
          <LotteryProvider>
            <DAppProvider
              config={{
                supportedChains: [
                  ChainId.Kovan,
                  ChainId.Rinkeby,
                  ChainId.Avalanche,
                  ChainId.BSC,
                  ChainId.Fantom,
                  ChainId.Mainnet,
                  ChainId.Ropsten,
                  ChainId.xDai,
                  ChainId.Localhost,
                ],
              }}
            >
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="*" element={<Home />} />
                  <Route path="Home" element={<Home />} />
                  <Route path="Stake" element={<Stake />} />
                  <Route path="Pools" element={<Pools />} />
                  <Route path="nfts" element={<Nfts />} />
                  <Route path="Dashboard" element={<Dashboard />} />
                  <Route path="Swap" element={<Swap />} />
                  <Route path="Lottery" element={<Lottery />} />
                  <Route path="Borrow" element={<Borrow />} />
                  <Route path="Wallet" element={<Wallet />} />
                  <Route path="Deposit" element={<Deposit />} />
                  <Route path="EnterLottery" element={<EnterLottery />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </DAppProvider>
          </LotteryProvider>
        </MoralisProvider>
      </div>
    );
  }
}

export default App;
