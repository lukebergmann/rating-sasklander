import "../styles/App.css";
import RatingBox from "./RatingBox";
import EndBooking from "./EndBooking";
import ThankYou from "./ThankYou";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/RateUs">
          <RatingBox />
        </Route>
        <Route exact path="/">
          <EndBooking />
        </Route>
        <Route exact path="/ThankYou">
          <ThankYou />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
