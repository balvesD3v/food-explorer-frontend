import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.COLORS.dark.dark_600};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 10rem;
  gap: 1em;

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
    .arrowRight {
      color: #fff;
      width: 25px;
      height: 25px;
    }
  }

  .menu-toggle {
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    gap: 3rem;

    .signOut {
      display: none;
    }

    .menu-toggle {
      display: block;
      background-color: transparent;
      color: #fff;
      border: transparent;
      svg {
        height: 20px;
      }
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
    margin-top: 1em;
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
    .foodexplorer {
      width: 100%;
      flex-direction: row;
      align-items: center;
      margin-top: 0;

      span {
        font-size: 1.5em;
      }

      .food-explorer-title {
        width: 100%;
        margin-right: 2px;
      }

      .admin {
        text-align: start;
        width: 10em;
      }
    }

    img {
      width: 1.5rem;
    }
  }
`;

export const MobileStyled = styled.div`
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: none;
  }
`;
