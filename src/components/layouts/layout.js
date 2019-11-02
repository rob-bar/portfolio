import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../header"
import "./layout.css"
import "./fontAwesome.css"

const FixedBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('/images/pat.png'), linear-gradient(#293742, #192026);
`
const MainStyled = styled.main`
  z-index: 5;
  position: relative;
  top: 3.4365rem;
  margin: 1rem;
  transition: width 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <FixedBackground />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainStyled>
        {children}
      </MainStyled>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
