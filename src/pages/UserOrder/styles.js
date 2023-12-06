import styled from "styled-components";

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2em 7.625em;
  height: calc(100vh - 10.8em);

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
  }
`;

export const IngredientsStyled = styled.div`
  display: flex;
  gap: 0.75em;
`;

export const BuyDish = styled.div`
  width: 100%;
  display: flex;
`;
