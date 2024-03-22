import React from "react";
import { useState } from "react";
import getPlayList from "../api";
const init = {
  playlists: {},
  recentPlayLists: [],
  favourites: [],
};
const usePlaylists = () => {
  const [state, setState] = useState({ ...init });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getPlaylistById = async (playListId) => {
    let playlist;

    setLoading(true);
    try {
      playlist = await getPlayList(playListId);
      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playListId]: playlist,
        },
      }));
    } catch (e) {
      setError(e.response?.data?.error?.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  const addRecentPlaylist = (playListId) => {
    setState((prev) => ({
      ...prev,
      recentPlayLists: [...prev, playListId],
    }));
  };

  const addFavouritesPlaylist = (playListId) => {
    setState((prev) => ({
      ...prev,
      favourites: [...prev, playListId],
    }));
  };

  const getPlaylistByIds = (ids = []) => {
    return ids.map((playListId) => state.playlists[playListId]);
  };

  return {
    playlists: state.playlists,
    favourites: getPlaylistByIds(state.favourites),
    recentPlayLists: getPlaylistByIds(state.recentPlayLists),
    getPlaylistById,
    addFavouritesPlaylist,
    addRecentPlaylist,
    loading,
    error,
  };
};

export default usePlaylists;
