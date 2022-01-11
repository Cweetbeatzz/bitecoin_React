import React from "react";

function Networks() {
  return (
    <div className="container">
      <hr className="text-white" />
      <div className="card-head col-4 mx-auto">
        <div className=" h-100 mx-auto">
          <h5 className="text-warning d-flex text-center  justify-content-center">
            <strong>SELECT YOUR NETWORK</strong>
          </h5>
        </div>
      </div>
      <hr className="text-white" />

      <div className="card-body mx-auto col-md-7 col-sm-7 justify-content-between">
        <div className="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div className="col-3 m-1">
            <button className="btn btn-warning w-100 text-uppercase" href="ether">
              Kovan
            </button>
          </div>
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100 text-uppercase" href="ether">
              Rinkeby
            </button>
          </div>
        </div>

        <div className="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100  text-uppercase" href="ether">
              BSC
            </button>
          </div>
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100 text-uppercase" href="ether">
              Avalanche
            </button>
          </div>
        </div>

        <div className="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100  text-uppercase" href="ether">
              Polygon
            </button>
          </div>
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100 text-uppercase" href="ether">
              Ropsten
            </button>
          </div>
        </div>

        <div className="d-flex m-3 mr-1 mx-auto justify-content-center">
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100  text-uppercase" href="ether">
              Fantom
            </button>
          </div>
          <div className="col-3 m-1 ">
            <button className="btn btn-warning w-100 text-uppercase " href="ether">
              xDai
            </button>
          </div>
        </div>

        <br></br>
        <div className="d-flex  mr-1 mx-auto justify-content-center">
          <div>
            <h6 className="text-white">
              Your Current MetaMask network is Ethereum Mainnet
            </h6>
          </div>
        </div>
      </div>
      <hr className="text-white" />
    </div>
  );
}

export default Networks;
