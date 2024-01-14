import React, { useState, useEffect } from "react";
import { useDish } from "../../hooks/dish";
import { Container, ButtonStyled } from "./styles";

const DishFavorited = ({ id, image, name }) => {
  const { removeDish } = useDish();
  const [favoritedDishes, setFavoritedDishes] = useState([]);

  useEffect(() => {
    const storedFavoritedDishes =
      JSON.parse(localStorage.getItem("favoritedDishes")) || [];
    setFavoritedDishes(storedFavoritedDishes);
  }, []);

  const handleRemoveFromFavorites = () => {
    removeDish(id);

    // Atualiza o estado local após remover dos favoritos
    const updatedFavoritedDishes = favoritedDishes.filter(
      (dish) => dish.id !== id
    );
    setFavoritedDishes(updatedFavoritedDishes);

    // Atualiza o localStorage após remover dos favoritos
    localStorage.setItem(
      "favoritedDishes",
      JSON.stringify(updatedFavoritedDishes)
    );
  };

  return (
    <Container>
      <img src={image} alt="" />
      <div className="dish">
        <div className="dish-info">
          <h3>{name}</h3>
        </div>
        <ButtonStyled onClick={handleRemoveFromFavorites}>
          Remover dos Favoritos
        </ButtonStyled>
      </div>
    </Container>
  );
};

export default DishFavorited;
