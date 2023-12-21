import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const StyledBurgerBar = styled.div`
  display: none;
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: block;
    position: relative;
    margin-left: 2em;

    .menu-toggle {
      color: #fff;
      cursor: pointer;
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
      width: 250px; /* Ajuste conforme necessário */
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

      p {
        color: var(--Light-Light-300, #e1e1e6);
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: 140%; /* 33.6px */
        margin-bottom: 1em;

        border-bottom: #192227 1px solid;
      }
    }
  }
`;
