import React from "react";
import InfoBox from "../infoBox/infoBox";
import TitledMailRegister from "../titledMailRegister/titledMailRegister";
import "./infoBoxRegister.css";

export default function InfoBoxRegister(props) {
  return (
    <div className="infoBoxRegister">
      <InfoBox {...props} />
      <TitledMailRegister
        context="infobox"
        subline="Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren."
      />
    </div>
  );
}
