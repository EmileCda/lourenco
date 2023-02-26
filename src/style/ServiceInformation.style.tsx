import styled from "styled-components";
import { AppGlobalStyle, AppTheme } from "./App.style";

export const ServiceInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  background-color: ${AppTheme.minorColor.backGround};
  
  min-width: 100vw;
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.mainColor.forground};
  }
`;

export const Title = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  min-width: 100vw;
  border: 1px dashed red;
    font-family: ${AppTheme.font.extra};
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    color: ${AppTheme.mainColor.forground};
    a{
    text-decoration: none;
  }
`;
export const Prelude = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  font-family: ${AppTheme.font.regular};
  font-size: 1rem;
  padding: 10px 30px;
  text-align: justify;
`;
export const Image = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
display: flex;
justify-content: center;

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
`;
