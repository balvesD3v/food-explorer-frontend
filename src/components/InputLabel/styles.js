import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
  flex-direction: column;
  display: flex;
  gap: 8px;

  label {
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.white.light_400};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 348px;
  height: 48px;
  align-items: center;
  gap: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.dark.dark_900};
  position: relative;
  transition: 250ms ease-in-out;

  &:focus-within {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tints.cake_100};

    svg {
      color: ${({ theme }) => theme.COLORS.tints.cake_100};
      transition: 250ms ease-in-out;
    }
  }

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border-radius: 8px;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    outline: none;
    color: #fff;
  }

  svg {
    position: absolute;
    left: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 258px;
  }
`;
