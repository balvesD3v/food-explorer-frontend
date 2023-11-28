/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";
import { FaReceipt } from "react-icons/fa6";

export const ButtonOrder = ({ title }) => {
  return (
    <ButtonStyled type="submit">
      <FaReceipt />
      {title}
      <p>(0)</p>
    </ButtonStyled>
  );
};
