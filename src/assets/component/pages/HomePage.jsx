import React from "react";
import PlaylistCard from "../card";
const HomePage = ({ playlists }) => {
  return (
    <div>
      <PlaylistCard playlists={playlists} />
    </div>
  );
};

export default HomePage;
