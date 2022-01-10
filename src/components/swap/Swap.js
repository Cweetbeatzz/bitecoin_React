import React from "react";
import "./Swap.styles.css";

function Swap() {
  return (
    <div class="container ">
      <br />
      <br />
      <div>
        <hr class="text-white p-0" />
        <h4 class="text-center text-warning">
          <strong>SWAP ASSET</strong>
        </h4>
        <hr class="text-white p-0" />
        <br />
      </div>
      <div class="col-10 d-flex mx-auto m-1 justify-content-center">
        <div class="col-9 m-2">
          <div class="cont shadow ">
            <div class="card-body mx-auto w-100 justify-content-center">
              <div>
                <hr class="text-white" />
              </div>

              <div class="text-center ">
                <p class=" btn btn-dark text-warning">
                  <strong>TRADE TOKENS INSTANTLY</strong>
                </p>
                <br />
                <label class="btn-outline-warning">PAY</label>
                <br />
                <div class="d-flex justify-content-center">
                  <div class="form-group col-3 mx-2 ">
                    <select class="form-control">
                      <option class="form-control" value="0">
                        Choose Asset...
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-8">
                    <input class="form-control" placeholder="0.0" />
                  </div>
                </div>
              </div>

              <br />
              <div class="  text-warning" id="arrowexchange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-down-up"
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

              <div class="text-center">
                <label class="btn-outline-warning">RECIEVE</label>
                <br />

                <div class="d-flex justify-content-center">
                  <div class="form-group col-3 mx-2">
                    <select class="form-control">
                      <option class="form-control" value="0">
                        Choose Asset...
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-8">
                    <input class="form-control" placeholder="0.0" />
                  </div>
                </div>
              </div>
              <br />

              <div class="text-center mb-3">
                <a href="link" class="btn btn-dark w-25">
                  <strong> SWAP</strong>
                </a>
              </div>
              <hr class="text-white p-0" />

              <div class="text-center  mb-3">
                <a href="link" class="btn btn-warning">
                  CONNECT WALLET
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div class=" p-0">
        <a href="link" class="text-white">
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
