import React, { useState } from "react";
import endpoint from "../services/axios";
import Swal from "sweetalert2";

import Header from "../components/header-component";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, ":", value);

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const handleLogin = async (e) => {
    console.log("Username:", username);
    console.log("Password:", password);
    e.preventDefault();

    try {
      const response = await endpoint.post("/auth/login", {
        username,
        password,
      });
      console.log("Backend response:", response.data);
      const data = response.data;
      console.log(data.message);
      if (data.message === "Login successful" && data.token) {
        localStorage.setItem('token',JSON.stringify(data.token))
        console.log("Login successful");
        Toast.fire({
          icon: "success",
          title: data.message,
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.isAxiosError && error.response === undefined) {
        console.error("Network error. Please check your internet connection.");
      } else {
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          Toast.fire({
            icon: "error",
            title:`${error.response.data.error}`,
          });
        }
      }
    }
  };

  return (
    <>
      <Header page={`login`}  links={[{label:'', url:''}]}/>
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="w-full h-fit p-8 mx-auto mt-8 bg-white rounded-md shadow-xl lg:max-w-xl md:max-w-xl sm:max-w-sm">
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
                htmlFor="username"
                className="block text-sm font-semibold text-gray-800"
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                autoComplete="current-username"
                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username or Username"
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
                name="password"
                onChange={handleChange}
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
