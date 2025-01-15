import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};
