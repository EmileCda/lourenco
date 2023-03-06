import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #78290f;
  min-height: 3rem;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #006400;
  min-height: 5rem;
  flex-grow: 1;
`;

export const BoxHead= styled.div`
  background-color : #76c893;
  min-height : 3rem;
  min-width : 3rem;
  font-size: 3rem;
  
`;
export const BoxFootRight= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color : #76c893;
  min-height : 5rem;
  border: 1px dashed red;
  flex-grow: 1;
`;

export const BoxFootLeft= styled.div`
  background-color : #76c893;
  flex-grow: 2;
`;





export const Main = styled.main`
  background-color : #355070;

  /* flex-grow: 2; */
`;



export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #bfc0c0;
`;


export const Rectangle = styled.div`
  background-color : #ffc8dd;
  min-height : 3rem;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem;
`;


export const SubBox = styled.div`
  background-color: #8d99ae;
  min-height: 3rem;
  margin: 0.5rem;
`;

export const Sticker = styled.div`
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  background-color: #a19767;
  min-height: 2rem;
  min-width: 2rem;
`;



@media screen and 