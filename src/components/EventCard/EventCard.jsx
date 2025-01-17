import ecs from "./EventCard.module.scss";

export const EventCard = ({ style, image, name, date }) => {
  return (
    <div style={style} className={ecs.EventCard}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{date}</p>
    </div>
  );
};
