import React from "react";
import "./Stake.styles.css";

function Stake() {
  return (
    <div class="container ">
      <br />
      <br />
      <div>
        <hr class="text-white p-0" />
        <h4 class="text-center text-warning">
          <strong>STAKING POOL</strong>
        </h4>
        <hr class="text-white p-0" />
        <br />
      </div>

      <div>
        <div class="col-6 m-3 bg-gradient">
          <p
            class="display-1 justify-content-lg-start  text-warning farms"
            id=""
          >
            <strong>Farms </strong>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              class="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </p>
          <div class="justify-content-lg-start">
            <h6 class="txt">Stake token to earn...</h6>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class="col-12 d-flex mx-auto m-1 ">
        <div class="col-8 m-2">
          <div class="card bg-light bg-opacity-25">
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

        <div class="col-4 m-2">
          <div class=" bg-gradient">
            <div class="card-body">
              <h5 class="card-title text-center text-warning">
                <strong>MANAGE STAKING</strong>
              </h5>
              <div class="dropdown-divider "></div>

              <div>
                <label class="text-white">
                  <strong>BALANCE</strong>
                </label>
              </div>
              <div>
                <label class="text-white">
                  <strong>UN-STAKE</strong>
                </label>
              </div>

              <div class="dropdown-divider bg-white"></div>
              <div>
                <label class="text-white">
                  <strong>STAKED</strong>
                </label>
              </div>

              <br />

              <a href="link" class="btn btn-dark">
                <strong>UNSTAKE</strong>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Stake;
