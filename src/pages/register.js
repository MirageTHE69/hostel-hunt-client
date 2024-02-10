import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const RegisterPage = () => (
  <div className="flex min-h-screen">
    <div className="flex-1 flex justify-center items-center p-12">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold">Register for Hostel Hunt</h1>
        <p>Fill out the form below to create an account:</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
          />
          <div className="flex gap-4">
            <select
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            >
              <option value="" disabled selected hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="date"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
          />
          <button type="submit" className="px-4 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <Link to="/" className="text-blue-600">Login here</Link></p>
      </div>
    </div>
  </div>
)

export const Head = () => <Seo title="Register" />

export default RegisterPage
