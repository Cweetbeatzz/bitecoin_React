import React from "react";
import "./Nft.styles.css";

function Nfts() {
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

      <div className="nft-container">
        <div className=" col-3 mx-auto m-4">
          <div className="w-100">
            <h5 className="text-warning">STATUS</h5>
            <div className="justify-content-center row">
              <hr className="text-white p-0 w-50" />
            </div>

            <div className="d-flex justify-content-center ">
              <div className="m-1 ">
                <button className="btn btn-warning">
                  <strong>PURCHASE</strong>
                </button>
              </div>
              <div className="m-1">
                <button className="btn btn-dark">
                  <strong>AUCTION</strong>
                </button>
              </div>
            </div>
          </div>

          <div>
            <br />
            <br />
            <h5 className="text-warning">PRICE</h5>
            <div className="justify-content-center row">
              <hr className="text-white p-0 w-50" />
            </div>

            <div className="d-flex justify-content-center ">
              <div className="m-1">
                <button className="btn btn-warning">
                  <strong>PURCHASE</strong>
                </button>
              </div>
              <div className="m-1">
                <button className="btn btn-dark">
                  <strong>AUCTION</strong>
                </button>
              </div>
            </div>
          </div>

          <div>
            <br />
            <br />
            <h5 className="text-warning">GALLERY</h5>
            <div className="justify-content-center row">
              <hr className="text-white p-0 w-50" />
            </div>

            <div className=" ">
              <div className="d-flex justify-content-center ">
                <ul className="list-unstyled  text-white">
                  <li href="link">
                    <a href="link" className="a text-white ">
                      BACKGROUND
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      CLOTHES
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      EARS
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      MOUTH
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      NOSE
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      EYES
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      HEAD
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      CAP
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" className="a text-white">
                      ID
                    </a>
                  </li>
                  <hr />
                </ul>
              </div>
              <div className="m-1 ">
                <button className="btn btn-dark w-50">
                  <strong>RESET</strong>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-9 mx-auto ">
          <div className=" p-5 bg-light bg-opacity-10 mx-auto" id="bloocc">
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

export default Nfts;
