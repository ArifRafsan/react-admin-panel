import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./components/auth/Admin";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/admin"} component={Admin} />
            <Route exact path={"/logout"} component={Logout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
