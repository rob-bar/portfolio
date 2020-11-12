import styled from "styled-components"
import React from "react"

const ClientStyled = styled.a`
  height: 150px;
  width: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 1s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    filter: grayscale(0%) !important;
  }

  .logo {
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    width: 90px;
    height: auto;
    display: block;
  }
`

const Project = ({ client }) => {
  return (
    <ClientStyled className="shade client" href={client.url} target="_blank">
      <img
        src={`/images/logos/${client.image}`}
        alt={client.name}
        className="logo"
      />
    </ClientStyled>
  )
}
export default Project
