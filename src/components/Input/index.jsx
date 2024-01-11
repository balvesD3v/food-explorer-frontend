/* eslint-disable react/prop-types */
import { InputStyled, DivStyled } from "./styles";

function Input({ title, link }) {
  return (
    <DivStyled to={link}>
      <InputStyled type="submit" value={title} />
    </DivStyled>
  );
}
export default Input;
