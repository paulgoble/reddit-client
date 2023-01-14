import { PostList } from './PostList'
import { useGetDataQuery } from '../api/apiSlice'

const PostListWrapper = ({ userInput }) => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetDataQuery(userInput)
  
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