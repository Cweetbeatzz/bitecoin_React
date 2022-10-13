import React, { createContext, useContext, useState } from "react";

//#########################################################################

const LotteryContext = createContext();

//#########################################################################

const LotteryProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
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
      value={{ loading, StartLottery, EndLottery, EnterLottery, AssignWinner }}
    >
      {children}
    </LotteryContext.Provider>
  );
};
