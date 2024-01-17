import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const StyledBurgerBar = styled.div`
  display: none;
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: block;
    position: relative;

    .menu-toggle {
      color: #fff;
      cursor: pointer;
      margin-right: 2em;
      svg {
        width: 1em;
        height: 3em;
      }
    }

    .menu-overlay {
      display: ${(props) => (props.showMenu ? "block" : "none")};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
      z-index: 99; /* Sobreposto ao conteúdo principal */
    }

    .menu-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 100%;
      color: #fff;
      background-color: ${({ theme }) => theme.COLORS.dark.dark_400};
      z-index: 100; /* Sobreposto ao overlay */
      transform: translateX(${(props) => (props.showMenu ? "0" : "-100%")});
      transition: transform 0.3s ease;
    }

    .menu-header {
      padding: 3em 0 2em 1em;
      background-color: ${({ theme }) => theme.COLORS.dark.dark_700};
      display: flex;
      align-items: center;
      gap: 1em;

      span {
        color: var(--Light-Light-100, #fff);
        font-family: Roboto;
        font-size: 21.163px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .menu-inside-content {
      padding: 2em 1em;

      .menu-link {
        display: flex;
        flex-direction: column;
      }

      a {
        color: var(--Light-Light-300, #e1e1e6);
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: 140%; /* 33.6px */
        margin-bottom: 1em;
        text-decoration: none;

        border-bottom: #192227 1px solid;
      }
    }
  }
`;

export const SearchBar = styled.div`
  gap: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  input {
    border-radius: 5px;
    text-align: center;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.dark.dark_900};
    width: 100%;
    padding: 12px 14px;
    color: #fff;
    position: relative;
    transition: 250ms ease-in-out;
    outline: none;

    &:focus-within {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tints.cake_100};
    }
  }

  span {
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.white.light_500};
  }
`;
