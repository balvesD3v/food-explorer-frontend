/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";

function Button({ title, price, isDelete, link }) {
  return (
    <ButtonStyled
      to={link}
      isDelete={isDelete}
      type="submit"
      className={isDelete ? "button-add" : "button-delete"}
    >
      {title} {price && `- R$${price}`}{" "}
    </ButtonStyled>
  );
}

export default Button;
