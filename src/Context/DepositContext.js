import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const DepositContext = createContext();

//#########################################################################

export const DepositProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Deposit = () => {};

  //#########################################################################

  return (
    <DepositContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Deposit,
      }}
    >
      {children}
    </DepositContext.Provider>
  );
};
