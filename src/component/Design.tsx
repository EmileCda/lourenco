import { ReactNode } from "react";
import { Circle, Main, Rectangle, Sticker, SubBox } from "../style/design.style";
import {
  BoxFootLeft,
  BoxHead,
  Footer,
  Header,
} from "../style/design.style";

export default function Design() {
  return (
    <>
      <Header>
        <Circle />
        <BoxHead ><i className="fa-solid fa-compass"></i></BoxHead>
      </Header>
      <Main>
        <Rectangle />
        <Rectangle />
        <Rectangle>
          <SubBox />
          <SubBox />
          <SubBox />
          <Sticker />
        </Rectangle>
      </Main>

      <Footer>
        <BoxFootLeft />
        
          <Circle />
        
      </Footer>
    </>
  );
}
