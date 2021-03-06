import styled from "styled-components"
import React from "react"

const ProjectStyled = styled.a`
  height: 150px;
  overflow: hidden;
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
  background-color: #fff;

  &.active {
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
  }

  &.inback {
  }

  &:hover {
    .inner {
      .insetshade {
        opacity: 0.5;
      }
    }

    .inner {
      img {
        transform: scale(0.9, 0.9);
      }
    }
  }

  .inner {
    position: relative;

    .insetshade {
      position: absolute;
      opacity: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("/images/layout/inset-shade.png");
      transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    }

    img {
      position: relative;
      transform: none;
      transition: transform 5s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
      margin: -25px 0 0 -25px;
      width: 360px;
      height: 200px;
    }
  }
`

const Project = ({ project }) => {
  return (
    <ProjectStyled
      className={`shade ${project.active ? "active" : ""}`}
      href={project.live_url ? project.live_url : "#"}
      target="_blank"
    >
      <div className="inner">
        <img
          src={`/images/projects/thumbs/${project.media.thumb}`}
          alt={project.title}
        />
        <div className="insetshade"></div>
      </div>
    </ProjectStyled>
  )
}
export default Project
