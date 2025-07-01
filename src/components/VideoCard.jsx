
const VideoCard = ({ info }) => {
    if (!info) return null; 
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    
  return (
      <div className="p-2 m-2 w-56">
          <img alt='thumnail' src={thumbnails?.medium?.url} />
          <ul>
              <li>{title}</li>
              <li>{ channelTitle}</li>
              <li>{ statistics.viewCount}</li>
          </ul>
    </div>
  )
}

export default VideoCard