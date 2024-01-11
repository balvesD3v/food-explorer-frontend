import React from "react";
import prato from "../../assets/foods/Mask group-1.png";
import { Container } from "./styles";

const OrderedDish = () => {
  return (
    <Container>
      <img src={prato} alt="" />
      <div className="dish">
        <div className="dish-info">
          <h3>1x Salada Radish</h3>
          <p>R$ 25,97</p>
        </div>
        <p>Excluir</p>
      </div>
    </Container>
  );
};

export default OrderedDish;
