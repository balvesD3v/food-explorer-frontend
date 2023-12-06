import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 100%;

  label {
    color: ${({ theme }) => theme.COLORS.white.light_400};
    margin-bottom: 0.5em;

    /* Roboto/Small regular */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  select {
    color: #fff;
    display: flex;
    height: 48px;
    padding: 16px;
    align-items: center;
    gap: 14px;
    align-self: stretch;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.dark.dark_800};
    outline: none;
    transition: 250ms ease-in-out;
    border: none;

    &:focus-within {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tints.cake_100};
    }
  }
`;
