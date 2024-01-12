import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivContent = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 100px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  main {
    padding: 3em 10em;

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
  }
`;

export const ContentStyled = styled.div`
  display: flex;
  gap: 5em;

  .imagePhoto {
    img {
      width: 25em;
    }
  }

  .InfoContent {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    h1 {
      color: ${({ theme }) => theme.COLORS.white.light_300};

      /* Poppins/500-medium */
      font-family: Poppins;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 56px */
    }

    p {
      color: ${({ theme }) => theme.COLORS.white.light_300};

      /* Poppins/300-regular */
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 33.6px */
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
  flex-wrap: wrap;
`;
