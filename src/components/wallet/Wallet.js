import React from "react";

function Wallet() {
  return (
    <div class="container">
      <br />
      <hr class="text-white" />
      <div class="card-head col-4 mx-auto">
        <div class=" h-100 mx-auto">
          <h4 class="text-warning d-flex text-center  justify-content-center">
            <strong>YOUR WALLET</strong>
          </h4>
        </div>
      </div>
      <hr class="text-white" />

      <div class="card-body mx-auto col-md-7 col-sm-7 justify-content-between">
        <ul class="nav nav-tabs ">
          <li class="nav-item">
            <a class="nav-link active text-dark" href="link">
              ETHEREUM
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-dark" href="link">
              DAI
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-dark" href="link">
              TOKEN
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-dark" href="link">
              GAS FEES
            </a>
          </li>
        </ul>
        <br></br>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Wallet;
