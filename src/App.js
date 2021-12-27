import logo from './logo.svg';
import './App.css';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, ChainId } from "@usedapp/core";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
    return ( <DAppProvider config = {
            {
                supportedChains: [ChainId.Kovan, ChainId.Rinkeby, ChainId.Avalanche, ChainId.BSC,
                    ChainId.Fantom, ChainId.Mainnet, ChainId.Ropsten, ChainId.xDai
                ]
            }
        } >
        <Header/>
        <Home/>
        </DAppProvider>
    );
}

export default App;