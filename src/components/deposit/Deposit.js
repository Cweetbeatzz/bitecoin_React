import React from "react";
import "./Deposit.styles.css";

function Deposit() {
  return (
    <div class="container ">
      <br />
      <br />
      <div>
        <hr class="text-white p-0" />
        <h4 class="text-center text-warning">
          <strong>DEPOSIT</strong>
        </h4>
        <hr class="text-white p-0" />
      </div>

      <div class=" d-flex mx-auto m-1 justify-content-center">
        <div class="container-fluid m-2">
          <p class="text-white">
            <strong>AVAILABLE ASSETS TO DEPOSIT</strong>
          </p>

          <div class="shadow bg-gradient " id="backgoundcolor">
            <div class="card-body ">
              <table class="table ">
                <thead>
                  <tr class="text-warning">
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
                  <tr class="text-white">
                    <th scope="row">
                      <img
                        src="images/multi-collateral-dai-dai-logo.png"
                        class="artwork"
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
                  <tr class="text-white">
                    <th scope="row">
                      <img
                        src="images/usd-coin-usdc-logo.png"
                        class="artwork"
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
                  <tr class="text-white">
                    <th scope="row">
                      <img
                        src="images/trueusd-tusd-logo.png"
                        class="artwork"
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
                  <tr class="text-white">
                    <th scope="row">
                      <img
                        src="images/logo.png"
                        class="artwork"
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
                  <tr class="text-white">
                    <th scope="row">
                      <img
                        src="images/gemini-dollar-gusd-logo.png"
                        class="artwork"
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
              <div class="text-center  mb-3">
                <a href="link" class="btn btn-warning">
                  CONNECT WALLET
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div class="col-12 ">
            <div class="col-8 m-2 mx-auto">
              <div class="card bg-light bg-opacity-25">
                <div class="card-body ">
                  <div>
                    <h4 class="card-title text-center text-warning">
                      <strong>DEPOSIT</strong>
                    </h4>
                    <hr class="text-white" />
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
                    <p>Deposit to start a transaction.</p>
                  </div>
                  <div class="text-center mb-3">
                    <a href="link" class="btn btn-dark w-25">
                      <strong>DEPOSIT</strong>
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

      <br />
      <br />
      <br />
    </div>
  );
}

export default Deposit;
