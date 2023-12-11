import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.COLORS.tints.tomato_100};
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  border: none;

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

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    background-color: transparent;
    padding: 0;

    .receipt {
      position: relative;
      width: 15px;
      height: 15px;
    }

    .text {
      color: transparent;
      display: none;
    }

    .order {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 15px;
      right: 25px;
      position: absolute;
      border-radius: 50%;
      font-size: 1rem;
      height: 15px;
      width: 15px;
      background-color: ${({ theme }) => theme.COLORS.tints.tomato_100};
      &:before,
      &:after {
        content: none;
      }
    }
  }
`;
