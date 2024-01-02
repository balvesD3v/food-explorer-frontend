import { DivStyled } from "./styles";

function InputName({ ...rest }) {
  return (
    <DivStyled>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" placeholder="Ex.: Salada Ceasar" {...rest} />
    </DivStyled>
  );
}

export default InputName;
