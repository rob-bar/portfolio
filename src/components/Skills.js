import styled from "styled-components"
import React from "react"
import siteData from "../../content/site.yml"
import { MainSkill, Skill } from "./core/Skill"
import uniqolor from "uniqolor"

const SkillsStyled = styled.div`
  display: block;
`

const SkillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`

const Skills = () => (
  <>
    <div id="skills"></div>
    <SkillsStyled>
      {siteData.skills.map(mainSkill => {
        const color = uniqolor.random({
          saturation: [60, 80],
          lightness: [50, 60],
        })
        return (
          <SkillRow key={`MainSkill_${Object.keys(mainSkill)[0]}`}>
            <MainSkill color={color.color}>
              {Object.keys(mainSkill)[0]}
            </MainSkill>
            {Object.values(mainSkill)[0] &&
              Object.values(mainSkill)[0].map(skill => (
                <Skill color={color.color} key={`skill_${skill}`}>
                  {skill}
                </Skill>
              ))}
          </SkillRow>
        )
      })}
    </SkillsStyled>
  </>
)

export default Skills
