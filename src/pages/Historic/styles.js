import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 2em 10em;
  background-color: red;

  span {
    color: var(--Light-Light-300, #e1e1e6);

    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  table {
    th {
      background-color: blue;
      padding: 0 2em;

      span {
        text-align: left;
      }
    }

    .detail {
      padding: 0 10em;
    }
  }
`;
