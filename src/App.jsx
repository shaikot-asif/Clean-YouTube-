import React from "react";
import NavBar from "./assets/component/navBar";
import { Routes, Route } from "react-router-dom";
import usePlaylists from "./assets/hook/usePlaylists";
import HomePage from "./assets/component/pages/HomePage";
import NotFoundPage from "./assets/component/pages/NotFoundPage";
import PlayerPage from "./assets/component/pages/PlayerPage";

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();

  return (
    <div>
      <NavBar playlistIdOrLink={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlists={playlists} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
