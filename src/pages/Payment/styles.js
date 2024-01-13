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
`;

export const MyOrder = styled.div`
  width: 50%;
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
  width: 50%;
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
  .finish-payment {
    width: 100%;
  }

  .payment {
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
  }

  .pix.selected {
    background: #0d1d25;
  }

  .credit.selected {
    background: #0d1d25;
  }

  .pix {
    display: flex;
    height: 81px;
    padding: 12px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    cursor: pointer;

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
    cursor: pointer;

    border-radius: 0px 8px 0px 0px;
    border-top: 1px solid var(--Light-Light-600, #76797b);
    border-right: 1px solid var(--Light-Light-600, #76797b);
    border-left: 1px solid var(--Light-Light-600, #76797b);
    background: var(--Dark-Dark-500, #0d161b);

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4em 10em;
    border-radius: 0px 0px 8px 8px;
    border: 1px solid var(--Light-Light-600, #76797b);
  }
`;

export const PaymentForm = styled.form`
  .validity-cvc {
    display: flex;
    margin-bottom: 2em;
    gap: 1em;
  }

  .numero-cartao {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    label {
      color: var(--Light-Light-400, #c4c4cc);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }

    input {
      display: flex;
      width: 100%;
      height: 48px;
      padding: 12px 14px;
      justify-content: center;
      align-items: center;
      gap: 14px;
      background-color: #000a0f;
      border-radius: 8px;
      border: 2px solid var(--Light-Light-100, #fff);
      color: #fff;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .validity {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    label {
      color: var(--Light-Light-400, #c4c4cc);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }

    input {
      display: flex;
      width: 100%;
      height: 48px;
      padding: 12px 14px;
      justify-content: center;
      align-items: center;
      gap: 14px;
      background-color: #000a0f;
      border-radius: 8px;
      border: 2px solid var(--Light-Light-100, #fff);
      color: #fff;
    }
  }

  .cvc {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    label {
      color: var(--Light-Light-400, #c4c4cc);

      /* Roboto/Small regular */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
    }

    input {
      display: flex;
      width: 100%;
      height: 48px;
      padding: 12px 14px;
      justify-content: center;
      align-items: center;
      gap: 14px;
      background-color: #000a0f;
      border-radius: 8px;
      border: 2px solid var(--Light-Light-100, #fff);
      color: #fff;
    }
  }
`;
