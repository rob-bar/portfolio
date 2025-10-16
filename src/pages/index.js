import React from "react"

import Layout from "../components/layouts/Main"
import { Header } from "../components/Header"
import { Me } from "../components/Me"
import Projects from "../components/Projects"
import Clients from "../components/Clients"
import Skills from "../components/Skills"
// import Posts from "../components/Posts"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout Header={Header}>
    <SEO title="Home" />
    <Me />
    <Projects />
    <Clients />
    <Skills />
  </Layout>
)

export default IndexPage
