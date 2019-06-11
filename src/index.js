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
  <Router history={hist} basename={'/~ptaborow'}>
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
            <Route path={`${process.env.PUBLIC_URL}/messages`} component={Message} />
            <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={Category} />
            <Route path={`${process.env.PUBLIC_URL}/oven`} component={OvenPage} />
            <Route path={`${process.env.PUBLIC_URL}/`} component={LoginPage} />
        </Switch>
  </Router>,
  document.getElementById("root")
);
