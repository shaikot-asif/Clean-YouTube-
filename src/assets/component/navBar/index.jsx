import React from "react";
import { useState } from "react";
import PlayListDialogForm from "../dialog";
import classes from "./navBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ playlistIdOrLink }) => {
  const [open, setOpen] = useState(false);

  const PlaylistIdOrLink = (data) => {
    playlistIdOrLink(data);
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
            <button onClick={handelClose} className={classes.btn}>
              Add Playlist
            </button>
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
