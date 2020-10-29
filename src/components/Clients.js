import styled from "styled-components"
import React from "react"
import siteData from "../../content/site.yml"
import Client from "./Client"

const ClientsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 0.625rem;
`

const Clients = () => (
  <ClientsStyled>
    {siteData.clients.map(client => (
      <Client key={`client_${client.name}`} client={client} />
    ))}
  </ClientsStyled>
)

export default Clients
