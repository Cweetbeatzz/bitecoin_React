import React, { createContext, useContext, useState } from "react";

//#########################################################################

export const BorrowContext = createContext();

//#########################################################################

export const BorrowProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const Borrow = () => {};

  //#########################################################################
  const PayBack = () => {};

  //#########################################################################

  //#########################################################################

  return (
    <BorrowContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Borrow,
        PayBack,
      }}
    >
      {children}
    </BorrowContext.Provider>
  );
};
