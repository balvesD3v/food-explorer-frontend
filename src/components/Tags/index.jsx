/* eslint-disable react/prop-types */
import { DivStyled } from "./styles";

export function Tags({ titleTag }) {
  return (
    <DivStyled>
      <span>{titleTag}</span>
    </DivStyled>
  );
}
