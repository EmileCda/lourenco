import styled from "styled-components";
import { AppTheme } from "./App.style";

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${AppTheme.mainColor.backGround};
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.mainColor.forground};
  }
`;

export const CPackage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin: 2px 0px;
  border: 1px solid ${AppTheme.mainColor.forground};
  border-radius: 10px;
  padding: 5px 25px;
`;

export const Title = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  font-family: ${AppTheme.font.extra};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid white;
`;
export const Description = styled.div`
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
  max-width: 30rem;

  img {
    max-width: 300px;
    border-radius: 10px;
  }
`;
export const Price = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  font-family: ${AppTheme.font.regular};
  font-size: 1rem;
  padding: 20px;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
`;
