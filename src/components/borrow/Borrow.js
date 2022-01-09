import React from "react";

function Borrow() {
  return (
    <div class="container ">
      <br />
      <br />
      <div>
        <hr class="text-white p-0" />
        <h4 class="text-center text-warning">
          <strong>BORROW</strong>
        </h4>
        <hr class="text-white p-0" />
      </div>

      <div class=" d-flex mx-auto m-1 justify-content-center">
        <div class="container-fluid m-2">
          <p class="text-white">
            <strong>AVAILABLE COINS TO BORROW</strong>
          </p>

          <div class="card">
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ASSET</th>
                    <th scope="col">AVAILABLE TO BORROW</th>
                    <th scope="col">VARIABLE APY</th>
                    <th scope="col">STABLE APY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                    <td>
                      <strong>10.05%</strong>
                    </td>
                  </tr>
                  <tr>
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
                    <td>
                      <strong>0.80%</strong>
                    </td>
                  </tr>
                  <tr>
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
                    <td>
                      <strong>1.56%</strong>
                    </td>
                  </tr>
                  <tr>
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
                    <td>
                      <strong>2.99%</strong>
                    </td>
                  </tr>
                  <tr>
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
                    <td>
                      <strong>0.80%</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Borrow;
