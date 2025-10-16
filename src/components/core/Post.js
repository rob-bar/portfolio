import styled from "styled-components"
import React from "react"

const PostStyled = styled.a`
  width: 100%;
  display: flex;
  align-items: stretch;
  background-color: #fff;
  text-decoration: none;
  margin-bottom: 2rem;
  color: #000;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    color: #fff;
    background-color: ${props => props.color};
  }
`

const Date = styled.div`
  border-right: 1px dotted #000;
  display: flex;
  flex-shrink: 0;
  font-size: 1.5rem;
  padding: 1.75rem;
  flex-direction: column;
  justify-content: center;
`

const DayAndMonth = styled.small`
  flex-shrink: 0;
`

const Year = styled.small`
  font-size: 1.65rem;
  flex-shrink: 0;
`
const Title = styled.p`
  font-family: "chunk5";
  font-size: 4rem;
  margin: 0;
  padding: 1.5rem;
`

const Post = ({ post, color }) => {
  return (
    <PostStyled className="shade post" color={color} href={post.url}>
      <Date>
        <DayAndMonth>12-08</DayAndMonth>
        <Year>2020</Year>
      </Date>
      <Title>{post.title}</Title>
    </PostStyled>
  )
}
export default Post
