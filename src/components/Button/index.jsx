/* eslint-disable react/prop-types */
import { ButtonStyled } from "./styles";

export const Button = ({ title }) => {
  return <ButtonStyled type="submit">{title}</ButtonStyled>;
};
