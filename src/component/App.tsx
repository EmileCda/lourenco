import { StrictMode, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import About from "./About";
import Accueil from "./Accueil";
import MyHeader from "./MyHeader";
/**
 * main component for the application
 * @returns
 *
 */

export default function App() {

  const [isHide, setDisplayState] = useState<boolean>(true)

function ToggleDisplayMode() {
  setDisplayState(!isHide);

}

  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
        
        <MyHeader />
          <Routes>
            <Route path="/" element={<Accueil />} />



            <Route path="/about" element={<About />} />
          </Routes>

      </BrowserRouter>
    </StrictMode>
  );
}
