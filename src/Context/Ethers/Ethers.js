import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const EthersContext = createContext();

//#########################################################################

export const EthersProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Ethers = () => {};

  //#########################################################################

  return (
    <EthersContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Ethers,
      }}
    >
      {children}
    </EthersContext.Provider>
  );
};
