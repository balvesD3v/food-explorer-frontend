import { Container, MainContainer, MyFavorited } from "./styles.js";
import Header from "../../components/Header";
import DishFavorited from "../../components/DishFavorited/index.jsx";
import DetailFooter from "../../components/DetailFooter";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import { useDish } from "../../hooks/dish.jsx";

function Favorites() {
  const { favoritedDishes } = useDish();

  return (
    <Container>
      <Header />
      <MainContainer>
        <MyFavorited>
          <h2>Meus Favoritos</h2>

          <div className="my-dishes-favorited">
            {favoritedDishes.map((dish) => (
              <DishFavorited
                key={dish.id}
                id={dish.id}
                image={`http://localhost:3000/files/${dish.image}`}
                name={dish.name}
              />
            ))}
          </div>
        </MyFavorited>
      </MainContainer>
      <DetailFooter />
    </Container>
  );
}

export default Favorites;
