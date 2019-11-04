import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
import Me from "../components/Me"
import Projects from "../components/Projects"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Me />
    <Projects />
  </Layout>
)

export default IndexPage
