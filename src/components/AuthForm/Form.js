import React from "react";
import PropTypes from "prop-types";
import { Login, SignUp } from "./index";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      rememberMe: false
    };
  }

  toggleView = () => this.setState({ login: !this.state.login });

  toggleRememberMe = () =>
    this.setState({ rememberMe: !this.state.rememberMe });

  _onSubmit = e => {
    const { login, rememberMe } = this.state;
    const { handleLogin, handleRegister } = this.props;

    e.preventDefault();

    login ? handleLogin(rememberMe) : handleRegister();
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
          <Login
            toggleView={this.toggleView}
            toggleRememberMe={this.toggleRememberMe}
            rememberMe={this.state.rememberMe}
          />
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

AuthForm.propTypes = {
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func
};

export default AuthForm;
