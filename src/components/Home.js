import React, { Component } from "react";
import Registration from "./auth/Registration";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Status:{this.props.loggedInstatus}</h1>
        <Registration />
      </div>
    );
  }
}
export default Home;
