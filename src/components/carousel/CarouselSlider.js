import React from "react";
import { Container } from "../carousel/Carousel.styles";
import "./carousel.css";

function CarouselSlider() {
  return (
    <Container>
      <div className="carousel slide bg-danger" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active caroimg">
            <img
              className="overflow-hidden img-thumbnail border-0 w-100 h-50 m-0 p-0"
              src="/images/1440x810_cmsv2_768120c0-804d-5074-b412-98bc494766e7-6213088.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item caroimg">
            <img
              className="overflow-hidden img-thumbnail border-0 w-100 h-100 m-0 p-0"
              src="/images/bitcoin.webp"
              alt=""
            />
          </div>
          <div className="carousel-item caroimg">
            <img
              className="overflow-hidden img-thumbnail border-0 w-100 h-100 m-0 p-0"
              src="/images/Ethereum-e1545900837119.webp"
              alt=""
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Container>
  );
}

export default CarouselSlider;
