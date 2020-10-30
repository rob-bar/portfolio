import React from "react"

import Layout from "../components/layouts/Main"
import { Me } from "../components/Me"
import Projects from "../components/Projects"
import Clients from "../components/Clients"
import SEO from "../components/seo"
import { Header } from "../components/Header"

const IndexPage = () => (
  <Layout Header={Header}>
    <SEO title="Home" />
    <Me />
    <Projects />
    <Clients />
  </Layout>
)

export default IndexPage
