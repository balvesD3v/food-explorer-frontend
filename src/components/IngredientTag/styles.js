import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.white.light_600};
  color: ${({ theme }) => theme.COLORS.white.light_600};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.white.light_600}` : "none"};
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.white.light_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.white.light_500};
  }

  > input {
    height: 32px;
    width: 7.375em;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.white.light_100};
    background: transparent;
    border: none;
    outline: none;
    text-align: center;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.white.light_600};
    }
  }
`;
