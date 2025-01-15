import { NavLink } from "react-router-dom";
import ns from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={ns.Navigation}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <ul>
          <li>
            <NavLink to="/line-up">Line-up</NavLink>
          </li>
          <li>
            <NavLink to="/program">Program</NavLink>
          </li>
        </ul>
        <li>
          <NavLink to="/camps">Camps</NavLink>
        </li>
        <li>
          <NavLink to="/tickets">Billetter</NavLink>
        </li>
        <NavLink to="/practical-info">
          <li>Praktisk Info</li>
        </NavLink>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
