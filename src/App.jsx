import React from "react";
import { useState, useEffect } from "react";
import PlaylistCard from "./assets/component/card";
import NavBar from "./assets/component/navBar";
import usePlaylists from "./assets/hook/usePlaylists";

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();

  return (
    <div>
      <NavBar playlistIdOrLink={getPlaylistById} />
      {/* {Object.values(playlists).map((item) => (
        <PlaylistCard
          key={item.playListId}
          channelTitle={item.channelTitle}
          playListId={item.playListId}
          playlistTitle={item.playlistTitle}
          playlistThumbnails={item.playlistThumbnails}
        />
      ))} */}
      <PlaylistCard playlists={playlists} />
    </div>
  );
};

export default App;
