import React from "react";
import CarouselSlider from "../carousel/CarouselSlider";
import { Container, TextItem } from "./Home.styles";
import Networks from "../networks/Networks";
import "./Home.styles.css";

function Home() {
  return (
    <Container>
      <CarouselSlider />
      <br />

      <Networks />

      <TextItem>
        <br />
        <br />
        <div class="col-12">
          <div class="col-6 mx-auto">
            <div class="text-center d-flex">
              <hr class="text-white" />
              <h4 class="mx-auto text-center text-warning">
                <strong> ABOUT BITCOIN</strong>
              </h4>
              <hr class="text-white p-0" />
            </div>
          </div>

          <div>
            <h5 class="text-white text-center  p-5">
              Bitcoin (BTC) is the world’s first decentralised cryptocurrency.
              It was created in 2009 by Satoshi Nakamoto, whose true identity is
              still yet to be confirmed. It follows a set of ideas first
              introduced in Nakamoto's white paper, 'Bitcoin: A Peer-to-Peer
              Electronic Cash System', published on October 31, 2008. Bitcoin
              uses peer-to-peer technology to facilitate payments that require
              no central authority to operate. Individuals who contribute
              computing power to the Bitcoin network, also known as ‘miners’,
              are incentivised by rewards and transaction fees paid in Bitcoin.
              One Bitcoin is divisible to eight decimal places, and the smallest
              unit is known as a satoshi.
            </h5>
          </div>
          <div class="text-center">
            <a class="btn button btn-warning" href="https://Blockchain.com">
              <strong>LEARN MORE</strong>
            </a>
          </div>
        </div>
      </TextItem>
      <br />
      <br />
      <hr class="text-white" />
      <div class="text-center">
        <h4 class=" text-warning">
          <strong>MARKETS</strong>
        </h4>
      </div>
      <br />
      <div class="container ">
        <div class="row justify-content-center">
          <div class="d-flex mx-auto justify-content-center">
            <div class="advertimages">
              <img
                src="images/multi-collateral-dai-dai-logo.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
            <div class="advertimages">
              <img
                src="images/gemini-dollar-gusd-logo.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
            <div class="advertimages">
              <img
                src="images/usd-coin-usdc-logo.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
            <div class="advertimages">
              <img
                src="images/trueusd-tusd-logo.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
            <div class="advertimages">
              <img
                src="images/chainlink-link-logo.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
            <div class="advertimages">
              <img
                src="images/Ethereum_logo_2014.svg.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
            <div class="advertimages">
              <img
                src="images/aave-aave-logo.png"
                class="artwork"
                height="70"
                width="70"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <br />
    </Container>
  );
}

export default Home;
