import React from "react";

function Lottery() {
  return (
    <div>
      <br />
      <div>
        <div className="bg-gradient p-4 m-3 ">
          <h4 className=" justify-content-lg-start pl-3 text-warning ">
            <strong>THE BLOCKS LOTTERY</strong>
          </h4>
          <div className=" justify-content-lg-start">
            <div className="mx-auto">
              <hr className="text-white w-50 mx-auto" />
              <h6 className="txt display-3">
                <strong>$100,000</strong>
              </h6>
              <hr className="text-white w-50 mx-auto" />
            </div>

            <h4 className="txt">in prizes!!!</h4>
            <br />
          </div>

          <div className="d-flex justify-content-center ">
            <div className="m-1 ">
              <button className="btn btn-warning shadow">
                <strong>CONNECT WALLET</strong>
              </button>
            </div>
            <div className="m-1">
              <button className="btn btn-dark shadow">
                <strong>BUY TICKETS</strong>
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="txt ">Get your tickets now!!!</h4>
        </div>
        <br />
        <br />
        <div>
          <span className="d-flex justify-content-center">
            <h4 className="txt ">Hurry!!!</h4>
            <h4 className="txt ">18 hrs 55 min</h4>
            <h4 className="txt ">untill draw</h4>
          </span>
        </div>

        <br />
        <br />
        <div className="container">
          <div className="col-8 m-2 mx-auto">
            <div className="card bg-light bg-opacity-25 ">
              <div className="card-body">
                <div>
                  <h4 className="card-title text-center text-warning">
                    <strong>STAKE</strong>
                  </h4>
                  <hr className="btn-black" />
                </div>

                <div className="form-group"></div>
                <div className="text-center">
                  <label>
                    <strong>Price</strong>
                  </label>
                  <input className="form-control mb-1" placeholder="0.0" />
                </div>
                <div className="text-center">
                  <label>
                    <strong>Amount</strong>
                  </label>
                  <input className="form-control mb-1" placeholder="0.0" />
                </div>

                <div className=" p-2 m-2 text-center text-white">
                  <p>
                    Ensure Safety measures in stakes to secure the protocol in
                    exchange for protocol incentives and avoid Liquidation on
                    assets.
                  </p>
                </div>
                <div className="text-center mb-3">
                  <a href="link" className="btn btn-dark w-25">
                    <strong>STAKE</strong>
                  </a>
                </div>
                <hr className="text-white" />

                <div className="text-center  mb-3">
                  <a href="link" className="btn btn-warning">
                    <strong>CONNECT WALLET</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lottery;
