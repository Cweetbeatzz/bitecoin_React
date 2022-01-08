import React from "react";

function Networks() {
  return (
    <div class="container">
      <hr class="text-white" />
      <div class="card-head col-4 mx-auto">
        <div class=" h-100 mx-auto">
          <h5 class="text-warning d-flex text-center  justify-content-center">
            <strong>SELECT YOUR NETWORK</strong>
          </h5>
        </div>
      </div>
      <hr class="text-white" />

      <div class="card-body mx-auto col-md-7 col-sm-7 justify-content-between">
        <div class="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div class="col-3 m-1">
            <button class="btn btn-warning w-100 text-uppercase" href="ether">
              Kovan
            </button>
          </div>
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100 text-uppercase" href="ether">
              Rinkeby
            </button>
          </div>
        </div>

        <div class="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100  text-uppercase" href="ether">
              BSC
            </button>
          </div>
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100 text-uppercase" href="ether">
              Avalanche
            </button>
          </div>
        </div>

        <div class="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100  text-uppercase" href="ether">
              Mainnet
            </button>
          </div>
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100 text-uppercase" href="ether">
              Ropsten
            </button>
          </div>
        </div>

        <div class="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100  text-uppercase" href="ether">
              Fantom
            </button>
          </div>
          <div class="col-3 m-1 ">
            <button class="btn btn-warning w-100 text-uppercase " href="ether">
              xDai
            </button>
          </div>
        </div>

        <br></br>
        <div class="d-flex  mr-1 mx-auto justify-content-center">
          <div>
            <h6 class="text-white">
              Your Current MetaMask network is Ethereum Mainnet
            </h6>
          </div>
        </div>
      </div>
      <hr class="text-white" />
    </div>
  );
}

export default Networks;
