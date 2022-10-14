import React, { createContext, useContext, useState } from "react";
import {
  useERC20Transfers,
  useNativeBalance,
  useNativeTransactions,
} from "react-moralis";

//#########################################################################

export const MoralisERC20Context = createContext();

//#########################################################################

export const MoralisERC20Provider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const MoralisERC20Transfers = () => {
    const { fetchERC20Transfers, data, error, isLoading, isFetching } =
      useERC20Transfers();
    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <button
          onClick={() => fetchERC20Transfers({ params: { chain: "0x1" } })}
        >
          Refetch
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  //#########################################################################

  const GetNativeBalance = () => {
    const {
      getBalances,
      data: balance,
      nativeToken,
      error,
      isLoading,
    } = useNativeBalance({ chain: "ropsten" });

    return <div>{balance.formatted}</div>;
  };

  //#########################################################################
  const GetNativeTransactions = () => {
    const {
      getNativeTransations,
      data,
      chainId,
      error,
      isLoading,
      isFetching,
    } = useNativeTransactions();

    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <button
          onClick={() => getNativeTransations({ params: { chain: "0x1" } })}
        >
          Refetch
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  //#########################################################################

  return (
    <MoralisERC20Context.Provider
      value={{
        loading,
        MetaMaskConnected,
        MoralisERC20Transfers,
        GetNativeBalance,
        GetNativeTransactions,
      }}
    >
      {children}
    </MoralisERC20Context.Provider>
  );
};
