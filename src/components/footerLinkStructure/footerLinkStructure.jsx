import React from "react";
import "./footerLinkStructure.css";

function FooterLink(props) {
  return (
    <li key={props.id} className="footerLink">
      <a href={props.source ? props.source : "http://localhost:3000"}>
        {props.text}
      </a>
    </li>
  );
}

export default function FooterLinkStructure(props) {
  const links = props.links.map((link) => {
    return <FooterLink key={link.id} {...link} />;
  });

  return (
    <>
      <ul className="footerLinkStructure">{links}</ul>
    </>
  );
}
