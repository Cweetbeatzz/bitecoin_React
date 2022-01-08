import React from 'react'
import './Stake.styles.css';

function Stake() {
 return (
  <div class="container ">
    <br/>
    <br/>
      <div>
        <hr class="text-white p-0"/> 
        <h4 class="text-center text-warning"><strong>STAKING POOL</strong></h4>
        <hr class="text-white p-0"/> 
   <br/>

     </div>
   <div class="col-10 d-flex mx-auto m-1 justify-content-center">

   <div class="col-6 m-2">
   <div class="card">
    <div class="card-body">
      <div>
        <h4 class="card-title text-center"><strong>STAKE</strong></h4>
  <hr class="btn-black"/>
      </div>

    <div class="form-group">
    </div>
    <div class="text-center">
        <label>Price</label>
       <input class="form-control mb-1" placeholder="0.0"/> 
    </div>
    <div class="text-center">
       <label>Amount</label>
       <input class="form-control mb-1" placeholder="0.0"/>
    </div>
   
    <div class=" p-2 m-2 text-center">
      <p>Ensure Safety measures in stakes to secure the protocol in exchange for protocol incentives and avoid Liquidation on assets.
      </p>
    </div>
    <hr class="btn-black"/>
    <div class="text-center mb-3">
    <a href="link" class="btn btn-dark">STAKE</a>
    </div>

      <div class="text-center  mb-3">
    <a href="link" class="btn btn-warning">CONNECT WALLET</a>
    </div>
    </div>
    </div>
   </div>


   <div class="col-4 m-2">
    <div class="card">
     <div class="card-body">
    <h5 class="card-title text-center"><strong>MANAGE STAKING</strong></h5>
    <div class="dropdown-divider "></div>

    
    <div><label>BALANCE</label></div>
    <div><label>UN-STAKE</label></div>
    
    <div class="dropdown-divider bg-black"></div>
    <div><label>STAKED</label></div>
    
    <br/>
    
    <a href="link" class="btn btn-dark">Go somewhere</a>
    </div>
    </div>
   </div>
   </div>
   
<br/>
<br/>
<br/>
  </div>
 )
}

export default Stake
