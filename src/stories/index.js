import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import AuthForm from "../components/AuthForm";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));
const loginStyle = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "300px"
};

storiesOf("Login", module).add("with text", () => {
  return (
    <div style={loginStyle}>
      <AuthForm
        handleLogin={() => alert("logging in")}
        handleRegister={() => alert("registering")}
      />
    </div>
  );
});
