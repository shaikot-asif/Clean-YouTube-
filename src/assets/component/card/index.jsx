import React from "react";
import Classes from "./card.module.css";

import { FaRegPlayCircle, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const PlaylistCard = ({ playlists }) => {
  return (
    <div>
      <section className={Classes.cardSection}>
        {Object.values(playlists).map((item) => (
          <div className={Classes.cardItem}>
            <img
              src={item.playlistThumbnails.url}
              className="playlistThumbnail"
              alt={item.playlistTitle}
            />

            <div className={Classes.contentArea}>
              <div className={Classes.cardContent}>
                <div>
                  <h3>
                    {item.playlistTitle.length > 30
                      ? item.playlistTitle.substr(0, 30) + "..."
                      : item.playlistTitle}
                  </h3>
                </div>
                <div className={Classes.cardTitleBtn}>
                  <h4>{item.channelTitle}</h4>

                  <div className={Classes.cardBtn}>
                    <button className={Classes.heartIcon}>
                      <FaHeart />
                    </button>
                    <button>
                      Start tutorial
                      <FaRegPlayCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlaylistCard;
