import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div className="flex min-h-screen">
  <div className="flex-1 flex justify-center items-center p-12">
    <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold">Hostel Hunt</h1>
      <p>Login to find your stay</p>
      <form  className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your Email"
       
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
        />
        <input
          type="password"
          placeholder="Enter your Password"
        
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
        />
        <button type="submit" className="px-4 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
          Continue
        </button>
      </form>
    </div>
  </div>
</div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
