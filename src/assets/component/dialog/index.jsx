import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Classes from "./dialog.module.css";

const PlayListDialogForm = ({ handelClose, PlaylistIdOrLink, open }) => {
  const [state, setState] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!open) {
      setState("");
      setFocused(false);
    }
  }, [open]);
  console.log(focused, "focused");
  const handelFocus = () => {
    setFocused(true);
  };

  const handelBlur = () => {
    if (!state.trim()) {
      setFocused(false);
    }
  };
  const handelChange = (e) => {
    setState(e.target.value);

    if (e.target.value.trim()) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault;
    //TODO:
    if (!state) {
      alert("Please give any playlist id");
    } else {
      PlaylistIdOrLink(state);
      setState("");
      handelClose();
    }
  };

  return (
    <div>
      {open && (
        <div className={`${Classes.formParent}`}>
          <div className={`${Classes.formWrapper}`}>
            <div>
              <p>
                To add a new playlist please insert a valid playlist link or id.
              </p>
            </div>
            <input
              className={`${Classes.formInput}`}
              type="text"
              id="linkForm"
              value={state}
              onChange={handelChange}
              onBlur={handelBlur}
              onFocus={handelFocus}
            />
            <label
              className={`${Classes.formLabel} ${
                focused ? Classes.focused : ""
              }`}
              htmlFor="linkForm"
            >
              Playlist Link
            </label>
            <div className={`${Classes.formBtnWrapper}`}>
              <button
                onClick={() => {
                  setState("");
                  setFocused(false);
                  handelClose();
                }}
              >
                Cancel
              </button>
              <button onClick={handelSubmit} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayListDialogForm;
