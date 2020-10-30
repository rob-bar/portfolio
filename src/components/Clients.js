import styled from "styled-components"
import React from "react"
import data from "../../content/clients.yml"
import Client from "./core/Client"

const ClientsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 0.625rem;
  margin-bottom: 4.0625rem;
`

const Clients = () => (
  <>
    <div id="clients"></div>
    <ClientsStyled>
      {data.clients.map(client => (
        <Client key={`client_${client.name}`} client={client} />
      ))}
    </ClientsStyled>
  </>
)

export default Clients
