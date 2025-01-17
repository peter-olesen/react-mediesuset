import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "../layouts/Layout";

// Pages
import { Home } from "../pages/Home";
import { Lineup } from "../pages/Lineup";
import { Program } from "../pages/Program";
import { Camps } from "../pages/Camps";
import { Tickets } from "../pages/Tickets";
import { PracticalInfo } from "../pages/PracticalInfo";
import { Login } from "../pages/Login";
import { NewsStory } from "../pages/NewsStory";
import { PageNotFound } from "../pages/PageNotFound";
import { BuyTicket } from "../pages/BuyTicket";

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Mediesuset",
      "/line-up": "Line-up - Mediesuset",
      "/camps": "Camps - Mediesuset",
      "/tickets": "Billetter - Mediesuset",
      "/practical-info": "Praktisk Info - Mediesuset",
      "/login": "Login - Mediesuset",
    };

    const currentTitle = pageTitles[location.pathname];

    if (currentTitle) {
      document.title = currentTitle;
    } else {
      document.title = "404 - Page Not Found";
    }
  }, [location]);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/nyhed/:id"} element={<NewsStory />} />
        <Route path={"/line-up"} element={<Lineup />} />
        <Route path={"/program"} element={<Program />} />
        <Route path={"/camps"} element={<Camps />} />
        <Route path={"/tickets"} element={<Tickets />} />
        <Route path={"/ticket/:id"} element={<BuyTicket />} />
        <Route path={"/practical-info"} element={<PracticalInfo />} />
        <Route path={"/login"} element={<Login />} />

        <Route path={"/*"} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
