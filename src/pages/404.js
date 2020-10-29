import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { MeNotFound } from "../components/Me"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <MeNotFound />
  </Layout>
)

export default NotFoundPage
