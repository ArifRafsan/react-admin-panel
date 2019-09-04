import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <Form>
          <div className="login-form">
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
              <Label htmlFor="">Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Password</Label>
              <Input type="Password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Login</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Login;
