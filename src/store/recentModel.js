import { action, persist } from "easy-peasy";

const recentModel = persist(
  {
    items: [],
    addRecent: action((state, payload) => {
      const checkRecent = state.items.includes(payload);
      if (checkRecent) {
        state.items = state.items.filter((pId) => pId !== payload);
      }
      state.items.unshift(payload);
      state.items = state.items.slice(0, 5);
    }),
  },
  { storage: "localStorage" }
);

export default recentModel;
