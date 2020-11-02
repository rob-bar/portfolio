import styled from "styled-components"
import React from "react"
import { navigate } from "@reach/router"
import scrollTo from "gatsby-plugin-smoothscroll"

export const NavItemStyled = styled.li`
  color: white;
  box-shadow: 0.0625rem 0 0 0 #fafafa inset;
  border-right: 0.0625rem solid #d0d0d0;
  display: flex;
  align-items: stretch;
  overflow: hidden;

  &.--noHover {
    div,
    a {
      padding: 0;
      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      transform: translateY(0);
      height: 100%;
    }
  }

  div,
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "exl";
    outline: 0;
    padding: 0;
    border: 0;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1.4;
    color: black;
    transform: translateY(calc(-100% - 1px));
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      transform: translateY(0);
    }
  }

  .NavItemHover {
    padding: 0 1rem;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: rgba(0, 0, 0, 0.8) 0 0.125rem 0.0625rem;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    background: url(../images/pat.png), linear-gradient(#272727, #090909);
  }

  .NavItemNormal {
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  }
`

const NavItem = ({ nav, ...props }) => (
  <React.Fragment>
    {!nav && props.children}
    {nav && (
      <NavItemStyled>
        {nav && nav.text && nav.url.startsWith("/") && (
          <a href={nav.url}>
            <span className="NavItemHover">{nav.text}</span>
            <span className="NavItemNormal">{nav.text}</span>
          </a>
        )}
        {nav && nav.text && nav.url.startsWith("#") && (
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              navigate(nav.url)
              scrollTo(nav.url)
            }}
            onKeyDown={() => {
              navigate(nav.url)
              scrollTo(nav.url)
            }}
          >
            <span className="NavItemHover">{nav.text}</span>
            <span className="NavItemNormal">{nav.text}</span>
          </div>
        )}

        {nav && nav.icon && (
          <a href={nav.url}>
            <span className="NavItemHover">
              <i className={`${nav.iconset} fa-${nav.icon}`}></i>
            </span>
            <span className="NavItemNormal">
              <i className={`${nav.iconset} fa-${nav.icon}`}></i>
            </span>
          </a>
        )}
      </NavItemStyled>
    )}
  </React.Fragment>
)
export default NavItem
