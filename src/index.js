import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import Message from "views/Messages/Messages.jsx";
import Category from "views/Category/Category.jsx";
import OvenPage from "views/OvenPage/OvenPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/messages" component={Message} />
      <Route path="/kitchen" component={Category} />
      <Route path="/oven" component={OvenPage} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
