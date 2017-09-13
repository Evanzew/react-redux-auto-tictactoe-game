import React from "react";
import Body from "../Body/Body.js";
import Header from "../Header/Header.js";
// import Footer from "./Footer.js";
// import MoveRecords from "./MoveRecords";
const App = () =>
  <div>
    <Header />
    <div className="container">
      <div className="display-middle">
        <div className="game row">
          <Body />
        </div>
      </div>;
    </div>
  </div>;

export default App;
