import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
    this.emailInput = null;
    this.passwordInput = null;
  }

  componentDidMount() {
    if (Meteor.userId()) {
      this.props.history.replace("/dashboard");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.emailInput.value.trim();
    let password = this.passwordInput.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: "" });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input
            type="email"
            ref={(el) => (this.emailInput = el)}
            name="email"
            placeholder="email"
          />
          <input
            type="password"
            ref={(el) => (this.passwordInput = el)}
            name="password"
            placeholder="password"
          />
          <button type="submit"> Log In</button>
        </form>
        <Link to="/signup">Create an Account</Link>
      </div>
    );
  }
}

export default LoginPage;
