import { useGetPostDataQuery } from "../api/apiSlice"
import { useParams } from "react-router-dom"
import { Post } from "./Post"

export const PostDetail = () => {
  const { sub, path, post, comment } = useParams()

  let URI = `${sub}/comments/${path}/${post}`
  if (comment) {
    URI = URI.concat(`/${comment}`)
  }

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostDataQuery(URI)

  let content
  if (isLoading) {
    content = <h2>Loading...</h2>
  } else if (isError) {
    content = <h2>{error.status}</h2>
    console.log(error)
  } else if (!posts) {
    content = <h2>DATA_ERROR: undefined</h2>
  } else if (isSuccess) {
    content = <ul id="post-list">
      {posts.map((post) => <Post 
          key={post.data.id} 
          data={post.data} 
          kind={post.kind}
          />
        )}
    </ul>
  }

  return content
}

