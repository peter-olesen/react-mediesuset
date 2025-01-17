import hs from "./HeaderTitle.module.scss";

export const HeaderTitle = ({ title }) => {
  return (
    <div className={hs.Header}>
      <h3>{title}</h3>
    </div>
  );
};
