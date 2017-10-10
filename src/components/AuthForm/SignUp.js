import React from "react";
import { Button, Input } from "gm-ui-components";

const margin = {
  margin: "10px",
  display: "inline-block"
};

const SignUp = ({ toggleView }) => {
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
        <Button size="sm" style={margin} type="button" onClick={toggleView}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  toggleView: PropTypes.func.isRequired
};

export default SignUp;
