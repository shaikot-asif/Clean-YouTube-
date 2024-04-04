import PlaylistCardItem from "./PlaylistCardItem";
import Classes from "./card.module.css";
import { useStoreActions } from "easy-peasy";

const PlaylistCard = ({ playlists }) => {
  console.log(playlists, "from playlistcard");
  const { addFavourite, removeFavourite } = useStoreActions(
    (actions) => actions.favourite
  );

  return (
    <div>
      <section className={Classes.cardSection}>
        {Object.values(playlists).map((item) => (
          <PlaylistCardItem
            item={item}
            key={item.playListId}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
          />
        ))}
      </section>
    </div>
  );
};

export default PlaylistCard;
