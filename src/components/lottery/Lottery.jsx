import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useMoralis } from "react-moralis";
import { LotteryContext } from "../../Context/Others/LotteryContext";
import "./Lottery.styles.css";

function Lottery() {
  const {
    ConnectMetaMask,
    loading,
    MetaMaskConnected,
    StartLottery,
    EndLottery,
    EnterLottery,
    AssignWinner,
  } = useContext(LotteryContext);
  //#########################################################################

  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  //#########################################################################

  useEffect(() => {
    if (isWeb3Enabled) return;

    if (typeof window !== undefined) {
      if (window.localStorage.getItem("Connected")) {
        enableWeb3();
      }
    }
  }, [enableWeb3, isWeb3Enabled]);

  //#########################################################################
  //continously check if metamask account is not connected to remove local storage details

  useEffect(() => {
    Moralis.onAccountChanged((acc) => {
      console.log("Account changed");

      //check if acc is null
      if (acc == null) {
        window.localStorage.removeItem("Connected");
        //this will set (isWeb3Enabled) to false
        deactivateWeb3();
        console.log("No User connected");
      }
    });
  });
  //#########################################################################

  return (
    <div>
      <br />

      <div>
        <div className="bg-gradient p-4 m-3 ">
          <h4 className=" justify-content-lg-start pl-3 text-warning ">
            <strong>BITE BLOCKS LOTTERY</strong>
          </h4>
          <div className=" justify-content-lg-start">
            <div className="mx-auto">
              <hr className="text-white w-50 mx-auto" />
              <h6 className="txt display-3 " id="priceamt">
                <strong id="moneyval">$100,000</strong>
              </h6>
              <hr className="text-white w-50 mx-auto" />
            </div>

            <h4 className="txt">in prizes!!!</h4>
            <br />
          </div>

          <div className="d-flex justify-content-center ">
            {account ? (
              <div className="m-1 ">
                <div className="p-2 bg-danger justify-content-center align-content-center">
                  <h6 className=" align-self-center ">
                    <strong>
                      CONNECTED TO : {account.slice(0, 8)}...
                      {account.slice(account.length - 5)}
                    </strong>
                  </h6>
                </div>
              </div>
            ) : (
              <div className="m-1 ">
                <button
                  //if connecting disable button
                  disabled={isWeb3EnableLoading}
                  className="btn btn-warning shadow"
                  onClick={async () => {
                    await enableWeb3();

                    console.log("enable web3 clicked");

                    if (typeof window !== undefined) {
                      window.localStorage.setItem(
                        "Connected",
                        "MetaMask is connected"
                      );
                    }
                  }}
                >
                  <strong>CONNECT WALLET</strong>
                </button>
              </div>
            )}

            <div className="m-1">
              <button className="btn btn-dark shadow">
                <strong>BUY TICKETS</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-dark p-4" id="tickets">
          <h3 className=" ">Get your tickets now!!!</h3>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Lottery;
