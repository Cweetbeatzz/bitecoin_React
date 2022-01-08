import React from 'react'

function Swap() {
 return (
    <div class="container ">
    <br/>
    <br/>
      <div>
         <hr class="text-white p-0"/> 
        <h4 class="text-center text-warning"><strong>SWAP TOKEN</strong></h4>
         <hr class="text-white p-0"/> 
         <br/>
     </div>
   <div class="col-10 d-flex mx-auto m-1 justify-content-center">
   

   <div class="col-9 m-2">
   <div class="card">
    <div class="card-body mx-auto w-100 justify-content-center">
      <div>
        <h4 class="card-title text-center"><strong>SWAP</strong></h4>
        <hr class="btn-black"/>
      </div>

    
    <div class="text-center">
        <label>Pay</label>
        <br/>
        <div class="d-flex">
          <div class="form-group col-3 mx-2">
                    <select class="form-control">
                        <option class="form-control" value="0">Choose Token...</option>
                    </select>
          </div>
          <div class="form-group col-8">
            <input class="form-control" placeholder="0.0"/> 
          </div>

       </div>
    </div>

    <div class="text-center">
       <label>Recieve</label>
              <div class="d-flex">
          <div class="form-group col-3 mx-2">
                    <select class="form-control">
                        <option class="form-control" value="0">Choose Token...</option>
                    </select>
          </div>
          <div class="form-group col-8">
            <input class="form-control" placeholder="0.0"/> 
          </div>

       </div>
    </div>
         <br/>
   
    <div class="text-center mb-3">
    <a href="link" class="btn btn-dark">SWAP</a>
    </div>
         <hr class="text-black p-0"/> 

      <div class="text-center  mb-3">
    <a href="link" class="btn btn-warning">CONNECT WALLET</a>
    </div>
    </div>
    </div>
   </div>
   </div>
   
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
  </div>
 )
}

export default Swap
