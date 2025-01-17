import sgs from "./StageGrid.module.scss";

export const StageGrid = ({ children }) => {
  return <div className={sgs.StageGrid}>{children}</div>;
};
