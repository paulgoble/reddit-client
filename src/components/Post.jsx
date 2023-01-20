import { Card, CardContent, CardHeader } from "@mui/material"

export const Post = ({ data, kind, onClick }) => {
  const {
    title,
    author,
    selftext,
    body,
    score,
    url_overridden_by_dest
  } = data

  return (
    <li className="post" onClick={() => onClick(data.url)}>
      <Card variant="elevation" elevation={4}
        sx={{ margin: '0.75em 4.5em' }}
      >
        <CardHeader title={title}
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
            </video> : <a>{url_overridden_by_dest}</a>}
          <h4>Score: {score}</h4>
        </CardContent>
      </Card>
    </li>
  )
}
