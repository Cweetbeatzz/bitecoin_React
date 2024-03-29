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
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stake from "./components/stake/Stake";
import Wallet from "./components/wallet/Wallet";
import Footer from "./components/footer/Footer";
import Lottery from "./components/lottery/Lottery";
import Borrow from "./components/borrow/Borrow";
import Swap from "./components/swap/Swap";
import Deposit from "./components/deposit/Deposit";
import Nfts from "./components/nft/Nfts";
import Dashboard from "./components/dashboard/Dashboard";
import Pools from "./components/pools/Pools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { LotteryProvider } from "./Context/Others/LotteryContext";
import EnterLottery from "./components/lottery/EnterLottery";
import LotteryHome from "./components/lottery/LotteryHome";
import NftMarketPlace from "./components/NftMarketPlace/NftMarketPlace";
import UploadNft from "./components/NftMarketPlace/UploadNft";
import { ChakraProvider } from "@chakra-ui/react";

class App extends Component {
  //#############################################################################
  render() {
    return (
      <div className="App">
        <MoralisProvider
          // appId={process.env.MORALIS_APP_ID}
          // serverUrl={process.env.MORALIS_SERVER_URL}
          initializeOnMount={false}
        >
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
              <ChakraProvider>
                <BrowserRouter>
                  <Header />
                  <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Stake" element={<Stake />} />
                    <Route path="Pools" element={<Pools />} />
                    {/* <Route path="nfts" element={<Nfts />} /> */}
                    <Route path="nfts" element={<NftMarketPlace />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Swap" element={<Swap />} />
                    <Route path="Lottery" element={<Lottery />} />
                    <Route path="Borrow" element={<Borrow />} />
                    <Route path="Wallet" element={<Wallet />} />
                    <Route path="Deposit" element={<Deposit />} />
                    <Route path="EnterLottery" element={<EnterLottery />} />
                    <Route path="LotteryHome" element={<LotteryHome />} />
                    <Route path="UploadNft" element={<UploadNft />} />
                  </Routes>
                  <Footer />
                </BrowserRouter>
              </ChakraProvider>
            </DAppProvider>
          </LotteryProvider>
        </MoralisProvider>
      </div>
    );
  }
}

export default App;
