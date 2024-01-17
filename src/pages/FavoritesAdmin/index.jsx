import { Container, MainContainer, MyFavorited } from "./styles.js";
import HeaderAdmin from "../../components/HeaderAdmin";
import DishFavorited from "../../components/DishFavorited/index.jsx";
import DetailFooter from "../../components/DetailFooter";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

function FavoritesAdmin() {
  return (
    <Container>
      <HeaderAdmin />
      <MainContainer>
        <MyFavorited>
          <h2>Meu Pedido</h2>

          <div className="my-dishes-favorited">
            <DishFavorited />
          </div>
        </MyFavorited>
      </MainContainer>
      <DetailFooter />
    </Container>
  );
}

export default FavoritesAdmin;
