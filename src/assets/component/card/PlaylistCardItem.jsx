import React from "react";
import Classes from "./card.module.css";
import { Link } from "react-router-dom";
import { FaRegPlayCircle, FaHeart } from "react-icons/fa";
import { useStoreState } from "easy-peasy";
import { useState } from "react";
const PlaylistCardItem = ({ item, removeFavourite, addFavourite }) => {
  const [favBtn, setFavBtn] = useState(
    JSON.parse(localStorage.getItem(`favourite-${item.playListId}`)) === true
  );

  console.log("favBtn:", favBtn);
  const handleClick = () => {
    const isFavBtn = !favBtn;
    setFavBtn(isFavBtn);
    localStorage.setItem(
      `favourite-${item.playListId}`,
      JSON.stringify(isFavBtn)
    );
    if (!favBtn) {
      addFavourite(item.playListId);
    }
    if (favBtn) {
      removeFavourite(item.playListId);
    }
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
                className={`${
                  !favBtn ? Classes.heartIcon : Classes.heartIconFalse
                }`}
                onClick={handleClick}
              >
                <FaHeart />
              </button>

              <Link className={Classes.link} to={`/player/${item.playListId}`}>
                <button>
                  Start tutorial
                  <FaRegPlayCircle />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCardItem;
