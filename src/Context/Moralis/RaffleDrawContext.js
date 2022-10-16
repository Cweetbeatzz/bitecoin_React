import React, { createContext, useContext, useState } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useChain,
  useApiContract,
} from "react-moralis";

//#########################################################################

export const RaffleDrawContext = createContext();

//#########################################################################

export const RaffleDrawProvider = ({ children }) => {
  //#########################################################################
  //moralis hooks
  const { enableWeb3, isWeb3Enabled, account } = useMoralis();

  //defined manually
  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const ConnectMetaMask = async () => {
    await enableWeb3();
    console.log("enable web3 clicked");
  };
  //#########################################################################

  const EnterRaffleDraw = () => {};
  //#########################################################################

  const GetRaffleState = () => {};
  //#########################################################################
  const GetNumWords = () => {};
  //#########################################################################
  const GetRequestConfirmations = () => {};
  //#########################################################################
  const GetRecentWinner = () => {};
  //#########################################################################
  const GetPlayer = () => {};
  //#########################################################################
  const GetLastTimeStamp = () => {};
  //#########################################################################
  const GetInterval = () => {};
  //#########################################################################
  const GetEntranceFee = () => {};
  //#########################################################################
  const GetNumberOfPlayers = () => {};
  //#########################################################################

  const StartRaffleDraw = () => {};

  //#########################################################################
  const EndRaffleDraw = () => {};

  //#########################################################################

  const AssignWinner = () => {};

  return (
    <RaffleDrawContext.Provider
      value={{
        ConnectMetaMask,
        loading,
        MetaMaskConnected,
        StartRaffleDraw,
        EndRaffleDraw,
        EnterRaffleDraw,
        AssignWinner,
      }}
    >
      {children}
    </RaffleDrawContext.Provider>
  );
};
