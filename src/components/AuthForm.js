import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "gm-ui-components";

/**
 * COMPONENT
 */

const margin = {
  margin: "10px",
  display: "inline-block"
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  renderLogin = () => {
    return (
      <div>
        <div>
          <Input
            name="username"
            placeholder="Username"
            shouldFitContainer
            style={margin}
            type="text"
          />
          <Input
            name="password"
            placeholder="Password"
            shouldFitContainer
            style={margin}
            type="password"
          />
        </div>
        <div>
          <Button size="sm" style={margin} type="submit">
            Login
          </Button>
          <Button
            size="sm"
            style={margin}
            onClick={() => this.setState({ login: false })}
            type="button"
          >
            Not Registered
          </Button>
        </div>
        <a href="#" style={margin}>
          Forgot Password?
        </a>
      </div>
    );
  };

  renderSignUp = () => {
    return (
      <div>
        <div>
          <Input
            name="email"
            placeholder="Email"
            shouldFitContainer
            style={margin}
            type="text"
          />
        </div>
        <div>
          <Button size="sm" style={margin} type="submit">
            Submit
          </Button>
          <Button
            onClick={() => this.setState({ login: true })}
            size="sm"
            style={margin}
            type="button"
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const { login } = this.state;
    const { handleLogin, handleRegister } = this.props;
    return (
      <form
        method="post"
        name={login ? "login" : "register"}
        onSubmit={login ? handleLogin : handleRegister}
        style={{ width: "100%" }}
      >
        {login ? this.renderLogin() : this.renderSignUp()}
      </form>
    );
  }
}

export default AuthForm;
