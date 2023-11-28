import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: ${({ theme }) => theme.COLORS.dark.dark_300};
  border-radius: 8px;
  height: 29em;
  width: 19em;
  margin-bottom: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  position: relative;
  gap: 0.9375em;

  img {
    width: 11em;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9375em;

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.white.light_300};

    svg {
      width: 10px;
      height: 15px;
    }
  }

  p {
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.white.light_400};
  }

  span {
    color: ${({ theme }) => theme.COLORS.tints.cake_200};
    text-align: center;

    /* Roboto/Biggest regular */
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 51.2px */
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 1em;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  gap: 0.875em;
  align-items: center;
  color: #fff;

  button {
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
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
