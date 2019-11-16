// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useRef} from "react"
import siteData from "../../content/site.yml"
import { device } from "./mediaQuery"
import NavItem from "./NavItem"
import styled from "styled-components"
import { NavItemStyled } from "./NavItem"

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
  display: none;

  @media ${device.portrait} {
    display: flex;
  }
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
  padding: 1rem;
  display: none;

  @media ${device.landscape} {
    display: block;
  }
`

const MobileNavStyled = styled.ul`
  display: flex;
  height: 100%;
  align-items: stretch;
  list-style-type: none;

  @media ${device.portrait} {
    display: none;
  }
`

const MobileNavFlyOut = styled.ul`
  display: block;
  position: absolute;
  top: 3.475rem;
  left: 0.5rem;
  z-index: 10;
  background: url(../images/pat.png), linear-gradient(#fefdfd, #dadada);
  box-shadow: 0 0 0.625rem 0.2rem rgba(0, 0, 0, 0.3);
  padding: 0.65rem 0.75rem;
  list-style-type: none;
  transform: translateY(-100%);
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0;

  &.--open {
    opacity: 1;
    transform: translateY(0);
  }

  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "exl";
    font-size: 2rem;
    color: black;
  }

  @media ${device.portrait} {
    display: none;
  }
`

const Header = ({ siteTitle }) => {
  const flyOutRef = useRef(null);

  const toggleFlyout = (e)=> {
    flyOutRef.current.classList.toggle("--open");
  }

  return (
    <React.Fragment>
      <MobileNavFlyOut ref={flyOutRef}>
        {siteData.navs.map((nav, i) => (
          <li>
            <a key={`nav${i}`} href={nav.url}>
              <span>{nav.text}</span>
            </a>
          </li>
        ))}
      </MobileNavFlyOut>
      <HeaderStyled>
        <MobileNavStyled>
          <NavItemStyled className="--noHover">
            <a href="#" onClick={toggleFlyout}>
              <span className="NavItemNormal">
                <i className="far fa-sm fa-ellipsis-h"></i>
              </span>
            </a>
          </NavItemStyled>
        </MobileNavStyled>
        <NavigationStyled>
          <NavigationItemsStyled>
            {siteData.navs.map((nav, i) => (
              <NavItem key={`nav${i}`} nav={nav} />
            ))}
          </NavigationItemsStyled>
        </NavigationStyled>
        <AllrightsReserved>
          {`${new Date().getFullYear()} © All rights reserved`}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
