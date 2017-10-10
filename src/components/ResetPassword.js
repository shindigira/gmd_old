import React, { Component } from "react";
import { Input, Button } from "gm-ui-components";
import PropTypes from "prop-types";

const margin = {
  margin: "10px"
};

const ResetPassword = ({ handleSubmit }) => {
  const _onSubmit = e => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <form onSubmit={_onSubmit}>
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

ResetPassword.defaultProps = {
  handleSubmit: () => {}
};

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func
};

export default ResetPassword;
