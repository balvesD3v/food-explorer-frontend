import styled from "styled-components";

export const DivStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 10em;

  h2 {
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.white.light_300};
    margin-bottom: 1.5em;
  }
`;

export const BannerStyled = styled.div`
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin-top: 10em;
  height: 16.25em;
  display: flex;
  width: 100%;
  background: var(
    --gradients-200,
    linear-gradient(180deg, #091e26 0%, #00131c 100%)
  );
  margin-bottom: 4em;
`;

export const Cookies = styled.div`
  margin-top: -9em;
`;

export const ContentDiv = styled.div`
  h1 {
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.white.light_300};
  }

  span {
    color: ${({ theme }) => theme.COLORS.white.light_300};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const DivPlates = styled.div`
  display: flex;
  gap: 1.6875em;
  height: 33em;
`;
