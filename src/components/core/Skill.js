import styled from "styled-components"
import React from "react"

export const MainSkill = ({ children }) => {
  return <MainSkillStyled>{children}</MainSkillStyled>
}

export const Skill = ({ children }) => {
  return <SkillStyled>{children}</SkillStyled>
}

const MainSkillStyled = styled.span`
  background-color: #fff;
  text-transform: uppercase;
  font-family: "osb";
  font-size: 1rem;
  line-height: 1.4;
  margin-right: 0.3125rem;
  color: black;
  padding: 0.335rem 0.5rem;
  margin-bottom: 0.3125rem;

  @media screen and (min-width: 640px) {
    padding: 0.675rem 0.5rem;
  }
`

const SkillStyled = styled.span`
  background-color: #fff;
  text-transform: uppercase;
  font-family: "exl";
  font-size: 1.5rem;
  line-height: 1.4;
  margin-right: 0.3125rem;
  color: black;
  padding: 0 0.5rem;
  margin-bottom: 0.3125rem;

  @media screen and (min-width: 640px) {
    font-size: 2rem;
    line-height: 1.4;
  }
`
