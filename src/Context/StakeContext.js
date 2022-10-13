import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const StakeContext = createContext();

//#########################################################################

export const StakeProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Stake = () => {};

  //#########################################################################

  return (
    <StakeContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Stake,
      }}
    >
      {children}
    </StakeContext.Provider>
  );
};
