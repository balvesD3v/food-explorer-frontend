import { DivStyled } from "./styles";

export const InputName = () => {
  return (
    <DivStyled>
      <label htmlFor="" id="name">
        Nome
      </label>
      <input type="text" id="name" placeholder="Ex.: Salada Ceasar" />
    </DivStyled>
  );
};
