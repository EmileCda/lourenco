import styled from "styled-components";
import { AppTheme } from "./App.style";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 20px;
  background-color: ${AppTheme.minorColor.backGround};
  
  min-width: 90vw;
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.mainColor.forground};
  }
`;

export const Zervices = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  padding: 0px 20px;
  background-color: ${AppTheme.minorColor.backGround};
  /* border  : 1px dashed blue ; */
  min-width: 100px;
  max-width: 30rem;
`;


export const Title = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  min-width: 100vw;
    font-family: ${AppTheme.font.extra};
    font-weight: 300;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    min-width: 100px;
  max-width: 30rem;
`;
export const Prelude = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  font-family: ${AppTheme.font.regular};
  font-size: 1rem;
  padding: 10px 30px;
  text-align: justify;
  min-width: 100px;
  max-width: 30rem;
`;
export const Image = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
display: flex;
justify-content: center;
min-width: 100px;
  max-width: 30rem;

img{
/* width: 10vh; */
  max-width: 300px;
  border-radius: 10px;
}
`;
export const Epilog = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  font-family: ${AppTheme.font.regular};
  font-size: 1rem;
  padding: 20px;
  text-align: justify;
  min-width: 100px;
  max-width: 30rem;
`;
