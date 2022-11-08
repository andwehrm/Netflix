import ImageBackground from "../components/imageBackground/imageBackground";
import StartPageFooter from "../components/startPageFooter/startPageFooter";
import StaticLogo from "../components/staticLogo/staticLogo";
import footerData from "../data/loginFooterData.json";
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="loginPage">
       <StaticLogo/>
       <ImageBackground img="images/header.jpeg" alt="" height={1000}></ImageBackground>
       <StartPageFooter
          title="Fragen? Einfach anrufen: 0800-000-9677"
          links={footerData}
        />
    </div>
  );
}

export default LoginPage;