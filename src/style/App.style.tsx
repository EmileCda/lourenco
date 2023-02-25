/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
/**
 * color theme from coolor.co
 * for the whole application
 */
export const AppTheme = {
  mainColor: {
    backGround: "#252323",
    lessBack: "#70798c",
    mid : "#a99985",
    lessFor: "#dad2bc",
    forground: "#f5f1ed",
  },
  minorColor: {
    backGround: "#8f2d56",
    lessBack: "#d81159",
    mid: "#73d2de",
    lessFor: "#218380",
    forground: "#ffbc42",
  },
  font: {
    regular: "Poppins, sans-serif",
    extra: "Poppins, sans-serif",
    Logo: "Bilbo Swash Caps, cursive",
  },
  BorderRadius: "0.6rem",
};


export const App = styled.div`
background-color: ${AppTheme.mainColor.backGround};
display  : flex;
justify-content: flex-start;
flex-direction: column;
  text-align: center;
  align-items: center;
`;

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${AppTheme.mainColor.backGround}
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 18px;
  }
  * {
    box-sizing: border-box;
  }
  .hide{
    display: none;
  }
`;



