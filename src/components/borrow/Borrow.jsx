import React from "react";

function Borrow() {
  return (
    <div className="container ">
      <br />
      <br />
      <div>
        <hr className="text-white p-0" />
        <h4 className="text-center text-warning">
          <strong>BORROW</strong>
        </h4>
        <hr className="text-white p-0" />
      </div>

      <div className=" d-flex mx-auto m-1 justify-content-center">
        <div className="container-fluid m-2">
          <p className="text-white">
            <strong>AVAILABLE ASSETS TO BORROW</strong>
          </p>

          <div className="bg-gradient">
            <div className="card-body">
              <table className="table">
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
                    <th scope="col">
                      <strong>STABLE APY</strong>
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
                    <td>
                      <strong>10.05%</strong>
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
                    <td>
                      <strong>0.80%</strong>
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
                    <td>
                      <strong>1.56%</strong>
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
                    <td>
                      <strong>2.99%</strong>
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

export default Borrow;
