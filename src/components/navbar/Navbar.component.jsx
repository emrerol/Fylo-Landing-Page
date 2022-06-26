import Logo from "../../images/logo.svg";
import "./Navbar.style.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={Logo} alt="Site Logo" />
        </a>
      </div>
      <div className="navbar__links">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </div>
    </nav>
  );
};

export default Navbar;
