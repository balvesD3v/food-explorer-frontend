/* eslint-disable react/prop-types */
import { useDish } from "../../hooks/dish";
import { ButtonStyled } from "./styles";
import { FaReceipt } from "react-icons/fa6";

function ButtonOrder({ title }) {
  const { selectedDishes } = useDish();
  const selectedAmoutDishes = selectedDishes.reduce((acc, dish) => {
    acc += dish.quantity ?? 0;
    return acc;
  }, 0);

  return (
    <ButtonStyled type="submit" to={"/payment"}>
      <FaReceipt className="receipt" />
      <p className="text">{title}</p>
      <p className="order">{selectedAmoutDishes}</p>
    </ButtonStyled>
  );
}
export default ButtonOrder;
