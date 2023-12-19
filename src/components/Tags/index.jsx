/* eslint-disable react/prop-types */
import { DivStyled } from "./styles";

function Tags({ titleTag }) {
  return (
    <DivStyled>
      <span>{titleTag}</span>
    </DivStyled>
  );
}

export default Tags;
