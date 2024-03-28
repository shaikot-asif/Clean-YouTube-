import { action, thunk, persist } from "easy-peasy";
import getPlayList from "../assets/api";

const playlistModel = persist(
  {
    data: {},
    error: "",
    isloading: false,
    addPlaylist: action((state, payload) => {
      state.data[payload.playListId] = payload;
      console.log(state, "state");
    }),
    setLoading: action((state, payload) => {
      state.isloading = payload;
    }),
    setError: action((state, payload) => {
      state.error = payload;
    }),

    getPlaylist: thunk(
      async (
        { addPlaylist, setLoading, setError },
        playlistId,
        { getState }
      ) => {
        console.log(getState(), "from getPlaylist");
        if (getState().data[playlistId]) {
          return;
        }

        setLoading(true);
        try {
          const playlist = await getPlayList(playlistId);
          addPlaylist(playlist);
        } catch (e) {
          setError(e.response?.data?.error?.message || "Something went wrong");
        } finally {
          setLoading(false);
        }
      }
    ),
  },
  {
    storage: "localStorage",
  }
);

export default playlistModel;
