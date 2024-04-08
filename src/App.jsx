import React from "react";
import NavBar from "./assets/component/navBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/component/pages/HomePage";
import NotFoundPage from "./assets/component/pages/NotFoundPage";
import PlayerPage from "./assets/component/pages/PlayerPage";

import { useStoreState, useStoreActions, action } from "easy-peasy";
import FavouritePage from "./assets/component/pages/FavouritePage";
import RecentPage from "./assets/component/pages/RecentPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  // const { getPlaylistById, playlists } = usePlaylists();
  const { getPlaylist } = useStoreActions((actions) => actions.playlists);

  const { data } = useStoreState((actions) => actions.playlists);

  return (
    <div>
      <NavBar getPlaylist={getPlaylist} />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage playlists={data} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={data} />}
        />
        <Route path="/favourite" element={<FavouritePage data={data} />} />
        <Route path="/recent" element={<RecentPage data={data} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
