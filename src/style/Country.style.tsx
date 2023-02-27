import styled from "styled-components";
import { AppTheme } from "./App.style";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${AppTheme.mainColor.backGround};
`;

export const Description = styled.div`
  text-align: justify;
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  padding: 20px;
`;
export const AboutMozambiqueContainer = styled.div`
  background-color: ${AppTheme.minorColor.backGround};
`;

export const Gastronomy = styled.div`
  background-color: ${AppTheme.minorColor.backGround};
`;

export const NaturalResource = styled.div`
  background-color: ${AppTheme.minorColor.backGround};
`;

export const Tourisme = styled.div`
  background-color: ${AppTheme.minorColor.backGround};
`;
export const Title = styled.div`
  background-color: ${AppTheme.mainColor.backGround};
  color: ${AppTheme.mainColor.forground};
  font-size: 24px;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid ${AppTheme.mainColor.forground};
  border-top: 1px solid ${AppTheme.minorColor.forground};
`;

export const Img = styled.img`
  min-width: auto;
  max-width: 100vw;
`;
