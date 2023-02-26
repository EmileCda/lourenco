import styled from "styled-components";
import { AppTheme } from "./App.style";

export const ContactContainer= styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${AppTheme.mainColor.backGround};
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
export const Input = styled.input`
  background-color: ${AppTheme.minorColor.backGround};
`;

export const InputContainer = styled.div`
  background-color: ${AppTheme.minorColor.backGround};
  display: flex;
  justify-content:flex-end
`;

InputContainer