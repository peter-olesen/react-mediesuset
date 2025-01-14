import hs from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import Logo from "../../assets/img/Logo.png";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={Logo} alt="Mediesuset" />
      </NavLink>
      <span>4 - 7. juli 2022</span>
      <Navigation />
    </header>
  );
};
