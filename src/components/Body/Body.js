import React from "react";
import RefreshGame from "../../containers/RefreshGame/RefreshGame";
import FillPlayerCount from "../../containers/FillPlayerCount/FillPlayerCount";
import Board from "../Board/Board.js";

const Body = () =>
  <div className="col-xs-5">
    <div className="game-board col-xs-12">
      <RefreshGame />
      <Board />
      <FillPlayerCount />
    </div>
  </div>;
export default Body;
