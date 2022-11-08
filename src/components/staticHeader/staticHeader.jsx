import React from "react";
import "./staticHeader.css";

export default function StaticHeader(props) {
  return (
    <div
      className="staticHeader"
      style={props.leftalign ? { left: "50px" } : { right: "50px" }}
    >
      {props.children}
    </div>
  );
}
