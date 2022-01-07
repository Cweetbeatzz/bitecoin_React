import React from 'react'
import CarouselSlider from '../carousel/CarouselSlider';
import {Container,TextItem} from './Home.styles'
import Networks from '../networks/Networks';
import Stake from '../stake/Stake';
import Wallet from '../wallet/Wallet';
import Swap from '../swap/Swap';


function Home() {
 return (
  <Container>
  {/* <CarouselSlider/> */}
  <TextItem>
      <br/>
      <br/>
   <div class="col-12">
     <div class="col-6 mx-auto">
            <div class="text-center d-flex">
            <hr class="text-white"/>
               <h4 class="mx-auto text-center" >
                  <strong> ABOUT BITCOIN</strong>
               </h4>
               <hr class="text-white p-0"/>
            </div>
     </div>
      
       <div>
                <h5 class="text-white text-center p-5">
             Bitcoin (BTC) is the world’s first decentralised cryptocurrency.

             It was created in 2009 by Satoshi Nakamoto, whose true identity is still yet to be confirmed.
             It follows a set of ideas first introduced in Nakamoto's white paper, 'Bitcoin: A Peer-to-Peer
             Electronic Cash System', published on October 31, 2008.

             Bitcoin uses peer-to-peer technology to facilitate payments that require no central
             authority to operate. Individuals who contribute computing power to the Bitcoin network,
             also known as ‘miners’, are incentivised by rewards and transaction fees paid in Bitcoin.
             One Bitcoin is divisible to eight decimal places, and the smallest unit is known as a satoshi.
         </h5>
       </div>
       <div class="text-center">
              <a class="btn button btn-primary" href="https//:Blockchain.com">
             <strong>LEARN MORE</strong>
         </a>
       </div>
        
   </div>
  </TextItem>
   <br></br>
  <Networks/>
    <br></br>
  <Stake/>
    <br></br>
  <Wallet/>
    <br></br>
  </Container>
 )
}

export default Home
