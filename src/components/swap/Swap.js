import React from "react";
import "./Swap.styles.css";

function Swap() {
  return (
    <div className="container ">
      <br />
      <br />
      <div>
        <hr className="text-white p-0" />
        <h4 className="text-center text-warning">
          <strong>SWAP ASSET</strong>
        </h4>
        <hr className="text-white p-0" />
        <br />
      </div>
      <div className="col-10 d-flex mx-auto m-1 justify-content-center">
        <div className="col-9 m-2">
          <div className="cont shadow ">
            <div className="card-body mx-auto w-100 justify-content-center">
              <div>
                <hr className="text-white" />
              </div>

              <div className="text-center ">
                <p className=" btn btn-dark text-warning">
                  <strong>TRADE TOKENS INSTANTLY</strong>
                </p>
                <br />
                <label className="btn-outline-warning">PAY</label>
                <br />
                <div className="d-flex justify-content-center">
                  <div className="form-group col-3 mx-2 ">
                    <select className="form-control">
                      <option className="form-control" value="0">
                        Choose Asset...
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-8">
                    <input className="form-control" placeholder="0.0" />
                  </div>
                </div>
              </div>

              <br />
              <div
                className="text-warning arrowexchange mx-auto"
                id="arrowexchange"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </div>
              <br />
              <br />

              <div className="text-center">
                <label className="btn-outline-warning">RECIEVE</label>
                <br />

                <div className="d-flex justify-content-center">
                  <div className="form-group col-3 mx-2">
                    <select className="form-control">
                      <option className="form-control" value="0">
                        Choose Asset...
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-8">
                    <input className="form-control" placeholder="0.0" />
                  </div>
                </div>
              </div>
              <br />

              <div className="text-center mb-3">
                <a href="link" className="btn btn-dark w-25">
                  <strong> SWAP</strong>
                </a>
              </div>
              <hr className="text-white p-0" />

              <div className="text-center  mb-3">
                <a href="link" className="btn btn-warning">
                  CONNECT WALLET
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className=" p-0">
        <a href="link" className="text-white">
          Need help?
        </a>
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

export default Swap;
