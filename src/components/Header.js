import React, { useRef } from "react"
import siteData from "../../content/site.yml"
import styled from "styled-components"
import NavItem, { NavItemStyled } from "./core/NavItem"
import { navigate } from "@reach/router"
import scrollTo from "gatsby-plugin-smoothscroll"

export const Header = () => {
  const flyOutRef = useRef(null)

  const toggleFlyout = e => {
    flyOutRef.current.classList.toggle("--open")
  }

  return (
    <React.Fragment>
      <MobileNavFlyOut ref={flyOutRef}>
        {siteData.navs.map((nav, i) => (
          <li key={`li${i}`}>
            <button
              onClick={() => {
                navigate(nav.url)
                scrollTo(nav.url)
                toggleFlyout()
              }}
            >
              <span>{nav.text}</span>
            </button>
          </li>
        ))}
      </MobileNavFlyOut>
      <HeaderStyled>
        <MobileNavStyled>
          <NavItemStyled className="--noHover">
            <button onClick={toggleFlyout}>
              <span className="NavItemNormal">
                <i className="far fa-sm fa-ellipsis-h"></i>
              </span>
            </button>
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

export const HeaderNotFound = () => {
  return (
    <React.Fragment>
      <HeaderStyled>
        <ErrorNavigationStyled>
          <NavigationItemsStyled>
            {siteData.navsBack.map((nav, i) => (
              <NavItem key={`nav${i}`} nav={nav} />
            ))}
          </NavigationItemsStyled>
        </ErrorNavigationStyled>
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
  display: none;

  @media (min-width: 722px) {
    display: flex;
  }
`
const ErrorNavigationStyled = styled.nav`
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

    @media (min-width: 830px) {
      display: inline;
    }
  }
`
const MobileNavStyled = styled.ul`
  display: flex;
  height: 100%;
  align-items: stretch;
  list-style-type: none;

  @media (min-width: 722px) {
    display: none;
  }
`
const MobileNavFlyOut = styled.ul`
  display: block;
  position: fixed;
  top: 3.475rem;
  left: 0.5rem;
  z-index: 10;
  background: url(../images/pat.png), linear-gradient(#fefdfd, #dadada);
  box-shadow: 0 0 0.625rem 0.2rem rgba(0, 0, 0, 0.3);
  padding: 0.65rem 0.75rem;
  list-style-type: none;
  transform: translateY(-100%);
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0;

  &.--open {
    opacity: 1;
    transform: translateY(0);
  }

  button,
  a {
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "exl";
    font-size: 2rem;
    color: black;
  }

  @media (min-width: 722px) {
    display: none;
  }
`
