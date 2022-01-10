import React from "react";
import "./Nft.styles.css";

function Nfts() {
  return (
    <div>
      <br />
      <div class="text-center container">
        <hr class="text-white p-0" />
        <h1 class="text-center text-warning">
          <strong>NFTS</strong>
        </h1>
        <hr class="text-white p-0" />
      </div>
      {/* <hr /> */}

      <div class="nft-container ">
        <div class=" col-3 mx-auto m-4">
          <div class="w-100">
            <h5 class="text-warning">STATUS</h5>
            <div class="justify-content-center row">
              <hr class="text-white p-0 w-50" />
            </div>

            <div class="d-flex justify-content-center ">
              <div class="m-1 ">
                <button class="btn btn-warning">
                  <strong>PURCHASE</strong>
                </button>
              </div>
              <div class="m-1">
                <button class="btn btn-dark">
                  <strong>AUCTION</strong>
                </button>
              </div>
            </div>
          </div>

          <div>
            <br />
            <br />
            <h5 class="text-warning">PRICE</h5>
            <div class="justify-content-center row">
              <hr class="text-white p-0 w-50" />
            </div>

            <div class="d-flex justify-content-center ">
              <div class="m-1">
                <button class="btn btn-warning">
                  <strong>PURCHASE</strong>
                </button>
              </div>
              <div class="m-1">
                <button class="btn btn-dark">
                  <strong>AUCTION</strong>
                </button>
              </div>
            </div>
          </div>

          <div>
            <br />
            <br />
            <h5 class="text-warning">GALLERY</h5>
            <div class="justify-content-center row">
              <hr class="text-white p-0 w-50" />
            </div>

            <div class="justify-content-center ">
              <div class="d-flex justify-content-center ">
                <ul class="list-unstyled  text-white">
                  <li href="link">
                    <a href="link" class="a text-white">
                      BACKGROUND
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      CLOTHES
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      EARS
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      MOUTH
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      NOSE
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      EYES
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      HEAD
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      CAP
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a href="link" class="a text-white">
                      ID
                    </a>
                  </li>
                  <hr />
                </ul>
              </div>
              <div class="m-1 ">
                <button class="btn btn-dark w-50">
                  <strong>RESET</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 mx-auto m-4">
          <div class="container-fluid p-5 bg-light row bg-opacity-10">
            <div class="nftcards justify-content-center justify-content-evenly ">
              <div class="card col-3 ">
                {/* <div class=" "> */}
                <img
                  class="card-img-top nftimages"
                  src="images/2.png"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-dark">
                    <strong>CWEETFACE #1</strong>
                  </h6>
                  <h6 class="text-dark">
                    <span class="mx-1">
                      <img
                        class="ethlogo"
                        src="images/Ethereum_logo_2014.svg.png"
                        alt=""
                      />
                      <strong> 0.77</strong>
                    </span>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  BUY
                </a>
                {/* </div> */}
              </div>

              <div class="card col-3 ">
                <img
                  class="card-img-top nftimages"
                  src="images/3.png"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-dark">
                    <strong>CWEETFACE #2</strong>
                  </h6>
                  <h6 class="text-dark">
                    <span class="mx-1">
                      <img
                        class="ethlogo"
                        src="images/Ethereum_logo_2014.svg.png"
                        alt=""
                      />
                      <strong> 0.77</strong>
                    </span>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  BUY
                </a>
              </div>

              <div class="card col-3 ">
                <img
                  class="card-img-top nftimages"
                  src="images/4.png"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-dark">
                    <strong>CWEETFACE #3</strong>
                  </h6>
                  <h6 class="text-dark">
                    <span class="mx-1">
                      <img
                        class="ethlogo"
                        src="images/Ethereum_logo_2014.svg.png"
                        alt=""
                      />
                      <strong> 0.77</strong>
                    </span>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  BUY
                </a>
              </div>

              <div class="card col-3 ">
                <img
                  class="card-img-top nftimages"
                  src="images/5.png"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-dark">
                    <strong>CWEETFACE #4</strong>
                  </h6>
                  <h6 class="text-dark">
                    <span class="mx-1">
                      <img
                        class="ethlogo"
                        src="images/Ethereum_logo_2014.svg.png"
                        alt=""
                      />
                      <strong> 0.77</strong>
                    </span>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  BUY
                </a>
              </div>

              {/* <div class="card col-2">
                <img
                  class="card-img-top nftimages"
                  src="images/ethereum-quatrox-production-adobe.jpeg"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-info">
                    <strong>ETH 0.77</strong>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  ADD TO CART
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    width="18"
                    height="18"
                    fill="currentColor "
                    class="bi bi-cart3 "
                    viewBox="0 0 16 16 "
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                    />
                  </svg>
                </a>
              </div> */}

              {/* <div class="card col-2">
                <img
                  class="card-img-top nftimages"
                  src="images/ethereum-quatrox-production-adobe.jpeg"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-info">
                    <strong>ETH 0.77</strong>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  ADD TO CART
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    width="18"
                    height="18"
                    fill="currentColor "
                    class="bi bi-cart3 "
                    viewBox="0 0 16 16 "
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                    />
                  </svg>
                </a>
              </div> */}

              {/* <div class="card col-2">
                <img
                  class="card-img-top nftimages"
                  src="images/ethereum-quatrox-production-adobe.jpeg"
                  alt=" "
                />
                <span class="card-body d-flex justify-content-evenly ">
                  <h6 class="text-info">
                    <strong>ETH 0.77</strong>
                  </h6>
                </span>
                <a class="btn btn-dark btn-sm m-0" href="link" id="addtocart">
                  ADD TO CART
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    width="18"
                    height="18"
                    fill="currentColor "
                    class="bi bi-cart3 "
                    viewBox="0 0 16 16 "
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nfts;
