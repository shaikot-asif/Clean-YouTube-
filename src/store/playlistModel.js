import { action, thunk, persist } from "easy-peasy";
import getPlayList from "../assets/api";
import { toast } from "react-hot-toast";
const playlistModel = persist(
  {
    data: {},
    error: "",
    isloading: false,
    addPlaylist: action((state, payload) => {
      state.data[payload.playListId] = payload;
    }),
    setLoading: action((state, payload) => {
      state.isloading = payload;
    }),
    setError: action((state, payload) => {
      state.error = payload;
    }),

    deletePlaylist: action((state, payload) => {
      const deletedData = { ...state.data };
      delete deletedData[payload];
      state.data = deletedData;
    }),

    getPlaylist: thunk(
      async (
        { addPlaylist, setLoading, setError },
        playlistId,
        { getState }
      ) => {
        console.log(getState(), "from getPlaylist");
        if (getState().data[playlistId]) {
          toast.error("Playlist already exist");
          return;
        }

        setLoading(true);
        try {
          const playlist = await getPlayList(playlistId);
          addPlaylist(playlist);
          toast.success("Paylist Added");
        } catch (e) {
          toast.error("Playlist link or id are invalid");
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
