import dss from "./DateSwitcher.module.scss";

export const DateSwitcher = ({ title }) => {
  return (
    <div className={dss.DateSwitcher}>
      <h3>{title}</h3>
    </div>
  );
};
