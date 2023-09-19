import "./Header.css";
import logo from "../../assets/images/the-bowl-logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img className="logo" src={logo} alt="" />
        <h3>Delicious Food</h3>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sea-food">Sea Food</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Header;
