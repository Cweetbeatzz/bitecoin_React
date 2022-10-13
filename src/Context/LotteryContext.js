import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const LotteryContext = createContext();

//#########################################################################

export const LotteryProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const StartLottery = () => {};

  //#########################################################################
  const EndLottery = () => {};

  //#########################################################################

  const EnterLottery = () => {};

  //#########################################################################

  const AssignWinner = () => {};

  return (
    <LotteryContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        StartLottery,
        EndLottery,
        EnterLottery,
        AssignWinner,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};
