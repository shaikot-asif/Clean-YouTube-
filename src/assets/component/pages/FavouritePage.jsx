import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import PlaylistCardItem from "../card/PlaylistCardItem";
import Classes from "../card/card.module.css";

const FavouritePage = ({ data }) => {
  const { items } = useStoreState((state) => state.favourite);

  const { addFavourite, removeFavourite } = useStoreActions(
    (actions) => actions.favourite
  );

  return (
    <div className={Classes.cardSection}>
      {items.map((item) => (
        <PlaylistCardItem
          key={item.playListId}
          item={data[item]}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      ))}
    </div>
  );
};

export default FavouritePage;
