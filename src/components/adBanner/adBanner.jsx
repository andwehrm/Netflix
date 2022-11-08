import React from "react";
import Badge from "../badge/badge";
import "./adBanner.css";

export default function AdBanner(props) {
  return (
    <div className="adBanner">
      <Badge text={props.badgeText}></Badge>
      <span className="adBanner__text">{props.bannerText}</span>
      <span className="adBanner__amount">{props.bannerAmount}</span>
      <span className="adBanner__text">.</span>
      <a className="adBanner__link" href={props.link}>
        {props.CTAtext}
      </a>
    </div>
  );
}
