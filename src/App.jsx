import React from "react";
import NavBar from "./assets/component/navBar";
import { Routes, Route } from "react-router-dom";
import usePlaylists from "./assets/hook/usePlaylists";
import HomePage from "./assets/component/pages/HomePage";
import NotFoundPage from "./assets/component/pages/NotFoundPage";
import PlayerPage from "./assets/component/pages/PlayerPage";

import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const App = () => {
  // const { getPlaylistById, playlists } = usePlaylists();
  const { getPlaylist } = useStoreActions((actions) => actions.playlists);

  const { data } = useStoreState((actions) => actions.playlists);

  return (
    <div>
      <NavBar
        /*playlistIdOrLink={getPlaylistById}*/ getPlaylist={getPlaylist}
      />
      <Routes>
        <Route path="/" element={<HomePage playlists={data} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={data} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
