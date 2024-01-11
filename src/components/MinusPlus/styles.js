import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  align-items: start;
  margin-right: 1em;

  .button-minusorplus {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .minusOrPlus {
    background-color: transparent;
    cursor: pointer;
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
`;

export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
