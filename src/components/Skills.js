import styled from "styled-components"
import React from "react"
import siteData from "../../content/site.yml"
import { MainSkill, Skill } from "./core/Skill"

const SkillsStyled = styled.div`
  display: block;
`

const SkillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`

const Skills = () => (
  <>
    <div id="skills"></div>
    <SkillsStyled>
      {siteData.skills.map(mainSkill => (
        <SkillRow key={`MainSkill_${Object.keys(mainSkill)[0]}`}>
          <MainSkill>{Object.keys(mainSkill)[0]}</MainSkill>
          {Object.values(mainSkill)[0] &&
            Object.values(mainSkill)[0].map(skill => (
              <Skill key={`skill_${skill}`}>{skill}</Skill>
            ))}
        </SkillRow>
      ))}
    </SkillsStyled>
  </>
)

export default Skills
