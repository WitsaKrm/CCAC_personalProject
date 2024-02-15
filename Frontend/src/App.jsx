import React, { useState } from "react";
import LoginForm from "./layouts/login-form";
import RegisterForm from "./layouts/register-form";
import Guest from "./layouts/guest-page";
export default function App() {
  return (
    <>
      {/* <LoginForm />
      <RegisterForm /> */}
      <Guest/>
    </>
  );
}
