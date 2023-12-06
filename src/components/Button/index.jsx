/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";

export const Button = ({ title, price, isDelete }) => {
  return (
    <a href="">
      <ButtonStyled
        isDelete={isDelete}
        type="submit"
        className={isDelete ? "button-add" : "button-delete"}
      >
        {title} {price && `- R$${price}`}{" "}
      </ButtonStyled>
    </a>
  );
};
