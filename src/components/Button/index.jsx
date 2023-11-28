/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";

export const Button = ({ title, price }) => {
  return (
    <ButtonStyled type="submit">
      {title} {price && `- R$${price}`}{" "}
    </ButtonStyled>
  );
};
