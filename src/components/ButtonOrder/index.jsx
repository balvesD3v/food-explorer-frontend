/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";
import { FaReceipt } from "react-icons/fa6";

function Buttonorder({ title }) {
  return (
    <ButtonStyled type="submit">
      <FaReceipt className="receipt" />
      <p className="text">{title}</p>
      <p className="order">0</p>
    </ButtonStyled>
  );
}
export default Buttonorder;
