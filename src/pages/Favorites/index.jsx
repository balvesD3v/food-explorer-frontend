import { Container, MainContainer, MyFavorited } from "./styles.js";
import Header from "../../components/Header";
import DishFavorited from "../../components/DishFavorited/index.jsx";
import Detailfooter from "../../components/Detailfooter/index.jsx";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

function Favorites() {
  const [favoritedDishes, setFavoritedDishes] = useState([]);

  useEffect(() => {
    const storedFavoritedDishes =
      JSON.parse(localStorage.getItem("favoritedDishes")) || [];

    setFavoritedDishes(storedFavoritedDishes);
  }, []);

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
      <Detailfooter />
    </Container>
  );
}

export default Favorites;
