import React from "react";
import ViewStatus from "../../containers/ViewStatus/ViewStatus";
import FillMoveRecords from "../../containers/FillMoveRecords/FillMoveRecords";
import Header from "../Header/Header.js";
const Footer = () =>
  <div>
    <Header />
    <div className="container">
      <div className="col-xs-4 text-center">
        <div className="game-info">
          <div>
            <ViewStatus />
          </div>
          <ol>
            <FillMoveRecords />
          </ol>
        </div>
      </div>
    </div>
  </div>;

export default Footer;
