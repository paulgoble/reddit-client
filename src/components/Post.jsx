import { useNavigate, useLocation } from "react-router-dom"
import { Card, CardContent, CardHeader } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'

const PostTitle = ({ title, score, num_comments }) => (
  <div className="post-title" >
    <div className="icons">
      <span className="icon">
        <FavoriteIcon color={"secondary"} />{score}
      </span>
      <span className="icon">
        <CommentIcon />{num_comments}
      </span>
    </div>
    {title}
  </div>
)

export const Post = ({ data, kind }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClick = (URI) => {
    const pathname = URI.slice(0, -1)
    if (pathname !== location.pathname) {
      navigate(pathname)
    }
  }

  const {
    title,
    author,
    selftext,
    body,
    score,
    num_comments,
    url_overridden_by_dest
  } = data

  return (
    <li className="post" onClick={() => onClick(data.permalink)}>
      <Card variant="elevation" elevation={4}>
        <CardHeader 
          title={
            <PostTitle title={title} 
              score={score}
              num_comments={num_comments}
            />
          }
          subheader={`Posted by: ${author}`}
          sx={{ bgcolor: 'lightblue' }}
        ></CardHeader>
        <CardContent>
          {kind === 't3' ? 
            <p>{selftext.slice(0, 400)}</p> :
            <p>{body}</p>
          }
          {data.is_video ? 
            <video width='400' controls>
              <source src={data.media.reddit_video.scrubber_media_url} />
            </video> : 
            <a target="_blank"
              href={url_overridden_by_dest}
            >
              {url_overridden_by_dest}
            </a>}
        </CardContent>
      </Card>
    </li>
  )
}
