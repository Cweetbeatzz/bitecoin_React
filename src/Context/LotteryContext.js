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

  const CountDownTimer = () => {
    let today = new Date();
    let currentTime = today.getDate();
    let resetDate = currentTime;
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let hours = today.getHours();
  };

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
