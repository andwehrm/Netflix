import React from "react";
import "./imageBackground.css";

export default function ImageBackground(props) {
  let height = props.height || "750px";
  let contentpos = props.height * -1.73333 || "-1300px";
  let gradientHeight = (props.height + 4) * -1 || "-754px";

  return (
    <div className="imageBackground" style={{ height: height }}>
      <img src={props.img} alt={props.alt} style={{ height: height }}></img>
      <div
        className="imageBackgroundGradient"
        style={{ height: props.height, top: gradientHeight }}
      />
      <div className="imageBackgroundContent " style={{ top: contentpos }}>
        {props.children}
      </div>
    </div>
  );
}
