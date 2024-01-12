import React from "react";
import prato from "../../assets/foods/Mask group-1.png";
import { Container } from "./styles";

const DishFavorited = () => {
  return (
    <Container>
      <img src={prato} alt="" />
      <div className="dish">
        <div className="dish-info">
          <h3>Salada Radish</h3>
        </div>
        <p>Remover dos Favoritos</p>
      </div>
    </Container>
  );
};

export default DishFavorited;
