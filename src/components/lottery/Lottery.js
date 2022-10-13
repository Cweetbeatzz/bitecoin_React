import React from "react";
import "./Lottery.styles.css";

function Lottery() {
  return (
    <div>
      <br />
      <div>
        <div className="bg-gradient p-4 m-3 ">
          <h4 className=" justify-content-lg-start pl-3 text-warning ">
            <strong>BITE BLOCKS LOTTERY</strong>
          </h4>
          <div className=" justify-content-lg-start">
            <div className="mx-auto">
              <hr className="text-white w-50 mx-auto" />
              <h6 className="txt display-3 " id="priceamt">
                <strong id="moneyval">$100,000</strong>
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
        <div className="bg-dark p-4" id="tickets">
          <h3 className=" ">Get your tickets now!!!</h3>
        </div>
        <br />
        <br />
        <div className="container bg-gradient p-4">
          <span className="d-flex justify-content-center gap-2">
            <h4 className="txt bg-warning p-2 text-black">
              <strong>Hurry!!!</strong>
            </h4>
            <h4 className="txt bg-dark p-2">
              <strong>18 hrs</strong>{" "}
            </h4>
            <h4 className="txt bg-dark p-2">
              <strong>55 min</strong>
            </h4>
            <h4 className="txt bg-dark p-2">
              <strong>23 sec</strong>
            </h4>
            <h4 className="txt p-2 bg-dark text-warning">
              <strong>untill draw</strong>
            </h4>
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
                <br />
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Lottery;
