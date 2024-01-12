import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 100px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const MainContainer = styled.div`
  padding: 3em 10em;
  display: flex;
  gap: 30%;
`;

export const MyOrder = styled.div`
  h2 {
    color: var(--Light-Light-300, #e1e1e6);
    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  .total {
    color: var(--Light-Light-300, #e1e1e6);

    /* Poppins/200-medium */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  }
`;

export const MyPayment = styled.div`
  h2 {
    color: var(--Light-Light-300, #e1e1e6);
    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }
`;

export const CheckPayment = styled.div`
  .payment {
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
  }

  .pix {
    display: flex;
    height: 81px;
    padding: 12px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;

    border-radius: 8px 0px 0px 0px;
    border-top: 1px solid var(--Light-Light-600, #76797b);
    border-left: 1px solid var(--Light-Light-600, #76797b);
    background: var(--Dark-Dark-800, #0d161b);

    span {
      color: var(--Light-Light-100, #fff);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }
  }

  .credit {
    display: flex;
    height: 81px;
    padding: 12px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;

    border-radius: 0px 8px 0px 0px;
    border-top: 1px solid var(--Light-Light-600, #76797b);
    border-right: 1px solid var(--Light-Light-600, #76797b);
    border-left: 1px solid var(--Light-Light-600, #76797b);
    background: var(--Dark-Dark-500, #000c12);

    span {
      color: var(--Light-Light-100, #fff);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }
  }

  .action {
    padding: 4em 10em;
    border-radius: 0px 0px 8px 8px;
    border: 1px solid var(--Light-Light-600, #76797b);
  }
`;
