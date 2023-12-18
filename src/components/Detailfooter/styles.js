import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.dark.dark_600};
  height: 5em;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  span {
    color: ${({ theme }) => theme.COLORS.white.light_700};

    /* Roboto/Bigger bold */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    svg {
      width: 15px;
    }

    span {
      font-size: 1rem;
    }
  }
`;
export const RightContainer = styled.div`
  span {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    span {
      font-size: 0.8rem;
    }
  }
`;
