import { useGetPostDataQuery } from "../api/apiSlice"
import { Post } from "./Post"

export const PostDetail = ({ endpoint }) => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostDataQuery(endpoint)

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
          onClick={() => null}
          />
        )}
    </ul>
  }

  return content
}

