import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
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

    .button-save {
      display: flex;
      justify-content: end;
      margin-top: 1em;
      gap: 1em;
    }

    .linkto {
      margin-bottom: 1em;
      margin-top: -0.5em;
      color: var(--Light-Light-300, #e1e1e6);
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 33.6px */
      z-index: 99;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.white.light_300};
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      text-decoration: none;
      margin-bottom: 0.5em;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.white.light_300};
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 0.5em;
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  gap: 2em;

  .price {
    color: ${({ theme }) => theme.COLORS.white.light_400};

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;

export const IngredientsField = styled.div`
  width: 100%;
  span {
    color: ${({ theme }) => theme.COLORS.white.light_400};

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  .tags {
    margin-top: 0.5em;
    background: ${({ theme }) => theme.COLORS.dark.dark_800};
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    padding: 0.5em 0.5em;
    border-radius: 8px;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--light-light-400, #c4c4cc);
    margin: 0.5em;

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  textarea {
    resize: none;
    height: 200px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.dark.dark_800};
    outline: none;
    transition: 250ms ease-in-out;
    border: none;
    padding: 14px;
    color: #fff;

    &::placeholder {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }

    &:focus-within {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tints.cake_100};
    }
  }
`;
