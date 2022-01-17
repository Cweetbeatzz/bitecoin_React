import React from "react";
import "./Pools.styles.css";

function Pools() {
  return (
    <div>
      <br />

      <div className="container">
        <div className=" col-7 m-3 ">
          <h3 className="display-5 justify-content-lg-start pl-3 text-warning text-start ">
            <span className="d-flex">
              <strong className="font-weight-bold">
                The Block is made with Bricks.....
              </strong>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="46"
                  fill="currentColor"
                  className="bi bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              </div>
            </span>
          </h3>
          <div className="justify-content-lg-start text-start">
            <h6 className="txt">
              Start with little or high bricks, Trade, earn & win crypto on the
              most decentralized platform...
            </h6>
            <br />
          </div>

          <div className="d-flex text-start">
            <div className="m-1 ">
              <button className="btn btn-warning shadow">
                <strong>CONNECT WALLET</strong>
              </button>
            </div>
            <div className="m-1">
              <button className="btn btn-dark shadow">
                <strong>TRADE NOW</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="d-flex container bg-gradient">
        <div className="col-6 m-3"></div>

        <div className="col-6 m-3">
          <h1
            className="display-3 justify-content-lg-start pl-3 text-warning "
            id="assetpool"
          >
            <strong>Asset Pools...</strong>
          </h1>
          <div className="justify-content-lg-start px-3">
            <h6 className="txt p-3">
              Stake some token to earn. Remember High APR,low risk...
            </h6>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="text-white" />
      </div>

      <div>
        <div className=" d-flex mx-auto m-1 justify-content-center">
          <div className="container-fluid m-2">
            <p className="text-white ">
              <strong>AVAILABLE ASSETS TO DEPOSIT</strong>
            </p>

            <div
              className="m-5 card bg-light bg-opacity-10 shadow"
              id="backgoundcolor"
            >
              <div className="card-body ">
                <table className="table ">
                  <thead>
                    <tr className="text-warning">
                      <th scope="col">
                        <strong>#</strong>
                      </th>
                      <th scope="col">
                        <strong>ASSET</strong>
                      </th>
                      <th scope="col">
                        <strong>WALLET BALANCE</strong>
                      </th>
                      <th scope="col">
                        <strong>APY</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-white">
                      <th scope="row">
                        <img
                          src="images/multi-collateral-dai-dai-logo.png"
                          className="artwork"
                          height="30"
                          width="30"
                          alt=""
                        />
                      </th>
                      <td>
                        <strong>DAI</strong>
                      </td>
                      <td>
                        <strong>--</strong>
                      </td>
                      <td>
                        <strong>2.81%</strong>
                      </td>
                    </tr>
                    <tr className="text-white">
                      <th scope="row">
                        <img
                          src="images/usd-coin-usdc-logo.png"
                          className="artwork"
                          height="30"
                          width="30"
                          alt=""
                        />
                      </th>
                      <td>
                        <strong>USD Coin</strong>
                      </td>
                      <td>
                        <strong>--</strong>
                      </td>
                      <td>
                        <strong>10.05%</strong>
                      </td>
                    </tr>
                    <tr className="text-white">
                      <th scope="row">
                        <img
                          src="images/trueusd-tusd-logo.png"
                          className="artwork"
                          height="30"
                          width="30"
                          alt=""
                        />
                      </th>
                      <td>
                        <strong>True USD</strong>
                      </td>
                      <td>
                        <strong>--</strong>
                      </td>
                      <td>
                        <strong>0.80%</strong>
                      </td>
                    </tr>
                    <tr className="text-white">
                      <th scope="row">
                        <img
                          src="images/logo.png"
                          className="artwork"
                          height="30"
                          width="30"
                          alt=""
                        />
                      </th>
                      <td>
                        <strong>sUSD</strong>
                      </td>
                      <td>
                        <strong>--</strong>
                      </td>
                      <td>
                        <strong>1.56%</strong>
                      </td>
                    </tr>
                    <tr className="text-white">
                      <th scope="row">
                        <img
                          src="images/gemini-dollar-gusd-logo.png"
                          className="artwork"
                          height="30"
                          width="30"
                          alt=""
                        />
                      </th>
                      <td>
                        <strong>Gemini Dollar</strong>
                      </td>
                      <td>
                        <strong>--</strong>
                      </td>
                      <td>
                        <strong>2.99%</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center  mb-3">
                  <a href="link" className="btn btn-warning">
                    CONNECT WALLET
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="col-6 mx-auto">
          <div className="text-center d-flex">
            <hr className="text-white" />
            <h4 className="mx-auto text-center text-warning">
              <strong> FAQs</strong>
              <br />
            </h4>
          </div>
        </div>
        <h5 className="text-white">What are Pools?</h5>
        <hr className="text-white p-0 w-50 mx-auto" />
        <div className="container">
          <h5 className="text-white text-center  p-2">
            Pools are series of token/coins that can be traded with any asset of
            choice in demand for Rewards.. .
          </h5>
        </div>
        {/* <div className="text-center">
          <a className="btn button btn-warning" href="https://Blockchain.com">
            <strong>LEARN MORE</strong>
          </a>
        </div> */}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Pools;
