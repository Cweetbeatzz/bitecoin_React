import React, { useState } from "react";
import "./Wallet.styles.css";
// import { TabContext, TabList, TabPanel, Tabs } from "@mui/material";
import { Spinner } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Wallet() {
  const [loading, setLoading] = useState(false);
  //###############################################

  if (loading) {
    return <CircularProgress value={59} size="100px" thickness="4px" />;
  }
  //###############################################
  return (
    <div className="container">
      <br />
      <hr className="text-white" />
      <div className="card-head col-4 mx-auto">
        <div className=" h-100 mx-auto p-5">
          <h4 className="text-warning d-flex text-center  justify-content-center">
            <strong>YOUR WALLET</strong>
          </h4>
        </div>
      </div>
      <hr className="text-white" />
      <br />

      <div className="walletsection">
        <Tabs variant="enclosed" colorScheme="white" className="bg-white p-3">
          <TabList>
            <Tab>PROFILE</Tab>
            <Tab>BALANCE</Tab>
            <Tab>TRANSACTIONS</Tab>
            <Tab>NFTs</Tab>
            <Tab>SEND ETH</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>PROFILE!</p>
            </TabPanel>
            <TabPanel>
              <p>BALANCE!</p>
            </TabPanel>
            <TabPanel>
              <p>TRANSACTIONS!</p>
            </TabPanel>
            <TabPanel>
              <p>NFTs!</p>
            </TabPanel>
            <TabPanel>
              <p>SEND ETH!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Wallet;
