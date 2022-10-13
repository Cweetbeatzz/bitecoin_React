import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const NftContext = createContext();

//#########################################################################

export const NftProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Nft = () => {};

  //#########################################################################

  return (
    <NftContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Nft,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};
