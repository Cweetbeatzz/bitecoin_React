import React from "react";
import Draw from "./Draw";
import EnterLottery from "./EnterLottery";
import Lottery from "./Lottery";

export default function LotteryHome() {
  return (
    <div>
      <Lottery />
      <EnterLottery />
      <Draw />
    </div>
  );
}
