import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 105px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  .historic {
    color: var(--Light-Light-300, #e1e1e6);

    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  main {
    padding: 4em 10em;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #192227;
    padding: 8px;
    text-align: left;
  }

  th {
    color: var(--Light-Light-300, #e1e1e6);
    /* Roboto/Smaller bold */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
    padding: 21px 24px;
  }

  td {
    color: var(--Light-Light-400, #c4c4cc);

    /* Roboto/Smaller regular */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    padding: 21px 24px;
  }

  img {
    margin-right: 2em;
  }

  .status {
    width: 15em;
  }

  .date {
    width: 11em;
  }

  .code {
    width: 15em;
  }

  .status-cell {
    display: flex;
    align-items: center;
  }

  .status-image {
    margin-right: 8px;
  }

  .select-container {
    width: 200px; /* Ajuste a largura conforme necessário */
  }
`;
