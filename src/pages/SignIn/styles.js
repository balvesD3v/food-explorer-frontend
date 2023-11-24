import styled from "styled-components";

export const MainDiv = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.COLORS.white.light_100};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 28em;
`;

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.COLORS.dark.dark_700};
  padding: 64px;
  display: flex;

  flex-direction: column;
  border-radius: 16px;

  h2 {
    text-align: center;
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 32px;
  }
`;

export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
