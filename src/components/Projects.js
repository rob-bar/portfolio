import styled from "styled-components"
import React from "react"
import siteData from "../../content/site.yml"
import Project from "./Project"

const ProjectsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 310px);
  grid-gap: 0.625rem;
`
const Projects = () => (
  <ProjectsStyled>
    {siteData.projects.map((project, i) => (
      project.active &&
      <Project key={`project_${project.title}`} project={project} />
    ))}
  </ProjectsStyled>
)

export default Projects
