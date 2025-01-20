import shs from "./StageHeader.module.scss";

export const StageHeader = ({ stageColor, stageName }) => {
  // const stageColor = [
  //   { name: "RØD SCENE", color: "#e9485b" },
  //   { name: "BLÅ SCENE", color: "#4a6fbf" },
  //   { name: "GRØN SCENE", color: "#54a047" },
  //   { name: "LILLA SCENE", color: "#a12e8f" },
  // ];
  return (
    <div className={shs.StageHeader}>
      <h3>{stageName}</h3>
    </div>
  );
};
