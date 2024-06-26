import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Classes from "./pages.module.css";
import { useStoreActions } from "easy-peasy";

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const firstVideo = playlists[playlistId].playlistItems[0];
  const INIT_STATE = {
    videoId: firstVideo.contentDetails.videoId,
    title: firstVideo.title,
    description: firstVideo.description,
  };
  const [state, setState] = useState(INIT_STATE);
  const [des, setDes] = useState(false);
  const [videoCount, setVideoCount] = useState({
    length: 0,
    videoNo: 0,
    playlistTitle: "",
  });

  useEffect(() => {
    const currentVideoPosition = playlists[playlistId].playlistItems.findIndex(
      (item) => item.contentDetails.videoId === state.videoId
    );
    setVideoCount({
      length: playlists[playlistId].playlistItems.length,
      videoNo: currentVideoPosition + 1,
      playlistTitle: playlists[playlistId].playlistTitle,
    });
  }, [playlistId, state.videoId]);

  const { addRecent } = useStoreActions((actions) => actions.recent);
  addRecent(playlistId);

  const handelClick = () => {
    setDes(!des);
  };

  const onClickHandel = (data) => {
    setState({
      videoId: data.contentDetails.videoId,
      title: data.title,
      description: data.description,
    });
  };

  return (
    <div className={Classes.playerPageWrapper}>
      <div className={Classes.videoContent}>
        <div className={Classes.videoCount}>
          <h4>{videoCount.playlistTitle}</h4>
          <span>{videoCount.videoNo + "/" + videoCount.length}</span>
        </div>

        <div className={Classes.videoItem}>
          {playlists[playlistId].playlistItems.map((item) => (
            <div
              key={item.title}
              onClick={() => onClickHandel(item)}
              className={`${Classes.videoContentThumbnail} ${
                item.contentDetails.videoId == state.videoId && Classes.focus
              }`}
            >
              <h5>{item.title}</h5>
              <img src={item.thumbnails?.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className={Classes.video}>
        <YouTube videoId={state.videoId} />
        <h4>{state.title}</h4>
        <p>
          {des ? state.description : state.description.substr(0, 150) + "..."}
          {"  "}
          <span onClick={handelClick}>{des ? "Show Less" : "Show More"}</span>
        </p>
      </div>
    </div>
  );
};

export default PlayerPage;
