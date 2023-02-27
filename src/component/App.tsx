import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { setCounter } from "../store/carousel.store";
import { AppGlobalStyle } from "../style/App.style";
import About from "./About";
import Footer from "./Footer";
import MyHeader from "./MyHeader";
import Country from "./Country";
import Services from "./Services";
import Packages from "./Packages";
import Home from "./Home";
import Test from "./Test";
/**
 * main component for the application
 * @returns
 *
 */
import jsonData from "./../data/lang.json";
import { useMediaQuery } from "react-responsive";
import { useStore } from "@nanostores/react";
import { headerStore, setIsBurgerMennuVisible } from "../store/header.store";
export const myDataLang: any = jsonData;
export const interval = myDataLang["carouselInterval"];

export default function App() {

  const { lang, isBurgerMennuVisible } = useStore(headerStore);
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  setIsBurgerMennuVisible(!isNotMobile);
 
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
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
