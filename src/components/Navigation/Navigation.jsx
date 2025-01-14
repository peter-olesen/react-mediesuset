import ns from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={ns.Navigation}>
      <ul>
        <li>Forside</li>
        <li>Events</li>
        <ul>
          <li>Line-up</li>
          <li>Program</li>
        </ul>
        <li>Camps</li>
        <li>Billetter</li>
        <li>Praktisk Info</li>
        <li>Login</li>
      </ul>
      <span>Search</span>
    </nav>
  );
};
