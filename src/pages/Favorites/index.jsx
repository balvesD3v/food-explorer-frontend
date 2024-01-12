import { Container, MainContainer, MyFavorited } from "./styles.js";
import Header from "../../components/Header";
import DishFavorited from "../../components/DishFavorited/index.jsx";
import Detailfooter from "../../components/Detailfooter/index.jsx";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

function Payment() {
  return (
    <Container>
      <Header />
      <MainContainer>
        <MyFavorited>
          <h2>Meu Pedido</h2>

          <div className="my-dishes-favorited">
            <DishFavorited />
            <DishFavorited />
            <DishFavorited />
          </div>
        </MyFavorited>
      </MainContainer>
      <Detailfooter />
    </Container>
  );
}

export default Payment;
