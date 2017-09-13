import React from "react";
import { Route } from "react-router-dom";
import App from "../App/App.js";
import Footer from "../Footer/Footer.js";

const RouteApp = () =>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/footer" component={Footer} />
  </div>;

export default RouteApp;
