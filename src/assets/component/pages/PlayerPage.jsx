import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Classes from "./pages.module.css";

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const firstVideo = playlists[playlistId].playlistItems[0];
  const INIT_STATE = {
    videoId: firstVideo.contentDetails.videoId,
    title: firstVideo.title,
    description: firstVideo.description,
  };
  const [state, setState] = useState(INIT_STATE);

  const onClickHandel = (data) => {
    setState({
      videoId: data.contentDetails.videoId,
      title: data.title,
      description: data.description,
    });
  };

  console.log(playlists[playlistId]);

  return (
    <div>
      <div className={Classes.playerPageWrapper}>
        <div>
          <YouTube videoId={state.videoId} />
          <h4>{state.title}</h4>
          <p>{state.description}</p>
        </div>
        <div className={Classes.videoContent}>
          {playlists[playlistId].playlistItems.map((item) => (
            <div key={item.title} className={Classes.videoContentThumbnail}>
              <h5 onClick={() => onClickHandel(item)}>{item.title}</h5>
              <img src={item.thumbnails.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
