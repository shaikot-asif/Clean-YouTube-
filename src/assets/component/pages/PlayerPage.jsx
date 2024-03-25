import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";

import YouTube from "react-youtube";

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const videoId = playlists[playlistId].playlistItems[0].contentDetails.videoId;
  const [state, setState] = useState(videoId);

  const onClickHandel = (data) => {
    console.log(data);
    setState(data);
  };

  console.log(playlists[playlistId]);

  return (
    <div>
      <div>
        <YouTube videoId={state} />
        <div>
          {playlists[playlistId].playlistItems.map((item) => (
            <div key={item.title}>
              <h5 onClick={() => onClickHandel(item.contentDetails.videoId)}>
                {item.title}
              </h5>
              <img src={item.thumbnails.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
