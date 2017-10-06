import React, { Component } from "react";
import { Input, Button } from "gm-ui-components";

const margin = {
  margin: "10px"
};

const ResetPassword = ({ handleSubmit }) => {
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <Input placeholder="Password" shouldFitContainer style={margin} />
        <Input
          placeholder="Verify Password"
          shouldFitContainer
          style={margin}
        />
        <Button style={margin} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default ResetPassword;
