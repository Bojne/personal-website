import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Writing</h1>
    <p>Here's a list of my writings</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
