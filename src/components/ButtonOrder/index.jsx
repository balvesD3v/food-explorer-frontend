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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        className="receipt"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.96094 13C8.96094 12.4477 9.40865 12 9.96094 12H22.9609C23.5132 12 23.9609 12.4477 23.9609 13C23.9609 13.5523 23.5132 14 22.9609 14H9.96094C9.40865 14 8.96094 13.5523 8.96094 13Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.96094 17C8.96094 16.4477 9.40865 16 9.96094 16H22.9609C23.5132 16 23.9609 16.4477 23.9609 17C23.9609 17.5523 23.5132 18 22.9609 18H9.96094C9.40865 18 8.96094 17.5523 8.96094 17Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.04672 5.58579C4.4218 5.21071 4.9305 5 5.46094 5H27.4609C27.9914 5 28.5001 5.21071 28.8751 5.58579C29.2502 5.96086 29.4609 6.46957 29.4609 7V26C29.4609 26.3466 29.2815 26.6684 28.9867 26.8506C28.6918 27.0329 28.3237 27.0494 28.0137 26.8944L24.4609 25.118L20.9081 26.8944C20.6266 27.0352 20.2952 27.0352 20.0137 26.8944L16.4609 25.118L12.9081 26.8944C12.6266 27.0352 12.2952 27.0352 12.0137 26.8944L8.46094 25.118L4.90815 26.8944C4.59816 27.0494 4.23002 27.0329 3.93521 26.8506C3.64039 26.6684 3.46094 26.3466 3.46094 26V7C3.46094 6.46957 3.67165 5.96086 4.04672 5.58579ZM27.4609 7L5.46094 7L5.46094 24.382L8.01372 23.1056C8.29525 22.9648 8.62662 22.9648 8.90815 23.1056L12.4609 24.882L16.0137 23.1056C16.2952 22.9648 16.6266 22.9648 16.9081 23.1056L20.4609 24.882L24.0137 23.1056C24.2952 22.9648 24.6266 22.9648 24.9081 23.1056L27.4609 24.382V7Z"
          fill="white"
        />
      </svg>
      <p className="text">{title}</p>
      <p className="order">{selectedAmoutDishes}</p>
    </ButtonStyled>
  );
}
export default ButtonOrder;
