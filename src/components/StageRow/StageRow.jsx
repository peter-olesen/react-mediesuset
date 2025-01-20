import srs from "./StageRow.module.scss";

export const StageRow = ({ time, artist }) => {
  return (
    <div className={srs.StageRow}>
      <div className={srs.StageTime}>{time}</div>
      <div className={srs.StageArtist}>{artist}</div>
    </div>
  );
};
