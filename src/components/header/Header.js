import React from 'react'
import {Button} from 'react-bootstrap';
import {Container,Menu,RightMenu,CustomMenu,BurgerNav} from './Header.styles';
import {  useEthers } from '@usedapp/core';


function Header() {
      
 const {account,activateBrowserWallet,deactivate} = useEthers();
 const isConnected = account !== undefined;

 return (
      <Container>
                <a href="Index"><strong>BITECOIN</strong></a>
               <Menu>
                    <a href="home">dashboard</a> 
                    <a href="reservation">deposit</a>
                    <a href="reservation">stake</a>
                    <a href="home">lottery</a> 
                    <a href="home">swap</a> 
                    <a href="home">nfts</a> 
                    <a href="reservation">borrow</a>
                
               </Menu>
               <RightMenu>
                    <div>
                       {isConnected ? (<Button onClick={deactivate}>DISCONNECT WALLET</Button> ):
                       (<Button onClick={activateBrowserWallet}>CONNECT WALLET</Button> )}
                    </div>
                    <CustomMenu/>
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
 )
}

export default Header

