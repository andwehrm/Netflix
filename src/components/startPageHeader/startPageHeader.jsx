import React from "react";
import ImageBackground from "../imageBackground/imageBackground";
import TitledMailRegister from "../titledMailRegister/titledMailRegister";
import StaticLogo from "../staticLogo/staticLogo";
import "./startPageHeader.css";
import StaticHeader from "../staticHeader/staticHeader";
import LanguagePicker from "../languagePicker/languagePicker";
import LoginButton from "../loginButton/loginButton";
import AdBanner from "../adBanner/adBanner";

export default function StartPageHeader() {
  return (
    <div className="startPageHeader">
      <AdBanner
        badgeText="Neu!"
        bannerText="Abos jetzt schon ab"
        bannerAmount="4,99€"
        link="localhost:3000"
        CTAtext="Weitere Infos &gt;"
      />
      <StaticLogo />
      <StaticHeader>
        <LanguagePicker color="#ffffff" />
        <LoginButton link="http://localhost:3000/login" />
      </StaticHeader>
      <ImageBackground img="images/header.jpeg" alt="" height={750}>
        <TitledMailRegister
          context="header"
          title="Unbegrenzt Filme, Serien und mehr"
          subtitle="Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar."
          subline="Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren."
        />
      </ImageBackground>
    </div>
  );
}
