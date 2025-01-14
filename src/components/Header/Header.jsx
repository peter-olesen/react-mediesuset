import hs from "./Header.module.scss";

import { Navigation } from "../Navigation/Navigation";
import Logo from "../../assets/img/Logo.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Mediesuset" />
      <Navigation />
    </header>
  );
};
