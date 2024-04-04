import { createStore } from "easy-peasy";
import favouriteModel from "./favouriteModel";
import playlistModel from "./playlistModel";
import recentModel from "./recentModel";

const store = createStore({
  playlists: playlistModel,
  favourite: favouriteModel,
  recent: recentModel,
});

export default store;
