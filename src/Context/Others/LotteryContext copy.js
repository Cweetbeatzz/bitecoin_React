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
  const GetTickets = () => {};

  //#########################################################################
  const GetWinningsForAddress = () => {};

  //#########################################################################
  const BuyTickets = () => {};

  //#########################################################################
  const DrawWinnerTicket = () => {};

  //#########################################################################
  const RestartDraw = () => {};

  //#########################################################################
  const CheckWinningsAmount = () => {};

  //#########################################################################
  const WithdrawWinnings = () => {};

  //#########################################################################
  const RefundAll = () => {};

  //#########################################################################
  const WithdrawCommission = () => {};

  //#########################################################################
  const IsWinner = () => {};

  //#########################################################################
  const CurrentWinningReward = () => {};

  //#########################################################################
  const RemainingTickets = () => {};

  //#########################################################################

  // const CountDownTimer = () => {
  //   let today = new Date();
  //   let currentTime = today.getDate();
  //   let resetDate = currentTime;
  //   let minutes = today.getMinutes();
  //   let seconds = today.getSeconds();
  //   let hours = today.getHours();
  // };

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
