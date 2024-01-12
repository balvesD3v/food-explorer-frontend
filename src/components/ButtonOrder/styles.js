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
    }
    &:after {
      content: ")";
    }
  }
`;
