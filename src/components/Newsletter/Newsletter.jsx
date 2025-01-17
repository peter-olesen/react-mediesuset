import ns from "./Newsletter.module.scss";
import { HiOutlineMail } from "react-icons/hi";

export const Newsletter = () => {
  return (
    <div className={ns.Newsletter}>
      <h3>TILMELD NYHEDSBREV</h3>
      <p>Få de seneste nyheder sendt til din indbakke</p>
      <form>
        <span className={ns.Icon}>
          <HiOutlineMail />
        </span>
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Indtast emailadresse"
        />
        <button onClick={() => alert("Tilmeldt")}>TILMELD</button>
      </form>
    </div>
  );
};
