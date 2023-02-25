import fr from "./../image/fr.png"
import pr from "./../image/pr.png"
import en from "./../image/en.png"
import {
  BurgerMenu,
  HeaderContainer,
  HeaderLower,
  HeaderUpper,
  LanguageBar,
  Logo,
  NavBar,
} from "../style/MyHeader.style";

export default function MyHeader() {
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
            <li>Home</li>
            <li>Country</li>
            <li>Service</li>
            <li>Package</li>
            <li>About</li>
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
