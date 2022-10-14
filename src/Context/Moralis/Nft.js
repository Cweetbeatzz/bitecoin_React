import React, { createContext, useContext, useState } from "react";
import { useNFTBalances, useNFTTransfers, useTokenPrice } from "react-moralis";

//#########################################################################

export const NftContext = createContext();

//#########################################################################

export const NftProvider = ({ children }) => {
  //#########################################################################

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  //#########################################################################

  const GetNftBalances = () => {
    const { getNFTBalances, data, error, isLoading, isFetching } =
      useNFTBalances();
    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <button onClick={() => getNFTBalances({ params: { chain: "0x1" } })}>
          Refetch NFTBalances
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  //#########################################################################

  const GetNFTTransfers = () => {
    const { fetch, data, error, isLoading, isFetching } = useNFTTransfers();
    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <button onClick={() => fetch({ params: { chain: "0x1" } })}>
          Refetch
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };
  //#########################################################################

  const GetTokenPrice = () => {
    const {
      fetchTokenPrice,
      data: formattedData,
      error,
      isLoading,
      isFetching,
    } = useTokenPrice({ address: "0x1f9840...1f984", chain: "eth" });

    return (
      <div>
        {error && <>{JSON.stringify(error)}</>}
        <button
          onClick={() =>
            fetchTokenPrice({
              params: { address: "0x6...361", chain: "bsc" },
            })
          }
        >
          Refetch
        </button>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    );
  };

  //#########################################################################

  return (
    <NftContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        GetNftBalances,
        GetNFTTransfers,
        GetTokenPrice,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};
