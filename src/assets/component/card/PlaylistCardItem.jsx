import React from "react";
import Classes from "./card.module.css";
import { Link } from "react-router-dom";
import { FaRegPlayCircle, FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useStoreState } from "easy-peasy";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const PlaylistCardItem = ({
  item,
  removeFavourite,
  addFavourite,
  deletePlaylist,
  isDelete = true,
}) => {
  const { items } = useStoreState((state) => state.favourite);

  const isFab = items.filter((pId) => pId === item.playListId);
  const handleClick = () => {
    if (isFab[0] === item.playListId) {
      removeFavourite(isFab[0]);
      toast.success("delete to favourite");
    } else {
      addFavourite(item.playListId);
      toast.success("Add to favourite");
    }
  };

  const deletePlaylistHandle = () => {
    deletePlaylist(item.playListId);
    removeFavourite(item.playListId);
    toast.success("Remove playlist");
  };

  return (
    <div className={Classes.cardItem}>
      <img
        src={item.playlistThumbnails.url}
        className="playlistThumbnail"
        alt={item.playlistTitle}
      />

      <div className={Classes.contentArea}>
        <div className={Classes.cardContent}>
          <div>
            <h4>{item.channelTitle}</h4>

            <h3>
              {item.playlistTitle.length > 30
                ? item.playlistTitle.substr(0, 30) + "..."
                : item.playlistTitle}
            </h3>
          </div>
          <div className={Classes.cardTitleBtn}>
            <p>
              {item.playlistDescription.length > 150
                ? item.playlistDescription.substr(0, 150) + "..."
                : item.playlistDescription}
            </p>
            <div className={Classes.cardBtn}>
              <button
                key={item.playListId}
                onClick={handleClick}
                className={`${
                  isFab[0] !== item.playListId
                    ? Classes.heartIcon
                    : Classes.heartIconFalse
                }`}
              >
                <FaHeart />
              </button>

              <Link className={Classes.link} to={`/player/${item.playListId}`}>
                <button>
                  {/* Start tutorial */}
                  <FaRegPlayCircle />
                </button>
              </Link>
              {isDelete && (
                <button
                  className={Classes.heartIcon}
                  onClick={deletePlaylistHandle}
                >
                  <IoMdRemoveCircleOutline />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCardItem;
