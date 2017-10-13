import React from "react";
import { Button, Input, Checkbox } from "gm-ui-components";
import PropTypes from "prop-types";

const margin = {
  margin: "10px",
  display: "inline-block"
};

const Login = ({ toggleView, toggleRememberMe, rememberMe }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Input
        name="email"
        placeholder="Email"
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
      <div style={{ display: "flex" }}>
        <Button size="sm" style={margin} type="submit">
          Login
        </Button>
        <Checkbox
          checked={rememberMe}
          onChange={toggleRememberMe}
          label="Remember Me"
        />
      </div>
      <Button size="sm" style={margin} onClick={toggleView} type="button">
        Not Registered
      </Button>
      <a href="#" style={margin}>
        Forgot Password?
      </a>
    </div>
  );
};

Login.propTypes = {
  toggleView: PropTypes.func.isRequired
};

export default Login;
