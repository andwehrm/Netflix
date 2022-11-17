import React from "react";
import "./imageBackground.css";

export default function ImageBackground(props) {
  let height = props.height || "750px";
  let contentpos = props.height / 4 || "187px";
  let bgColor = "rgba(0, 0, 0," + (props.opacity || "0.4") + ")";

  return (
    <div className="imageBackground" style={{ height: height }}>
      <div
        className="imageBackgroundGradient"
        style={{
          height: height,
          backgroundColor: bgColor,
        }}
      />
      <div className="imageBackgroundContent" style={{ marginTop: contentpos }}>
        {props.children}
      </div>
      <img src={props.img} alt={props.alt} style={{ height: height }}></img>
    </div>
  );
}
