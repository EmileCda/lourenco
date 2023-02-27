import fr from "./../image/fr.png";
import pr from "./../image/pr.png";
import en from "./../image/en.png";
import {
  BurgerMenu,
  HeaderContainer,
  HeaderLower,
  HeaderUpper,
  Img,
  LanguageBarContainer,
  Logo,
  NavBar,
  NavBarBurger,
} from "../style/MyHeader.style";
import jsonData from "./../data/lang.json";
import { useStore } from "@nanostores/react";
import { headerStore, setLang, toggleIsVisible } from "../store/header.store";
import { Link } from "react-router-dom";
import { JsonLink, Lang, LangDesc } from "../type/App.type";
export const myDataLang: any = jsonData;

type flagLangProps = {
  className: string;
  lang: Lang;
  onClick: (lang: Lang) => void;
};

export function LanguageBar() {
  const langList = myDataLang.language;
  const { lang } = useStore(headerStore);
  let src: string = pr;
  switch (lang) {
    case "fr":
      src = fr; 
      break;
    case "pr":
      src = pr;
      break;
    case "en":
      src = en;
      break;
    default:
      src = pr;
      break;
  }
  return (
    <>
    <LanguageBarContainer>
      {langList.map((item: LangDesc, index: number) => (
        <Img key={index}
          className={lang === item.id ? "hide" : ""}
          src={item.id === "pr" ? pr : item.id === "fr" ? fr : en}
          alt={item.desc}
          onClick={() => setLang(item.id)}
        />
      ))}
            </LanguageBarContainer>
    </>
  );
}


export default function MyHeader() {
  const myNavBar = myDataLang["navBar"];
  const { lang, isBurgerMennuVisible,isVisible } = useStore(headerStore);
  return (
    <>
      <HeaderContainer>
        <HeaderUpper>
          <Logo>Caracole</Logo>
          <LanguageBar />
        </HeaderUpper>
        <HeaderLower>
          <NavBar isVisible={isBurgerMennuVisible}>
            <ul>
              {myNavBar.map((item: JsonLink, index: number) => (
                <li key={index}>
                  <Link  to={item.link}>
                    {item[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </NavBar>
          <BurgerMenu isVisible={isBurgerMennuVisible} onClick={toggleIsVisible}>
            <i className="fa-solid fa-bars"></i>
          </BurgerMenu>
          <NavBarBurger isVisible={isBurgerMennuVisible} isClicked={isVisible}>
            <ul>
              {myNavBar.map((item: JsonLink, index: number) => (
                <li key={index}>
                  <Link  to={item.link} onClick={toggleIsVisible}>
                    {item[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </NavBarBurger>
        </HeaderLower>
      </HeaderContainer>
    </>
  );
}
