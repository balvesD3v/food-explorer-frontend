import React from "react";
import { Container } from "./styles";
import { useDish } from "../../hooks/dish";

const OrderedDish = ({ dishId, image, name, price, quantity }) => {
  const { removeDish } = useDish();

  return (
    <Container>
      <img src={image} alt="" />
      <div className="dish">
        <div className="dish-info">
          <h3>
            {quantity}x {name}
          </h3>
          <p>R$ {price}</p>
        </div>
        <p onClick={() => removeDish(dishId)}>Excluir</p>
      </div>
    </Container>
  );
};

export default OrderedDish;
