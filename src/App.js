import logo from './logo.svg';
import './App.css';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, ChainId } from "@usedapp/core";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Stake from './components/stake/Stake';
import Wallet from './components/wallet/Wallet';
import Footer from './components/footer/Footer';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';


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
        {/* <Stake/> */}
        {/* <Footer/> */}


        {/* <BrowserRouter>
        <Routes>
        <Route path="Home" component={Home}/>
        <Route path="Stake" component={Stake}/>
        <Route path="Wallet" component={Wallet}/>
        </Routes>
        </BrowserRouter> */}
        
        </DAppProvider>
    );
}

export default App;