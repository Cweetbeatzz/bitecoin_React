import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const RaffleDrawContext = createContext();

//#########################################################################

export const RaffleDrawProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
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
