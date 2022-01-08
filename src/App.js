import './App.css';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, ChainId } from "@usedapp/core";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import Stake from './components/stake/Stake';
import Wallet from './components/wallet/Wallet.js';
import Footer from './components/footer/Footer.js';
import Lottery from './components/lottery/Lottery.js';
import Borrow from './components/borrow/Borrow.js';
import Swap from './components/swap/Swap.js';
import Deposit from './components/deposit/Deposit.js';
import Nft from './components/nft/Nfts.js';
import Dashboard from './components/dashboard/Dashboard.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
    
    return ( <div class="App"><DAppProvider config = {
            {
                supportedChains: [ChainId.Kovan, ChainId.Rinkeby, ChainId.Avalanche, ChainId.BSC,
                    ChainId.Fantom, ChainId.Mainnet, ChainId.Ropsten, ChainId.xDai
                ]
            }
        } >
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="Home" element={<Home/>}/>
        <Route path="Stake" element={<Stake/>}/>
        <Route path="Nft" element={<Nft/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="Swap" element={<Swap/>}/>
        <Route path="Lottery" element={<Lottery/>}/>
        <Route path="Borrow" element={<Borrow/>}/>
        <Route path="Wallet" element={<Wallet/>}/>
        <Route path="Deposit" element={<Deposit/>}/>
        </Routes>
        <Footer/>

        </BrowserRouter>
        
        </DAppProvider>
        </div>
    );
}

export default App;