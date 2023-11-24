import styled from "styled-components";

export const MainDiv = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.COLORS.white.light_100};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 28em;
`;
