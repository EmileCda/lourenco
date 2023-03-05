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

export type NavBarProps = {
  isVisible : boolean;
}


export const NavBar= styled.div`
  font-family: ${AppTheme.font.regular};
  font-size: 0.8rem;

  display: ${(props) => (props.isVisible ? `none` : "flex")};

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
export const NavBarBurger = styled.div`
  font-family: ${AppTheme.font.regular};
  background-color: ${AppTheme.mainColor.mid};
  font-size: 1.5rem;
  position: fixed;
  right: 0px;
  top : 130px;
  display: flex;
  border-radius: 10px 0px 0px 10px ;
  display: ${(props) => (props.isVisible ? "flex" : `none`)};
  transform: ${(props) => (props.isClicked ?  "translateX(0%)" :  "translateX(100%)")};
  transition: all 0.5s ease-out;

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
    flex-direction: column;
    list-style-type: none;
    padding: 0;
  }
`;

export const BurgerMenu = styled.div`
  color: ${AppTheme.mainColor.forground};
  font-size: 2rem;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? "flex" : `none`)};
`;

export const Img = styled.img`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;
