/* eslint-disable react/prop-types */
import { DivStyled } from "./styles";

export const Tags = ({ titleTag }) => {
  return (
    <DivStyled>
      <span>{titleTag}</span>
    </DivStyled>
  );
};
