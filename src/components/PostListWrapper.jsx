import { PostList } from './PostList'
import { useGetDataQuery } from '../api/apiSlice'
import { useParams } from 'react-router-dom'

const PostListWrapper = () => {
  const { endpoint } = useParams()

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetDataQuery(endpoint)
  
  let content
  if (isLoading) {
    content = <h2>Loading...</h2>
  } else if (isError) {
    content = <h2>{error.status}</h2>
    console.log(error)
  } else if (!posts) {
    content = <h2>DATA_ERROR: undefined</h2>
  } else if (isSuccess) {
    content = <PostList posts={posts} />
  }

  return content
}

export default PostListWrapper