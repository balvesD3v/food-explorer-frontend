import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 50%;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 100%;
  }

  span {
    color: ${({ theme }) => theme.COLORS.white.light_400};
    margin-bottom: 0.5em;

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  label {
    display: flex;
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.COLORS.dark.dark_800};
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    gap: 0.5em;
    height: 48px;

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */

    svg {
      width: 24px;
      height: 24px;
    }
  }

  input {
    display: none;
    background-color: ${({ theme }) => theme.COLORS.dark.dark_800};
    padding: 0.75em;

    color: ${({ theme }) => theme.COLORS.white.light_100};
    text-align: center;

    /* Poppins/100-medium */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;
