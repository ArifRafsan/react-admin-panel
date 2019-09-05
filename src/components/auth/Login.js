import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";

//reuseable
let loggedIn = false;
const initialState = {
  email: "",
  password: "",
  loggedIn
};

class Login extends Component {
  constructor(props) {
    super(props);

    // let loggedIn = false;
    // this.state = {
    //   email: "",
    //   password: "",
    //   loggedIn
    // };
  }

  state = {
    ...initialState //destructuring for avoid mutability
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(this.state);

    //login
    if (email === "era@infotechbd.com" && password === "123") {
      localStorage.setItem("token", "akfaskfkoaskoasmdkl");
      this.setState({
        loggedIn: true
      });
    }
    // //clear the form
    // this.setState({
    //   ...initialState // destructuring
    // });
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin"></Redirect>;
    }
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit}>
          <div className="login-form box">
            <h2 className="text-center">Finger Offline Match</h2>
            <FormGroup>
              <Label htmlFor="">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Remember me
              </Label>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Login</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Login;
