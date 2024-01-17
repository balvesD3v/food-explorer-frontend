import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.dark.dark_600};
  justify-content: center;
  align-items: center;
  padding: 1.4rem 10rem;
  gap: 1em;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 1rem 3rem;
    display: flex;
  }

  span {
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.white.light_100};
  }

  .signOut {
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      display: none;
    }

    .arrowRight {
      color: #fff;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Brand = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  text-decoration: none;

  .foodexplorer {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 10em;

    .admin {
      color: ${({ theme }) => theme.COLORS.tints.cake_200};
      text-align: end;
      width: 12em;
      /* Roboto/Smallest regular */
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
    }
  }

  img {
    width: 30px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    img {
      width: 1.5rem;
    }
    a > span {
      font-size: 1.5rem;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  gap: 1.5rem;

  input {
    color: var(--Light-Light-300, #e1e1e6);
    text-align: center;
    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: none;
  }
`;
