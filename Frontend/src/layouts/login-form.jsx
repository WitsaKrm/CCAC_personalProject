import React, { useState } from "react";
import Header from "../components/header-component";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    console.log("Email changed:", newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    console.log("Password changed:", newPassword);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <>
      <Header />
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="w-full h-fit p-8 mx-auto mt-8 bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700 uppercase">
          xXxXx Dormitory
          </h1>
          <p className="text-center mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          consectetur animi placeat autem, voluptatibus odio illo iusto
          deserunt? Deleniti, error.
        </p>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="current-email"
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email or Username"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            <a href="#" className="text-xs text-green-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?
            <a href="#" className="font-medium text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
