import React from "react";
import "./Stake.styles.css";

function Stake() {
  return (
    <div className="container ">
      <br />
      <br />
      <div>
        <hr className="text-white p-0" />
        <h4 className="text-center text-warning">
          <strong>STAKING POOL</strong>
        </h4>
        <hr className="text-white p-0" />
        <br />
      </div>
      <div className="container">
        <div className="col-6  bg-gradient" id="farmnotify">
          <p
            className="display-1 justify-content-lg-start  text-warning farms"
            id=""
          >
            <strong>Farms </strong>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </p>
          <div className="justify-content-lg-start">
            <h6 className="txt">Stake token to earn...</h6>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="m-1 gap-2" id="contentbody">
        <div className="col-8 m-2 mx-auto" id="firblock">
          <div className="card bg-light bg-opacity-25">
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

        <div className="col-4 m-2 mx-auto" id="secblock">
          <div className=" bg-gradient">
            <div className="card-body">
              <h5 className="card-title text-center text-warning">
                <strong>MANAGE STAKING</strong>
              </h5>
              <div className="dropdown-divider "></div>

              <div>
                <label className="text-white">
                  <strong>BALANCE</strong>
                </label>
              </div>
              <div>
                <label className="text-white">
                  <strong>UN-STAKE</strong>
                </label>
              </div>

              <div className="dropdown-divider bg-white"></div>
              <div>
                <label className="text-white">
                  <strong>STAKED</strong>
                </label>
              </div>

              <br />

              <a href="link" className="btn btn-dark">
                <strong>UNSTAKE</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Stake;
