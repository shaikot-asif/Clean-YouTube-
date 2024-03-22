import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./assets/component/navBar";
import usePlaylists from "./assets/hook/usePlaylists";

const App = () => {
  const [playlistLink, setPlaylistLink] = useState("");
  const playlistIdOrLink = (data) => {
    setPlaylistLink(data);
  };
  const { getPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getPlaylistById(playlistLink);
  }, [playlistLink]);

  return (
    <div>
      <NavBar playlistIdOrLink={playlistIdOrLink} />
    </div>
  );
};

export default App;
