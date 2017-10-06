import React from "react";
import { Button, Input } from "gm-ui-components";

const margin = {
  margin: "10px",
  display: "inline-block"
};

const Login = ({ login, handleLogin, toggleView }) => {
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
        <Button size="sm" style={margin} onClick={toggleView} type="button">
          Not Registered
        </Button>
      </div>
      <a href="#" style={margin}>
        Forgot Password?
      </a>
    </div>
  );
};

export default Login;
