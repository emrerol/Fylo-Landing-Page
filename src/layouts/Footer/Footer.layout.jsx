import "./Footer.style.scss";
import FooterLogo from "../../images/logo.svg";
import Location from "../../images/icon-location.svg";
import Phone from "../../images/icon-phone.svg";
import Mail from "../../images/icon-email.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src={FooterLogo} className="footer-wrapper__logo" />
      <div className="footer-wrapper-container">
        <div className="footer-wrapper-container__location">
          <img
            src={Location}
            className="footer-wrapper-container__location--img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="footer-wrapper-container__contact">
          <div className="footer-wrapper-container__contact--phone">
            <img src={Phone} className="contact-img" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="footer-wrapper-container__contact--mail">
            <img src={Mail} className="contact-img" />
            <p>example@fylo.com </p>
          </div>
        </div>
        <div className="footer-wrapper-container__links">
          <a href="#" className="footer-wrapper-container__links--a">
            About Us
          </a>
          <a href="#" className="footer-wrapper-container__links--a">
            Contact Us
          </a>
          <a href="#" className="footer-wrapper-container__links--a">
            Jobs
          </a>
          <a href="#" className="footer-wrapper-container__links--a">
            Terms
          </a>
          <a href="#" className="footer-wrapper-container__links--a">
            Press
          </a>
          <a href="#" className="footer-wrapper-container__links--a">
            Privacy
          </a>
          <a href="#" className="footer-wrapper-container__links--a">
            Blog
          </a>
        </div>
        <div className="footer-wrapper-container__socials">
          <img
            src={Facebook}
            className="footer-wrapper-container__socials--icon"
          />
          <img
            src={Twitter}
            className="footer-wrapper-container__socials--icon"
          />
          <img
            src={Instagram}
            className="footer-wrapper-container__socials--icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
