import { DivStyled } from "./styles";

function InputPrice({ ...rest }) {
  return (
    <DivStyled>
      <label htmlFor="">Preço</label>
      <div className="input-container">
        <input
          type="number"
          id="price"
          step="0.01"
          placeholder="R$ 00,00"
          min="0"
          {...rest}
        />
      </div>
    </DivStyled>
  );
}

export default InputPrice;
