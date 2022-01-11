import React from "react";

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

      <div className="card-body mx-auto col-md-7 col-sm-7 justify-content-between">
        <ul className="nav nav-tabs ">
          <li className="nav-item">
            <a className="nav-link active text-dark" href="link">
              ETHEREUM
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark" href="link">
              DAI
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark" href="link">
              TOKEN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark" href="link">
              GAS FEES
            </a>
          </li>
        </ul>
        <br></br>
      </div>
      <br />
      <br />
      <br />

      {/* <script>
        const button = document.getElementsByclassNameName("nav-link"); 
        const active = document.getElementsByclassNameName("active");
        button.addEventListner("click",function(){})
      </script> */}
    </div>
  );
}

export default Wallet;
