import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import HomePage from "./pages/home";
import AboutMe from "./pages/about-me";
import MyReason from "./pages/my-reason";
import NotFoundPage from "./pages/404"

class App extends Component {
  render() {
    return <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/my-reason" component={MyReason} />
      <Route exact path="/page-not-found" component={NotFoundPage}/>
      <Redirect to="/page-not-found"/>
      </Switch>
    </Router>
  }
}

export default App;
