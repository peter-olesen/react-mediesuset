import hs from "./PageHeader.module.scss";

export const PageHeader = ({ pageTitle }) => {
  return (
    <div className={hs.Header}>
      <h3>{pageTitle}</h3>
    </div>
  );
};
