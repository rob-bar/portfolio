import styled from "styled-components"
import React from "react"

const NavItemStyled = styled.li`
  color: red;
  color: white;
  border-left: 0.0625rem solid #fafafa;
  border-right: 0.0625rem solid #d0d0d0;
  display: flex;
  align-items: center;

  a {
    margin: 0;
    display: block;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "exl";
    font-size: 2rem;
    color: black;
    font-weight: normal;
    font-style: normal;
  }

  .NavItemHover {
    padding: 0.25rem 0.9325rem 0.375rem;
    color: white;
    display: block;
    text-shadow: rgba(0, 0, 0, 0.8) 0 0.125rem 0.0625rem;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    background: url(../images/pat.png), linear-gradient(#272727, #090909);
  }

  .NavItemNormal {
    padding: 0.25rem 0.9325rem 0.375rem;
    display: block;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  }
`
// <span className="NavItemHover">{nav.text}</span>
const NavItem = ({ nav }) => (
  <NavItemStyled>
    {nav.text && (
      <a href={nav.url}>
        <span className="NavItemNormal">{nav.text}</span>
      </a>
    )}
    {nav.icon && (
      <a href={nav.url}>
        <span className="NavItemNormal"><i className={`${nav.iconset} fa-${nav.icon}`}></i></span>
      </a>
    )}
  </NavItemStyled>
)
export default NavItem
