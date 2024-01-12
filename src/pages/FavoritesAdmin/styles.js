import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 105px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const MainContainer = styled.div`
  padding: 3em 10em;
  display: flex;
  gap: 30%;
`;

export const MyFavorited = styled.div`
  h2 {
    color: var(--Light-Light-300, #e1e1e6);
    /* Poppins/400-medium */
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  .my-dishes-favorited {
    display: flex;
    gap: 5em;
    flex-wrap: wrap;
  }
`;
