import React from "react"

import Layout from "../components/layouts/Main"
import SEO from "../components/seo"
import { MeNotFound } from "../components/Me"
import { HeaderNotFound } from "../components/Header"

const NotFoundPage = () => (
  <Layout Header={HeaderNotFound}>
    <SEO title="Not found" />
    <MeNotFound />
  </Layout>
)

export default NotFoundPage
