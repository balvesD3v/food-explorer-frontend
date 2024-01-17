import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const ButtonStyled = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.tints.tomato_100};
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  border: none;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: 100ms linear;

  .text {
    color: var(--Light-Light-100, #fff);
    text-align: center;
    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.tints.tomato_300};
  }

  .order {
    &:before {
      content: "(";
      @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        display: none;
      }
    }
    &:after {
      content: ")";
      @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        display: none;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 0;
    background-color: transparent;
    .text {
      display: none;
    }
    .order {
      position: absolute;
      background-color: #750310;
      border-radius: 100%;
      left: 80%;
      top: 1%;
      padding: 1px 6px;
    }

    .receipt {
      width: 1.9rem;
      position: relative;
    }
  }
`;
