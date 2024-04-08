import { action, persist } from "easy-peasy";

const favouriteModel = persist(
  {
    items: [],
    addFavourite: action((state, payload) => {
      state.items.push(payload);
    }),

    removeFavourite: action((state, payload) => {
      state.items = state.items.filter((pid) => pid !== payload);
    }),
  },
  { storage: "localStorage" }
);

export default favouriteModel;
