import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 7.625em;
  height: calc(100vh - 27vh);
  margin-top: 5em;

  a {
    color: ${({ theme }) => theme.COLORS.white.light_300};
    display: flex;
    align-items: center;
    margin-bottom: 2em;

    /* Poppins/300-bold */
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    text-decoration: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 1em;
    margin-top: 10em;
    height: calc(100vh - 29vh);

    .linkto {
      margin-left: 2em;
      margin-bottom: -5em;
      margin-top: -5em;
      font-size: 1rem;
    }
  }
`;

export const ContentStyled = styled.div`
  display: flex;
  gap: 5em;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    align-items: center;
    flex-direction: column;
  }

  .imagePhoto {
    img {
      width: 25em;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      margin-top: 10em;
      img {
        width: 15em;
      }
    }
  }

  .InfoContent {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      align-items: center;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.white.light_300};

      /* Poppins/500-medium */
      font-family: Poppins;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 56px */

      @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        text-align: center;
        font-size: 2rem;
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.white.light_300};

      /* Poppins/300-regular */
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 33.6px */

      @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        text-align: center;
        font-size: 1rem;
      }
    }

    .buyDish {
      display: flex;
      gap: 1em;
      align-items: center;
      width: 18em;

      .minusOrPlus {
        background-color: transparent;
      }

      button {
        border: none;
        color: ${({ theme }) => theme.COLORS.white.light_300};
      }

      span {
        color: ${({ theme }) => theme.COLORS.white.light_300};
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }
`;

export const IngredientsStyled = styled.div`
  display: flex;
  gap: 0.75em;
`;
