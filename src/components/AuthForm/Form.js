import React from "react";
import PropTypes from "prop-types";
import { Login, SignUp } from "./index";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  toggleView = () => this.setState({ login: !this.state.login });

  _onSubmit = e => {
    e.preventDefault();
    this.state.login ? this.props.handleLogin() : this.props.handleRegister();
  };

  render() {
    const { login } = this.state;
    return (
      <form
        name={login ? "login" : "register"}
        onSubmit={this._onSubmit}
        style={{ width: "100%" }}
      >
        {login ? (
          <Login toggleView={this.toggleView} />
        ) : (
          <SignUp toggleView={this.toggleView} />
        )}
      </form>
    );
  }
}

AuthForm.defaultProps = {
  handleLogin: () => {},
  handleRegister: () => {}
};

export default AuthForm;
