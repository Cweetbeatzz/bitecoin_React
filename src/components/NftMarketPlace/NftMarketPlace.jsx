import React from "react";
import "./NftMarketPlace.styles.css";
import { Link } from "react-router-dom";

function NftMarketPlace() {
  return (
    <div>
      <br />
      <div className="text-center container">
        <hr className="text-white p-0" />
        <h1 className="text-center text-warning">
          <strong>NFTS</strong>
        </h1>
        <hr className="text-white p-0" />
      </div>
      {/* ############### */}
      <div className="col-6 col-md-2 bg-danger mx-auto my-auto ">
        <Link
          className="btn btn-warning btn-lg w-100"
          to="/UploadNft"
          type="submit"
        >
          <strong>UPLOAD NFT</strong>{" "}
        </Link>
      </div>

      <div className="nft-container">
        <div className=" col-12 mx-auto m-3">
          <div className=" p-5 bg-gradient mx-auto" id="bloocc">
            <div className="">
              <div className="gap-2" id="neftflex">
                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid border-0"
                    id="cardimg"
                    src="images/2.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Blu Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class="card-img-top "
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1" className="px-1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/4.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Black Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/3.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Red Mafia #5466</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/4.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Black Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/5.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>White Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/3.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Red Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/3.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Red Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/5.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>White Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid"
                    id="cardimg"
                    src="images/4.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Black Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex ">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class=""
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="card" id="card">
                  <img
                    class="card-img-top img-fluid border-0"
                    id="cardimg"
                    src="images/2.png"
                    alt=""
                  />
                  <div class="card-body">
                    <h6 class="card-title text-center">Cweetfaces</h6>
                    <h5 class="card-title text-center" id="nftheadname">
                      <strong>Blu Mafia #5456</strong>
                    </h5>
                    <hr />
                    <div class=" d-flex justify-content-evenly p-0 m-0">
                      <h6 class="card-text text-start" id="askingprice1">
                        Asking Price
                      </h6>
                      <span className="d-flex">
                        {/* <h6 class="" id='dollarvalue'>($59.99)</h6>  */}
                        <img
                          class="card-img-top "
                          id="ethlogo1"
                          src="images/Ethereum_logo_2014.svg.png"
                          alt=""
                        />
                        <h5 id="ethvalue1" className="px-1">
                          <strong>0.086</strong>
                        </h5>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftMarketPlace;
