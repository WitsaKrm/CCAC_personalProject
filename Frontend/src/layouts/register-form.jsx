import React, { useState } from "react";
import endpoint from "../services/axios";
import Header from "../components/header-component";
// import Alert from '@mui/material/Alert';

export default function RegisterForm() {
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

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, ":", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check if passwords match and update state
    if (prevData.password === value) {
      setPasswordsMatch(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirm_password) {
      // Passwords don't match, handle accordingly (e.g., show an error message)
      console.log("Passwords do not match");

      setPasswordsMatch(false);
      return;
    }
    console.log("Form Data:", formData);
    // Add your registration logic here
    try {
      // Make a POST request to your backend endpoint
      const response = await endpoint.post("/auth/register", formData);

      // Handle the response from the backend
      console.log("Backend response:", response.data);
      const data = response.data;
      if (data.message === "Registration successful") {
        // <Alert severity="success">This is a success Alert.</Alert>
      }
      // Add your additional logic here, such as redirecting the user or storing a token
    } catch (error) {
      // Handle errors from the backend
      console.error("Error registering user:", error);

      // Check if it's a network error
      if (error.isAxiosError && error.response === undefined) {
        console.error("Network error. Please check your internet connection.");
      } else {
        // Log the response data if available
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
      }
    }
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
                    placeholder="Email"
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
                    <option value="M">MALE</option>
                    <option value="F">FEMALE</option>
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
                    autoComplete="current-username"
                    className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Date of Birth"
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
            {/* <div className="flex flex-row"></div> */}
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
                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                  className={`block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40 ${
                    formData.password !== formData.confirm_password
                      ? "text-red-500  focus:border-red-400 focus:ring-red-300" // Add red border when passwords don't match
                      : "" // Empty string for no additional styling
                  }`}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <section>
              <>
                {passwordsMatch === true ? (
                  " "
                ) : (
                  // setPasswordsMatch(true)
                  <p className="mt-2 text-red-500 focus:border-red-400 focus:ring-red-300">
                    Passwords do not match
                  </p>
                )}
              </>
            </section>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Register
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
