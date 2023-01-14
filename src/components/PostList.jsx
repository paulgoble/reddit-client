import React from 'react'
import { Post } from './Post'
import { PostDetail } from './PostDetail'

export const PostList = ({ posts }) => {
  const [showSummary, setShowSummary] = React.useState(true)
  const endpoint = React.useRef(null)
  
  const toggleState = (userInput) => {
    if (showSummary) {
      endpoint.current = userInput.slice(23,-1)
      setShowSummary(false)
    } else {
      endpoint.current = null
      setShowSummary(true)
    }
  }

  if (showSummary) {
    return (
      <ul id="post-list">
        {posts.map((post) => <Post 
          key={post.data.id} 
          data={post.data} 
          kind={post.kind}
          onClick={toggleState}
          />
        )}
      </ul>
    )
  } else {
    return (
      <div id="post-details" onClick={toggleState}>
        <PostDetail endpoint={endpoint.current} />
      </div>
    )
  }
}
