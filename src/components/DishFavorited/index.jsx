import React from "react";
import { useDish } from "../../hooks/dish";
import { Container, ButtonStyled } from "./styles";
import { toast } from "react-toastify";

const DishFavorited = ({ id, image, name }) => {
  const { removeFromFavorites } = useDish();
  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
    toast.error("Prato não é mais favorito!");
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
