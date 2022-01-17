import React from "react";
import "./Wallet.js";
import './Wallet.styles.css'


function Wallet() {
  return (
    <div className="container">
      <br />
      <hr className="text-white" />
      <div className="card-head col-4 mx-auto">
        <div className=" h-100 mx-auto">
          <h4 className="text-warning d-flex text-center  justify-content-center">
            <strong>YOUR WALLET</strong>
          </h4>
        </div>
      </div>
      <hr className="text-white" />

<div className="walletsection">
      <div className="card-body mx-auto col-md-7 col-sm-7 justify-content-between">
        <ul className="nav nav-tabs ">
          <li className="nav-item">
            <a className="nav-link active text-dark" href="link" data-id="ethereum">
              ETHEREUM
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark" href="link" data-id="dai">
              DAI
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark" href="link" data-id="token">
              ASSETS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark" href="link" data-id="gasfees">
              GAS FEES
            </a>
          </li>
        </ul>

            <div className="content active w-100 bg-gradient p-5" id="ethereum">
              <h4 className="text-white"><strong>ETHEREUM</strong></h4>
              <p className="text-white p-5">
                I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                direct trade hoodie ugh chambray, craft beer pork belly flannel
                tacos single-origin coffee art party migas plaid pop-up.
              </p>
            </div>

            <div className="content " id="dai">
              <h4 className="text-white"><strong>DAI</strong></h4>
              <p className="text-white">
                Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                crucifix offal deep v hella biodiesel. Church-key listicle
                polaroid put a bird on it chillwave palo santo enamel pin,
                tattooed meggings franzen la croix cray. Retro yr aesthetic four
                loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                Roof party hammock master cleanse pop-up truffaut, bicycle
                rights skateboard affogato readymade sustainable deep v
                live-edge schlitz narwhal.
              </p>
            </div>

           <div className="content " id="token">
              <h4 className="text-white"><strong>ASSETS</strong></h4>
              <p className="text-white">
                Chambray authentic truffaut, kickstarter brunch taxidermy vape
                heirloom four dollar toast raclette shoreditch church-key.
                Poutine etsy tote bag, cred fingerstache leggings cornhole
                everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                swag, mixtape hashtag marfa readymade direct trade man braid
                cold-pressed roof party. Small batch adaptogen coloring book
                heirloom. Letterpress food truck hammock literally hell of wolf
                beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                banh mi salvia venmo photo booth quinoa chicharrones.
              </p>
            </div>

                <div className="content " id="gasfees">
              <h4 className="text-white"><strong>GAS FEES</strong></h4>
              <p className="text-white">
                Chambray authentic truffaut, kickstarter brunch taxidermy vape
                heirloom four dollar toast raclette shoreditch church-key.
                Poutine etsy tote bag, cred fingerstache leggings cornhole
                everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                swag, mixtape hashtag marfa readymade direct trade man braid
                cold-pressed roof party. Small batch adaptogen coloring book
                heirloom. Letterpress food truck hammock literally hell of wolf
                beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                banh mi salvia venmo photo booth quinoa chicharrones.
              </p>
            </div>
            
      </div>
      </div>
      <br />
      <br />
      <br />

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
 
    </div>
  );
}

export default Wallet;
