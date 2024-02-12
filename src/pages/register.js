import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import API from "../api/axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    pincode: "",
    city: "",
    dateOfBirth: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/user/register", formData);
      console.log("Registration successful:", response.data);
      navigate("/dashboard"); // Redirect to the dashboard after successful registration
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex justify-center items-center p-12">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-semibold">Register for Hostel Hunt</h1>
          <p>Fill out the form below to create an account:</p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="px-4 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <Link to="/" className="text-blue-600">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
