import styled from "styled-components"
import React from "react"
import data from "../../content/posts.yml"
import Post from "./core/Post"
import uniqolor from "uniqolor"

const PostsStyled = styled.div`
  display: block;

  &::last-child {
    margin-bottom: 0;
  }
`

const Posts = () => (
  <>
    <div id="posts"></div>
    <PostsStyled>
      {data.posts.map(post => {
        const color = uniqolor.random({
          saturation: [60, 80],
          lightness: [50, 60],
        })
        return (
          <Post
            key={`post_${post.url.substring(1)}`}
            color={color.color}
            post={post}
          />
        )
      })}
    </PostsStyled>
  </>
)

export default Posts
