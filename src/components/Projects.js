import styled from "styled-components"
import React from "react"
import data from "../../content/projects.yml"
import Project from "./core/Project"

const ProjectsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 310px);
  grid-gap: 0.625rem;
  margin-bottom: 4.0625rem;
`
const Projects = () => (
  <>
    <div id="work"></div>
    <ProjectsStyled>
      {data.projects.map(
        (project, i) =>
          project.active && (
            <Project key={`project_${project.title}`} project={project} />
          )
      )}
    </ProjectsStyled>
  </>
)

export default Projects
