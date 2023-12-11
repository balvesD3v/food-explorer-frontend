import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
  height: 100%;
  padding: 0 10em;
  background-color: red;

  h2 {
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.white.light_300};
    margin-bottom: 1.5em;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 0 1em;
  }
`;

export const BannerStyled = styled.div`
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin-top: 10em;
  height: 100%;
  display: flex;
  width: 100%;
  background: var(
    --gradients-200,
    linear-gradient(180deg, #091e26 0%, #00131c 100%)
  );
  margin-bottom: 4em;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    margin-top: 2em;
  }
`;

export const Cookies = styled.div`
  margin-top: -9em;
  width: 100%;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    margin-top: 0;
    img {
      width: 150px;
    }
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  h1 {
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.white.light_300};
  }

  span {
    color: ${({ theme }) => theme.COLORS.white.light_300};
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    h1 {
      font-size: 1rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const DivPlates = styled.div`
  display: flex;
  height: 33em;
  padding: 2em;
  justify-content: center;
  width: 25em;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    height: 25em;
    width: 15em;
    padding: 0;
  }
`;

export const DishesSection = styled.section`
  padding: 0;
  h2 {
    margin-bottom: 0em;
    font-size: 1.5rem;
  }
`;
