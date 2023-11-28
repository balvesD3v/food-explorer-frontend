import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.dark.dark_600};
  height: 5em;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  span {
    color: ${({ theme }) => theme.COLORS.white.light_700};

    /* Roboto/Bigger bold */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const RightContainer = styled.div`
  span {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
`;
