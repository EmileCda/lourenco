/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for header
 *
 */

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed red;
  min-width: 100vw;
`;

export const HeaderUpper = styled.div`
  min-width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const HeaderLower = styled.div`
  min-width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
`;

export const Logo = styled.div`
  font-family: ${AppTheme.font.Logo};
  color: ${AppTheme.mainColor.forground};
  font-size: 4rem;
  transform: rotate(-10deg);

`;
export const LanguageBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 10vw;
    height: 10vh;
    max-width: 30px;
    max-height: 30px;
  }
`;
export const NavBar = styled.div`
  
  font-family: ${AppTheme.font.regular};
  font-size: .8rem;
  /* display: none; */
  display : ${props => (props.isVisible ? `none` : "flex")};
  
  li a {
    cursor: pointer;
    margin: 0px 4px;
    text-decoration: none;
    color: ${AppTheme.mainColor.forground};
  }
  li a:hover {
    color: ${AppTheme.minorColor.forground};
    font-weight: bold;
  }
  
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
  }
`;
export const BurgerMenu = styled.div`
  color: ${AppTheme.mainColor.forground};
  font-size: 2rem;
  cursor: pointer;
  display : ${props => (props.isVisible ?  "flex" : `none` )};
`;

export const Img = styled.img`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;