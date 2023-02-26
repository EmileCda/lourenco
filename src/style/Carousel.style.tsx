/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for header
 *
 */

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${AppTheme.mainColor.backGround};
  min-width: 100vw;
  height: 30vh;
  max-height: 30vh;
  padding: 10px;
  img {
    /* width: 10vw; */
    /* height: 25vh; */
    /* max-width: 200px; */
    max-height: 28vh;
    max-width: 98vw;
  }
  transition: all 1s;
`;
