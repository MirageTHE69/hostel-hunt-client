import React, { useState } from "react";
import { navigate } from "gatsby";
import login from "../services/authService.js";
import Seo from "../components/seo";
import { Link } from "gatsby";


const IndexPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting to login with:", email, password);
      const success = await login(email, password);
      console.log("Login success status:", success);

      if (success) {
        console.log("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard page
      } else {
        throw new Error("Login failed!"); // Throw an error if login failed
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Login failed!"); // Show an alert for failed login
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex-1 flex justify-center items-center p-12">
          <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold">Hostel Hunt</h1>
            <p>Login to find your stay</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              />
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
              >
                Continue
              </button>
            </form>
            <Link to="/register" className="w-full h-full mt-10 text-center block">Register here</Link>
          </div>
          
        </div>
      </div>
      <Seo title="Home" />
    </>
  );
};

export default IndexPage;
