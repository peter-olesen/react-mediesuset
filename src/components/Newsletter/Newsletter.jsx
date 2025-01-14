import Hancock from "../../assets/img/Hancock_logo.png";

export const Newsletter = () => {
  return (
    <div>
      <h3>TILMELD NYHEDSBREV</h3>
      <p>Få de seneste nyheder sendt til din indbakke</p>
      <form>
        <span>Icon</span>
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Indtast emailadresse"
        />
        <button onClick={() => alert("Tilmeldt")}>TILMELD</button>
      </form>
      <img src={Hancock} alt="" />
    </div>
  );
};
