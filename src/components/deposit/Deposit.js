import React from "react";
import "./Deposit.styles.css";

function Deposit() {
  return (
    <div className="container ">
      <br />
      <br />
      <div>
        <hr className="text-white p-0" />
        <h4 className="text-center text-warning">
          <strong>DEPOSIT</strong>
        </h4>
        <hr className="text-white p-0" />
      </div>

      <div className=" d-flex mx-auto m-1 justify-content-center">
        <div className="container-fluid m-2">
          <p className="text-white">
            <strong>AVAILABLE ASSETS TO DEPOSIT</strong>
          </p>

          <div className="shadow bg-gradient " id="backgoundcolor">
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
            </div>
          </div>
          <br />
          <br />

          <div className="col-12 ">
            <div className="col-8 m-2 mx-auto">
              <div className="card bg-light bg-opacity-25">
                <div className="card-body ">
                  <div>
                    <h4 className="card-title text-center text-warning">
                      <strong>DEPOSIT</strong>
                    </h4>
                    <hr className="text-white" />
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
                    <p>Deposit to start a transaction.</p>
                  </div>
                  <div className="text-center mb-3">
                    <a href="link" className="btn btn-dark w-25">
                      <strong>DEPOSIT</strong>
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

      <br />
      <br />
      <br />
    </div>
  );
}

export default Deposit;
