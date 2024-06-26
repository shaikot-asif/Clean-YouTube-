import React from "react";
import { useState } from "react";
import PlayListDialogForm from "../dialog";
import classes from "./navBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ getPlaylist }) => {
  const [open, setOpen] = useState(false);

  const PlaylistIdOrLink = (data) => {
    getPlaylist(data);
  };
  const handelClose = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={classes.headerArea}>
        <div className={`${classes.container} ${classes.wrapper}`}>
          <div className={classes.leftSide}>
            <h2 className="textLogo">
              <Link to="/">Clean Youtube</Link>
            </h2>
            <span className="learner">
              <a href="https://www.stacklearner.com" target="_blank">
                Stack Learner
              </a>
            </span>
          </div>
          <div className={`${classes.rightSide}`}>
            <ul className={classes.navMenu}>
              <li>
                <Link to="/favourite">Favourite</Link>
              </li>
              <li>
                <Link to="/recent">Recent</Link>
              </li>
              <li onClick={handelClose} className={classes.btn}>
                Add Playlist
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PlayListDialogForm
        open={open}
        handelClose={handelClose}
        PlaylistIdOrLink={PlaylistIdOrLink}
      />
    </div>
  );
};

export default NavBar;
