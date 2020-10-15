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
  background: url("/images/pat.png"), linear-gradient(#101621, #090d14); // #293742 , #192026
`
const MainStyled = styled.main`
  z-index: 5;
  position: relative;
  top: 7rem;
  padding: 0 .3125rem 4rem;
  margin: 0 auto;
  transition: width 700ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  
  > * {
    margin-bottom: 4.0625rem;
  }

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 640px) {
    width: 640px;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
  @media screen and (min-width: 1600px) {
    width: 1600px;
  }
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
      <MainStyled>{children}</MainStyled>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
