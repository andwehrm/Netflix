import React from "react";
import "./infoBoxItem.css";

export default function InfoBoxItem(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <li key={props.id} className="infoBoxItem">
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {props.title}
          <svg
            id="thin-x"
            viewBox="0 0 26 26"
            class={open ? "svg-opened" : "svg-closed"}
            focusable="true"
          >
            <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
          </svg>
        </button>

        <div
          className={open ? "infoBoxContent__open" : "infoBoxContent__closed"}
        >
          <span className="infoBoxText">{props.content}</span>
        </div>
      </li>
    </>
  );
}
