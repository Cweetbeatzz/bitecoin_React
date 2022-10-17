import React from "react";

export default function Draw() {
  return (
    <div>
      {" "}
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
  );
}
