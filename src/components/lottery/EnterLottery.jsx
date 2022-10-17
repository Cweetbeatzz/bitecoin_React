import React, { useEffect, useState } from "react";
import {
  RaffleDraw_Address,
  RaffleDraw_abi,
} from "../../Constants/RaffleDrawConfig";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";

export default function EnterLottery() {
  //#########################################################################
  const [lotteryEntrancefee, setLotteryEntrancefee] = useState("0.00");

  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  //
  console.log(chainId);
  // const raffle_draw_address =
  //   chainId in RaffleDraw_Address ? RaffleDraw_Address[chainId] : null;
  //#########################################################################
  //to enter the raffle draw we need the entrance fee initalized in the constructor....
  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: RaffleDraw_abi,
    contractAddress: RaffleDraw_Address,
    functionName: "getEntranceFee",
    params: {},
  });
  //#########################################################################
  //enter the raffle draw function from the contract
  const {
    data,
    error,
    runContractFunction: enterRaffleDraw,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: RaffleDraw_abi,
    contractAddress: RaffleDraw_Address,
    functionName: "enterRaffleDraw",
    msgValue: lotteryEntrancefee,
    params: {},
  });
  //#########################################################################
  const getEntanceFee = async () => {
    const entrancefee = (await getEntranceFee()).toString();
    setLotteryEntrancefee(entrancefee);
    console.log(entrancefee);
  };
  //#########################################################################
  console.log("lotteryEntrancefee", lotteryEntrancefee);
  //#########################################################################

  useEffect(() => {
    if (isWeb3Enabled) {
      //read entrance fee
      getEntanceFee();
    }
  }, [isWeb3Enabled]);

  //#########################################################################

  return (
    <div className="mb-5">
      <div>
        {RaffleDraw_Address ? (
          <h4 className="text-white mb-3">
            <strong>
              Lottery Entrance Fee: {lotteryEntrancefee} ETH
              {/* {ethers.utils.formatUnits(lotteryEntrancefee, "ethers")} ETH */}
            </strong>
          </h4>
        ) : (
          <h4 className="text-white mb-3">
            <strong>Not Connected...</strong>
          </h4>
        )}
      </div>
      <div>
        <button
          className="btn btn-warning shadow"
          onClick={async () => {
            await enterRaffleDraw();

            console.log("enter clicked");
          }}
        >
          <strong>ENTER RAFFLE DRAW</strong>
        </button>
      </div>
    </div>
  );
}
