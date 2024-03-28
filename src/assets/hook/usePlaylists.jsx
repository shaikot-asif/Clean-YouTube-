import { useEffect } from "react";
import { useState } from "react";
import getPlayList from "../api";
import storage from "../utils/Storag/Storage";
const init = {
  playlists: {},
  recentPlayLists: [],
  favourites: [],
};
const STORAGE_KEY = "CY_STORAGE_KEY";
const usePlaylists = () => {
  const [state, setState] = useState(init);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);

    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== init) {
      storage.Save(STORAGE_KEY, state);
    }
  }, [state]);

  const getPlaylistById = async (playListId, force = false) => {
    if (state.playlists[playListId] && !force) {
      return;
    }
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
