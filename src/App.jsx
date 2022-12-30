import React from 'react'
import { useGetDataQuery } from './api/apiSlice'
import './App.css'

function App() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetDataQuery()

  let content
  if (isLoading) {
    content = <h2>Loading...</h2>
  } else if (isError) {
    content = <h2>{error.status}</h2>
  } else if (!posts) {
    content = <h2>DATA_ERROR: undefined</h2>
  } else if (isSuccess) {
    content = <PostList posts={posts} />
  }

  return (
    <div id="app">
      {content}
    </div>
  )
}

const PostList = ({ posts }) => (
  <ol>
    {posts.map((post) => <Post 
      key={post.data.id} 
      data={post.data} 
      />
    )}
  </ol>
)

const Post = ({ data }) => {
  const {
    title,
    author,
    selftext
  } = data

  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{selftext.slice(0, 600)}</p>
    </li>
  )
}

export default App