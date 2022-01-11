import React from "react";
import "./Dashboard.styles.css";

function Dashboard() {
  return (
    <div>
      <br />
      <br />

      <div className="container d-flex justify-content-center">
        <div className="col-5 ">
          <div className="w-100 d-flex mx-auto m-1 ">
            <div className="m-2 w-100">
              <div className=" bg-gradient bg-opacity-25 w-100">
                <div className="card-body">
                  <div>
                    <h4 className="card-title text-center text-warning">
                      <strong>PROFILE</strong>
                    </h4>
                    <hr className="btn-black" />
                  </div>

                  <div className="form-group"></div>
                  <div className="text-center">
                    <label>
                      <strong>Price</strong>
                    </label>
                    <input className="form-control mb-1" placeholder="0.0" />
                  </div>
                  <div className="text-center">
                    <label>
                      <strong>Amount</strong>
                    </label>
                    <input className="form-control mb-1" placeholder="0.0" />
                  </div>

                  <div className=" p-2 m-2 text-center text-white">
                    <p>
                      Ensure Safety measures in stakes to secure the protocol in
                      exchange for protocol incentives and avoid Liquidation on
                      assets.
                    </p>
                  </div>
                  <div className="text-center mb-3">
                    <a href="link" className="btn btn-dark w-25">
                      <strong>STAKE</strong>
                    </a>
                  </div>
                  <hr className="text-white" />

                  <div className="text-center  mb-3">
                    <a href="link" className="btn btn-warning">
                      <strong>CONNECT WALLET</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-7 mx-auto ">
          <div className="w-100 d-flex mx-auto m-1 ">
            <div className="m-2 w-100">
              <div className=" bg-gradient bg-opacity-25 w-100">
                <div className="card-body">
                  <div>
                    <h4 className="card-title text-center text-warning">
                      <strong>ETH/USD</strong>
                    </h4>
                    <hr className="btn-black" />
                  </div>
                  <div className="d-flex">
                    <h4 className="text-white">3500.99 </h4>
                    <br />
                    <h6 className="colorpercentage"> +0.56%(Past 3 days)</h6>
                  </div>
                  <div className="form-group"></div>
                  <div className="text-center">
                    <label>
                      <strong>Price</strong>
                    </label>
                    <input className="form-control mb-1" placeholder="0.0" />
                  </div>
                  <div className="text-center">
                    <label>
                      <strong>Amount</strong>
                    </label>
                    <input className="form-control mb-1" placeholder="0.0" />
                  </div>

                  <div className=" p-2 m-2 text-center text-white">
                    <p>
                      Ensure Safety measures in stakes to secure the protocol in
                      exchange for protocol incentives and avoid Liquidation on
                      assets.
                    </p>
                  </div>
                  <div className="text-center mb-3">
                    <a href="link" className="btn btn-dark w-25">
                      <strong>STAKE</strong>
                    </a>
                  </div>
                  <hr className="text-white" />

                  <div className="text-center  mb-3">
                    <a href="link" className="btn btn-warning">
                      <strong>CONNECT WALLET</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container col-12 mx-auto ">
        <div className="w-100 d-flex mx-auto m-1 ">
          <div className="m-2 w-100">
            <div className=" bg-gradient bg-opacity-25 w-100">
              <div className="card-body">
                <div>
                  <h4 className="card-title text-center text-warning">
                    <strong> BITECOIN INFO & ANALYTICS </strong>
                  </h4>
                  <hr className="btn-black" />
                </div>
                <h5 className="text-warning text-start">Liquidity</h5>

                <div className="d-flex">
                  <h4 className="text-white">$35.6M </h4>
                  <br />
                  <h6 className="colorpercentage"> (All time)</h6>
                </div>
                <h6 className="text-warning  text-start">Jan 20, 2022</h6>
                <br />
                <div className="form-group"></div>

                <hr className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <canvas id="chart"></canvas>

      {/* var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); */}
    </div>
  );
}

export default Dashboard;
