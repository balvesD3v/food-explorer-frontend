import styled from "styled-components";

export const DivStyled = styled.div`
  flex-direction: column;
  display: flex;
  gap: 8px;

  label {
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.white.light_400};
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.dark.dark_900};
    border: none;
    border-radius: 8px;
    width: 348px;
    height: 48px;
    padding: 12px 14px;

    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;
