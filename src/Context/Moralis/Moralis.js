import React, { createContext, useContext, useState } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useChain,
  useApiContract,
} from "react-moralis";

//#########################################################################

export const MoralisContext = createContext();

//#########################################################################

export const MoralisProvider = ({ children }) => {
  //#########################################################################
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [limit, setLimit] = useState(3);

  const [loading, setLoading] = useState(false);
  const [MetaMaskConnected, setMetaMaskConnected] = useState(false);
  const {
    authenticate,
    isAuthenticated,
    user,
    signup,
    initialize,
    isInitialized,
    login,
    logout,
    isAuthenticating,
    setUserData,
    userError,
    isUserUpdating,
    refetchUserData,
  } = useMoralis();
  // const { data, error, isLoading } = useMoralisQuery("GameScore");
  const { runContractFunction, data, error, isLoading, isFetching } =
    useApiContract({
      address: "",
      functionName: "resolver",
      abi: "",
      params: { node: "" },
    });
  //#########################################################################

  const Auth = () => {
    if (!isAuthenticated) {
      return (
        <div>
          <button onClick={() => authenticate()}>Authenticate</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome {user.get("username")}</h1>
        </div>
      );
    }
  };
  //#########################################################################

  const Chains = () => {
    const { switchNetwork, chainId, chain, account } = useChain();
    return (
      <>
        <button onClick={() => switchNetwork("0x1")}>Switch to Ethereum</button>
        <p>Current chainId: {chainId}</p>
      </>
    );
  };

  const contract = () => {};

  //#########################################################################

  return (
    <MoralisContext.Provider
      value={{
        loading,
        MetaMaskConnected,
        Chains,
      }}
    >
      {children}
    </MoralisContext.Provider>
  );
};
