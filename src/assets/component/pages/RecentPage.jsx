import React from "react";
import Classes from "../card/card.module.css";
import { useStoreState, useStoreActions } from "easy-peasy";
import PlaylistCardItem from "../card/PlaylistCardItem";
const RecentPage = ({ data }) => {
  const { items } = useStoreState((state) => state.recent);
  const { addFavourite, removeFavourite } = useStoreActions(
    (actions) => actions.favourite
  );

  console.log("items recent: ", items);
  return (
    <div className={Classes.cardSection}>
      {items.map((item, index) => (
        <PlaylistCardItem
          key={index}
          item={data[item]}
          isDelete={false}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      ))}
    </div>
  );
};

export default RecentPage;
