import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: ${({ theme }) => theme.COLORS.dark.dark_1000};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 5em;
  border-radius: 5px;
  height: 2em;

  color: ${({ theme }) => theme.COLORS.white.light_100};
  text-align: center;

  /* Poppins/100-medium */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
`;
