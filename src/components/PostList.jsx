import React from 'react'
import { Post } from './Post'

export const PostList = ({ posts }) => (
  <ul id="post-list">
    {posts.map((post) => 
      <Post 
        key={post.data.id} 
        data={post.data} 
        kind={post.kind}
      />
    )}
  </ul>
)
