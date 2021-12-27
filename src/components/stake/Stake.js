import React from 'react'

function Stake() {
 return (
  <div class="container ">
      <div>
        <h4 class="text-center text-white"><strong>CONTRACTS</strong></h4>
     </div>
   <div class="col-10 d-flex mx-auto m-1 justify-content-center">
   

   <div class="col-6 m-2">
   <div class="card">
    <div class="card-body">
      <div>
        <h4 class="card-title text-center"><strong>STAKE</strong></h4>
        <div class="dropdown-divider w-50 text-center justify-content-center mx-auto btn-info"></div>
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
      <p>Try your luck and stake with any netwwork of your choice
        and get a 10% return on every contract staked on...<br/>
        ROI is monthly.
      </p>
    </div>
    <div class="text-center">
    <a href="link" class="btn btn-primary">PROCEED</a>
    </div>
    </div>
    </div>
   </div>


   <div class="col-4 m-2">
    <div class="card">
     <div class="card-body">
    <h5 class="card-title text-center"><strong>STAKING PARAMETERS</strong></h5>
    <div class="dropdown-divider "></div>

    
    <div><label>BALANCE</label></div>
    <div><label>UN-STAKE</label></div>
    
    <div class="dropdown-divider bg-black"></div>
    <div><label>STAKED</label></div>
    <br/>
    
    <a href="link" class="btn btn-primary">Go somewhere</a>
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
