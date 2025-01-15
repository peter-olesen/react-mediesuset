import ms from "./MainContainer.module.scss";
export const MainContainer = ({ children }) => {
  return <main className={ms.MainContainer}>{children}</main>;
};
