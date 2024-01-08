import React from "react";
import HomePage from "./pages/HomePage";
import Order from "./pages/Order";
import SiparisinizAlindi from "./pages/SiparisinizAlindi";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/SiparisinizAlindi">
            <SiparisinizAlindi />
          </Route>
        </Switch>
      </Router>

    </>
  );
};
export default App;
