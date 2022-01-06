import React from 'react';
import './Swap.styles.css';

function Swap() {
    return ( 
        <div class = "container">
        < div >
        <h4 class = "text-center text-warning" > < strong > SWAP </strong></h4 >
        </div> < hr class = "bg-warning"/>
        <div class = "col-10 d-flex mx-auto m-1 justify-content-center" >


        <div class = "col-6 m-2" >
        <div class = "card cardbackground" >
        <div class = "card-body" >
        <div >
        <h4 class = "card-title text-center" > < strong > SWAP TOKEN </strong></h4 >
        < div class = "dropdown-divider w-50 text-center justify-content-center mx-auto btn-info"> </div> </div >

        <div class = "form-group" >
        </div> <div class = "text-center" >
        < label> Pay </label> <input class = "form-control mb-1" placeholder = "0.0" />
        </div> <div class = "text-center" >
        <label > Recieve </label> <input class = "form-control mb-1" placeholder = "0.0" />
        </div> <br> </br> <div class = " form-check form-switch" >
        <span > Swap &copy; Transfer < input class = "form-check-input " type = "checkbox" id = "flexSwitchCheckChecked" checked = "" /> </span> </div > <br> </br>

        <div class = "text-center mb-3" >
        <a href = "link" class = "btn btn-primary" > SWAP </a> </div>

        <div class = "text-center  mb-3" >
        <a href = "link"class = "btn btn-primary" > CONNECT WALLET </a> </div >
         { /* ################################## */ } 
         <hr/>
        <div class = "card-body" >
        <div class = "d-flex text-center" >
        <div class = "col-7" >
        <p > Estimated Cost </p> 
        <p> Staking APR </p> 
        <p> Minimum Recieved </p> 
        </div > 
        <div class = "col-4" >
        <p > $303 .89 </p> 
        <p > 0.08 % </p> 
        <p > 322.353323 USDT </p> 
        </div> 
        </div>
        </div>
        </div> 
        </div> 
        </div>


        {
            /* <div class="col-4 m-2">
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
               </div> */
        } </div>

        <br />
        < br />
        < br />
        </div>
    )
}

export default Swap