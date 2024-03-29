import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id; // will give linting error - read it and decide for yourself
  // {videoId} = video.id // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="video-detail" className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div id="video-title">{video.snippet.title}</div>
        <div id="video-des">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
