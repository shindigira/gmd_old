import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import ResetPassword from "../components/ResetPassword";
import { Button, Welcome } from "@storybook/react/demo";
import AuthForm from "../components/AuthForm";

const wrapper = {
  display: "flex",
  width: "300px"
};

const handleSubmit = () => {
  action("password reset");
  alert("password changed");
};

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("ResetPassword", module).add("with text", () => (
  <div style={wrapper}>
    <ResetPassword handleSubmit={handleSubmit} />
  </div>
));

storiesOf("Login", module).add("with text", () => {
  return (
    <div style={wrapper}>
      <AuthForm
        handleLogin={() => alert("logging in")}
        handleRegister={() => alert("registering")}
      />
    </div>
  );
});
