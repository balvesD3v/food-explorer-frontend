import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.COLORS.dark.dark_600};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 10rem;
  gap: 1em;

  span {
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.white.light_100};
    width: 20rem;
  }

  .signOut {
    background-color: transparent;
    border: none;
    cursor: pointer;
    .arrowRight {
      color: #fff;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 20em;

  .foodexplorer {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 15em;

    .admin {
      color: ${({ theme }) => theme.COLORS.tints.cake_200};
      text-align: end;
      width: 12em;
      /* Roboto/Smallest regular */
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
    }
  }

  img {
    width: 30px;
  }
`;
