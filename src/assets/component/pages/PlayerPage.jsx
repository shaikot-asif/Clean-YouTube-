import React from "react";

import { useParams } from "react-router-dom";

import YouTube from "react-youtube";

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();

  let videoId = playlists[playlistId].playlistItems[0].contentDetails.videoId;
  console.log(videoId);
  console.log(playlists[playlistId]);

  return (
    <div>
      <YouTube videoId={videoId} />
    </div>
  );
};

export default PlayerPage;
