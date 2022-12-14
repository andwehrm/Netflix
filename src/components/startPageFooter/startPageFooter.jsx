import React from "react";
import FooterLinkStructure from "../footerLinkStructure/footerLinkStructure";
import LanguagePicker from "../languagePicker/languagePicker";
import "./startPageFooter.css";

export default function StartPageFooter(props) {
  return (
    <div className="startPageFooterContainer">
      <div className="startPageFooter">
        <h1>{props.title}</h1>
        <FooterLinkStructure {...props} />
        <LanguagePicker color="#737373" />
        {props.country && <p>{props.country}</p>}
      </div>
    </div>
  );
}
