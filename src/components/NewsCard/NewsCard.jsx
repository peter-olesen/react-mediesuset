import { NavLink } from "react-router-dom";
import nc from "./NewsCard.module.scss";

export const NewsCard = ({ title, content, image, id }) => {
  return (
    <div className={nc.NewsCard}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
      <NavLink to={`/nyhed/${id}`}>
        <div className={nc.ReadMore}>Læs mere</div>
      </NavLink>
    </div>
  );
};
