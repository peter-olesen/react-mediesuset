import scs from "./SectionContainer.module.scss";

export const SectionContainer = ({ children }) => {
  return <section className={scs.SectionContainer}>{children}</section>;
};
