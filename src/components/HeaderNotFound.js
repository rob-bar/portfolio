// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import siteData from "../../content/site.yml"
import NavItem from "./NavItem"
import styled from "styled-components"

const HeaderNotFound = ({ siteTitle }) => {
  return (
    <React.Fragment>
      <HeaderStyled>
        <NavigationStyled>
          <NavigationItemsStyled>
            {siteData.navsBack.map((nav, i) => (
              <NavItem key={`nav${i}`} nav={nav} />
            ))}
          </NavigationItemsStyled>
        </NavigationStyled>
        <AllrightsReserved>
          {`${new Date().getFullYear()} © `}
          <span>All rights reserved</span>
        </AllrightsReserved>
        <SocialItemsStyled>
          {siteData.socials.map((nav, i) => (
            <NavItem key={`nav${i}`} nav={nav} />
          ))}
        </SocialItemsStyled>
      </HeaderStyled>
    </React.Fragment>
  )
}

const HeaderStyled = styled.header`
  width: 100%;
  padding: 0 0.5rem;
  height: 3.475rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 10;
  background: url(../images/pat.png), linear-gradient(#fefdfd, #dadada);
  box-shadow: rgba(0, 0, 0, 0.6) 0 0.125rem 0.625rem 0.3125rem,
    rgba(0, 0, 0, 0.3) 0 0.0625rem 0.4375rem 0 inset;
`
const NavigationStyled = styled.nav`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  height: 3.475rem;
  display: flex;
`

const NavigationItemsStyled = styled.ul`
  display: flex;
  align-items: stretch;
  list-style-type: none;
`

const SocialItemsStyled = styled.ul`
  display: flex;
  height: 100%;
  list-style-type: none;
`

const AllrightsReserved = styled.aside`
  font-family: "osl";
  font-size: 0.8125rem;
  color: #203e3e;
  font-weight: normal;
  font-style: normal;
  flex: 1 0 auto;
  text-align: right;
  margin-right: 0;
  padding: 1rem;

  span {
    display: none;

    @media (min-width: 720px) {
      display: inline;
    }
  }
`

HeaderNotFound.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderNotFound.defaultProps = {
  siteTitle: ``,
}

export default HeaderNotFound
