import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: var(--Tints-Tomato-400, #ab4d55);

  /* Roboto/Smallest regular */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */

  border: none;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
`;

export const Container = styled.div`
  margin: 2em 5em 3em 0;
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
  }

  .dish {
    display: flex;
    flex-direction: column;
    color: var(--Tints-Tomato-400, #ab4d55);
    /* Roboto/Smallest regular */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
  }
`;
