import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };
  }

  handleSubmit = this.handleSubmit.bind(this);
  handleChange = this.handleChange.bind(this);

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    //axios.post("https://localhost:3000/registration");
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
          <FormGroup>
            <Label htmlFor="">Confirm Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password Confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Login</Button>
        </Form>
      </div>
    );
  }
}
export default Registration;
