/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";
import { FaReceipt } from "react-icons/fa6";

function ButtonOrder({ title }) {
  return (
    <ButtonStyled type="submit" to={"/payment"}>
      <FaReceipt className="receipt" />
      <p className="text">{title}</p>
      <p className="order">0</p>
    </ButtonStyled>
  );
}
export default ButtonOrder;
