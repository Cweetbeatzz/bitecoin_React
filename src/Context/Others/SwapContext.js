import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const SwapContext = createContext();

//#########################################################################

export const SwapProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Swap = () => {};

  //#########################################################################

  return (
    <SwapContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Swap,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};
