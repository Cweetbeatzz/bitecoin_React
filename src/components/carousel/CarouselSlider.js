import React from 'react'
import { Container } from '../carousel/Carousel.styles';
import './carousel.css';


function CarouselSlider() {
 return (
  <Container>
<div  class="carousel slide bg-danger" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active caroimg" >
            <img class="overflow-hidden img-thumbnail border-0 w-100 h-50 m-0 p-0" src="/images/211019083118-04-bitcoin-file-full-169.jpg" alt=""/>
        </div>
        <div class="carousel-item caroimg">
            <img class="overflow-hidden img-thumbnail border-0 w-100 h-100 m-0 p-0" src="/images/bitcoin.webp"  alt=""/>
        </div>
        <div class="carousel-item caroimg">
            <img class="overflow-hidden img-thumbnail border-0 w-100 h-100 m-0 p-0" src="/images/Ethereum-e1545900837119.webp" alt=""/>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
  </Container>

 )
}

export default CarouselSlider



