/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";

function Button({ title, price, isDelete, link, ...rest }) {
  return (
    <ButtonStyled
      to={link}
      isDelete={isDelete}
      type="button"
      className={isDelete ? "button-add" : "button-delete"}
      {...rest}
    >
      {title} {price && `- R$ ${price}`}
    </ButtonStyled>
  );
}

export default Button;
