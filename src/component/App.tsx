import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { setCounter } from "../store/carousel.store";
import { AppGlobalStyle } from "../style/App.style";
import About from "./About";
import Accueil from "./Accueil";
import Footer from "./Footer";
import MyHeader from "./MyHeader";
/**
 * main component for the application
 * @returns
 *
 */
import jsonData from "./../data/lang.json";
import Country from "./Country";
import Services from "./Services";
import Packages from "./Packages";
import Home from "./Home";
export const myDataLang: any = jsonData;
export const interval = myDataLang["carouselInterval"];

export default function App() {
  const timer = setInterval(setCounter, interval);
  const [isHide, setDisplayState] = useState<boolean>(true);

  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}
