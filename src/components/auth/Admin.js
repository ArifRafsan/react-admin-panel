import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>This is Admin page. Only Auth people can see this.</h1>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}
export default Admin;
