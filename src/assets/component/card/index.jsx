import PlaylistCardItem from "./PlaylistCardItem";
import Classes from "./card.module.css";
import { useStoreActions } from "easy-peasy";

const PlaylistCard = ({ playlists }) => {
  const { addFavourite, removeFavourite } = useStoreActions(
    (actions) => actions.favourite
  );

  const { deletePlaylist } = useStoreActions((action) => action.playlists);

  return (
    <div>
      <section className={Classes.cardSection}>
        {Object.values(playlists).map((item) => (
          <PlaylistCardItem
            item={item}
            key={item.playListId}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            deletePlaylist={deletePlaylist}
          />
        ))}
      </section>
    </div>
  );
};

export default PlaylistCard;
