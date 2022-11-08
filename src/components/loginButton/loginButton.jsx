import React from "react";
import "./loginButton.css";

export default function LoginButton(props) {
  return (
    <div className="loginButton">
      <a href={props.link}>Einloggen</a>
    </div>
  );
}
