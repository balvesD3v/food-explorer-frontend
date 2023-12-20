import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5em;
  }

  .input-container {
    position: relative;
    width: 100%;

    &:before {
      content: "R$";
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      color: #fff;
    }
  }

  input {
    height: 48px;
    padding: 12px 14px 12px 40px; /* Adicionando espaço à esquerda para acomodar "R$" */
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.dark.dark_800};
    color: #fff;
    outline: none;
    transition: 250ms ease-in-out;
    border: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 100%;
    }

    &:focus-within {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tints.cake_100};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
