import React, { useState } from "react";
import queryYouTube from "../api";

const VideoList = ({ topic }) => {
  const [videos, setVideos] = useState(null);

  queryYouTube(topic).then((videos) => setVideos(videos));
  return (
    <section>
      {videos &&
        videos.map((video) => {
          const {
            id: { videoId },
          } = video;
          const {
            snippet: { title, description },
          } = video;
          const {
            snippet: {
              thumbnails: {
                default: { url: videoThumbnail },
              },
            },
          } = video;

          return (
            <li className="video-card">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
              >
                <h3>{title}</h3>
                <img src={videoThumbnail}></img>
                <p>{description}</p>
              </a>
            </li>
          );
        })}
    </section>
  );
};

export default VideoList;
