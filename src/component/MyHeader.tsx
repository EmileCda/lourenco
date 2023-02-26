import fr from "./../image/fr.png";
import pr from "./../image/pr.png";
import en from "./../image/en.png";
import {
  BurgerMenu,
  HeaderContainer,
  HeaderLower,
  HeaderUpper,
  LanguageBar,
  Logo,
  NavBar,
} from "../style/MyHeader.style"
import jsonData from "./../data/lang.json";
import { useStore } from "@nanostores/react";
import { headerStore } from "../store/header.store";
import { Link } from "react-router-dom";
import { JsonLink } from "../type/App.type";
export const myDataLang: any = jsonData;


export default function MyHeader() {
  const myNavBar = myDataLang["navBar"];
  const { lang } = useStore(headerStore);
  return (
    <>
      <HeaderContainer>
        <HeaderUpper>
          <Logo>Existentia</Logo>
          <LanguageBar>
            <img src={fr} alt="" />
            <img src={pr} alt="" />
            {/* <img src={en} alt="" /> */}
          </LanguageBar>
        </HeaderUpper>
        <HeaderLower>
          <NavBar>
            <ul>
            {myNavBar.map((item : JsonLink, index:number)=>
            (
              <li><Link key={index} to={item.link}>
              {item[lang]}
            </Link></li>
            )
            
            
            )}
            </ul>
          </NavBar>
          <BurgerMenu>
            <i className="fa-solid fa-bars"></i>
          </BurgerMenu>
        </HeaderLower>
      </HeaderContainer>
    </>
  );
}
