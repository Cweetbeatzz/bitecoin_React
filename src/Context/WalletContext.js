import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const WalletContext = createContext();

//#########################################################################

export const WalletProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Wallet = () => {};

  //#########################################################################

  return (
    <WalletContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Wallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
