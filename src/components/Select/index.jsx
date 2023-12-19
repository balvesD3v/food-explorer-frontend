import { DivStyled } from "./styles";

export function Select() {
  return (
    <DivStyled>
      <label htmlFor="">Categoria</label>
      <select name="" id="">
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        <option value="sobremesas">Sobremesas</option>
        <option value="bebidas">Bebidas</option>
        <option value="refeicoes">Refeições</option>
      </select>
    </DivStyled>
  );
}
