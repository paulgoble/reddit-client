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
      <h4>Posted by: {author}</h4>
      <h2>{title}</h2>
      {kind === 't3' ? 
        <p>{selftext.slice(0, 400)}</p> :
        <p>{body}</p>
      }
      {data.is_video ? 
        <video width='400' controls>
          <source src={data.media.reddit_video.scrubber_media_url} />
        </video> : <a>{url_overridden_by_dest}</a>}
      <h4>Score: {score}</h4>
    </li>
  )
}
