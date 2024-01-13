import styled from "styled-components";

export const Container = styled.div`
  margin: 2em 0 3em 0;
  display: flex;
  align-items: center;
  gap: 1em;
  img {
    width: 100px;
    height: 100px;
  }

  .dish-info {
    display: flex;
    align-items: center;
    gap: 1em;

    h3 {
      color: var(--Light-Light-300, #e1e1e6);
      /* Poppins/200-medium */
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 32px */
    }

    p {
      color: var(--Light-Light-400, #c4c4cc);

      /* Roboto/Smallest regular */
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
    }
  }

  .dish {
    color: var(--Tints-Tomato-400, #ab4d55);
    /* Roboto/Smallest regular */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */

    p {
      cursor: pointer;
    }
  }
`;
