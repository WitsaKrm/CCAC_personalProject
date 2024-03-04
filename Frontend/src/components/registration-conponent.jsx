import React, { useState } from "react";
import endpoint from "../services/axios";
import Swal from "sweetalert2";

export default function RegistrationComponent() {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    n_name: "",
    address: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    gender: "",
    role: "",
  });
  const [roomData, setRoomData] = useState({
    f_name: "",
    l_name: "",
    n_name: "",
    address: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    gender: "",
    role: "",
    room: "",
  });
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
  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, ":", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (FormData.password === value ) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirm_password) {
      console.log("Passwords do not match");
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }
    console.log("Form Data:", formData);
    try {
      const response = await endpoint.post("/auth/register", formData);

      console.log("Backend response:", response.data);
      const data = response.data;
      if (data.message === "Registration successful") {
        Toast.fire({
          icon: "success",
          title: `${data.message}`,
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.isAxiosError && error.response === undefined) {
        console.error("Network error. Please check your internet connection.");
      } else {
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          Toast.fire({
            icon: "error",
            title: `${error.response.data.error}`,
          });
        }
      }
    }
  };

  return (
    <>
      <p>RegistrationComponent</p>
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="max-w-md h-fit p-8 mx-auto my-8 bg-white rounded-md shadow-xl xl:max-w-xl 2xl:max-w-xl lg:max-w-xl md:max-w-xl sm:max-w-sm">
          <h1 className="text-3xl font-semibold text-center text-green-700 uppercase">
            xXxXx Dormitory
          </h1>
          <p className="text-center mb-4 my-4 font-semibold">
            ลงทะเบียนผู้ใช้งานเข้าระบบ
          </p>
          <form className="mt-6" onSubmit={handleRegister}>
            <div className="flex ">
              <>
                <div className="mb-4 mr-8">
                  <label
                    htmlFor="f_name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="f_name"
                    value={formData.f_name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full px-4 py-2 mr-8 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="l_name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="l_name"
                    value={formData.l_name}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full px-4 py-2 mr-8 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </>
            </div>
            <div className="flex">
              <>
                <div className="mb-4 mr-8">
                  <label
                    htmlFor="n_name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Nick Name
                  </label>
                  <input
                    type="text"
                    name="n_name"
                    value={formData.n_name}
                    onChange={handleChange}
                    autoComplete="nickname"
                    className="block w-full px-4 py-2 mr-8 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Nick Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="phone"
                    // pattern="[+]{1}[0-9]{11,14}"
                    className="block w-full px-4 py-2 mr-8 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Phone"
                    required
                  />
                </div>
              </>
            </div>
            <div className="flex">
              <>
                <div className="mb-4 mr-8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="current-email"
                    className="block w-full px-4 py-2 mr-8 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="current-username"
                    className="block w-full px-4 py-2 mr-8 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Username"
                    required
                  />
                </div>
              </>
            </div>
            <div className="flex">
              <>
                <div className="mb-4 mr-8">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
                <div className="mb-4 mr-8">
                  <label
                    htmlFor="dob"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    autoComplete="current-dof"
                    className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Date of Birth"
                    required
                  />
                </div>
                <div className="mb-4 mr-8">
                  <label
                    htmlFor="room"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Room
                  </label>
                  <input
                    type="text"
                    name="room"
                    value={roomData.room}
                    onChange={handleChange}
                    autoComplete="current-room"
                    className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Room"
                    required
                  />
                </div>
              </>
            </div>
            <div className="">
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="current-address"
                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Address..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  autoComplete="confirm-password"
                  // className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  className={`block w-full px-4 py-2 mt-2  bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40 ${
                    formData.password !== formData.confirm_password
                      ? "text-red-500  focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" // Add red border when passwords don't match
                      : "text-green-500  focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" // Empty string for no additional styling
                  }`}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <section>
              <>
                {passwordsMatch === true ? (
                  <div></div>
                ) : (
                  <div
                    class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    <span class="font-medium">Passwords do not match!</span>
                  </div>
                )}
              </>
            </section>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
