import styled from "styled-components"
import React from "react"

const ProjectStyled = styled.a`
  height: 150px;
  overflow: hidden;

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
      width: 310px;
      height: 150px;
      background: url('/images/layout/inset-shade.png') center center no-repeat;
      transition: opacity 700ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;
    }

    img {
      position: relative;
      transform: none;
      transition: transform 5s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
      margin: -25px 0 0 -25px;
    }
  }
`

const Project = ({ project }) => {
  return (
    <ProjectStyled className="shade" href="#">
      <div className="inner">
        <img
          src={`/images/projects/thumbs/${project.media.thumb}`}
          alt={project.title}
        />
        <div class="insetshade"></div>
      </div>
    </ProjectStyled>
  )
}
export default Project
