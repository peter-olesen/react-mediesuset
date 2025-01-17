import { useContext, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

import { UserContext } from "../context/UserContext/UserContext";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import ls from "../style/pages/Login.module.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [error, setError] = useState(null);

  const { setUserData } = useContext(UserContext);

  const submitData = (event) => {
    event.preventDefault();
    let urlencoded = new URLSearchParams();

    urlencoded.append("username", email);
    urlencoded.append("password", password);

    const options = {
      method: "POST",
      body: urlencoded,
    };

    fetch("https://api.mediehuset.net/token", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setUserData(data);
          setLoginMessage("Korrekt login");
        } else {
          setLoginMessage("Forkert login");
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        setError("Noget gik galt. Prøv igen senere.");
      });
  };

  return (
    <SectionContainer>
      <h2>LOGIN</h2>
      <p>Indtast login oplysninger:</p>
      {loginMessage && <p>{loginMessage}</p>}
      {error && <p className={ls.error}>{error}</p>}
      <form className={ls.Login} onSubmit={submitData}>
        <div>
          <span className={ls.Icon}>
            <MdAlternateEmail />
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Indtast din email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span className={ls.Icon}>
            <CiLock />
          </span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Indtast adgangskode"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </SectionContainer>
  );
};
