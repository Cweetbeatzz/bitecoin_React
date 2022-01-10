import React from "react";

function Lottery() {
  return (
    <div>
      <br />
      <div>
        <div class="bg-gradient p-4 m-3 ">
          <h4 class=" justify-content-lg-start pl-3 text-warning ">
            <strong>THE BLOCKS LOTTERY</strong>
          </h4>
          <div class=" justify-content-lg-start">
            <div class="mx-auto">
              <hr class="text-white w-50 mx-auto" />
              <h6 class="txt display-3">
                <strong>$100,000</strong>
              </h6>
              <hr class="text-white w-50 mx-auto" />
            </div>

            <h4 class="txt">in prizes!!!</h4>
            <br />
          </div>

          <div class="d-flex justify-content-center ">
            <div class="m-1 ">
              <button class="btn btn-warning shadow">
                <strong>CONNECT WALLET</strong>
              </button>
            </div>
            <div class="m-1">
              <button class="btn btn-dark shadow">
                <strong>BUY TICKETS</strong>
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 class="txt ">Get your tickets now!!!</h4>
        </div>
        <br />
        <br />
        <div>
          <span class="d-flex justify-content-center">
            <h4 class="txt ">Hurry!!!</h4>
            <h4 class="txt ">18 hrs 55 min</h4>
            <h4 class="txt ">untill draw</h4>
          </span>
        </div>

        <br />
        <br />
        <div class="container">
          <div class="col-8 m-2 mx-auto">
            <div class="card bg-light bg-opacity-25 ">
              <div class="card-body">
                <div>
                  <h4 class="card-title text-center text-warning">
                    <strong>STAKE</strong>
                  </h4>
                  <hr class="btn-black" />
                </div>

                <div class="form-group"></div>
                <div class="text-center">
                  <label>
                    <strong>Price</strong>
                  </label>
                  <input class="form-control mb-1" placeholder="0.0" />
                </div>
                <div class="text-center">
                  <label>
                    <strong>Amount</strong>
                  </label>
                  <input class="form-control mb-1" placeholder="0.0" />
                </div>

                <div class=" p-2 m-2 text-center text-white">
                  <p>
                    Ensure Safety measures in stakes to secure the protocol in
                    exchange for protocol incentives and avoid Liquidation on
                    assets.
                  </p>
                </div>
                <div class="text-center mb-3">
                  <a href="link" class="btn btn-dark w-25">
                    <strong>STAKE</strong>
                  </a>
                </div>
                <hr class="text-white" />

                <div class="text-center  mb-3">
                  <a href="link" class="btn btn-warning">
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
