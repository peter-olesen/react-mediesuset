import fs from "./Footer.module.scss";
import { Newsletter } from "../Newsletter/Newsletter";
import Hancock from "../../assets/img/Hancock_logo.png";

export const Footer = () => {
  return (
    <footer className={fs.Footer}>
      <Newsletter />
      <img src={Hancock} alt="" />
    </footer>
  );
};
