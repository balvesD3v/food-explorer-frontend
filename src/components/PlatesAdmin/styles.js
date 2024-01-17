import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
  background-color: ${({ theme }) => theme.COLORS.dark.dark_300};
  border-radius: 8px;
  height: 29em;
  width: 21em;
  margin-top: 1em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  position: relative;
  gap: 0.9375em;

  img {
    width: 10em;
    margin-top: 3em;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      transition: all 0.1s;
      transform: scale(1.2);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    height: 25em;
    width: 15em;
    img {
      width: 7em;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375em;

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.white.light_300};

    svg {
      width: 10px;
      height: 15px;
    }
  }

  p {
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.white.light_400};
  }

  span {
    color: ${({ theme }) => theme.COLORS.tints.cake_200};
    text-align: center;

    /* Roboto/Biggest regular */
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 51.2px */
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    h3 {
      font-size: 1rem;
    }

    p {
      display: none;
    }

    span {
      font-size: 2rem;
    }
  }
`;

export const EditButton = styled(Link)`
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    top: 20px;
    right: 20px;
    svg {
      width: 20px;
    }
  }
`;
