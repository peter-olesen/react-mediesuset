import ecs from "./EventCard.module.scss";

export const EventCard = ({ style, image, name, date, onClick }) => {
  return (
    <div onClick={onClick} style={style} className={ecs.EventCard}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{date}</p>
    </div>
  );
};
