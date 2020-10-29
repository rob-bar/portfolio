import styled from "styled-components"
import React from "react"

const ClientStyled = styled.a`
  height: 150px;
  width: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
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
        class="logo"
      />
    </ClientStyled>
  )
}
export default Project
