import { DivStyled, ButtonStyled } from "./styles";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Button from "../../components/Button";
import { useState } from "react";

function MinusPlus() {
  const [value, setValue] = useState(1);

  function handleAddProduct() {
    setValue((prevValue) => prevValue + 1);
  }

  function handleRemoveProduct() {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue((prevValue) => prevValue - 1);
    }
  }

  return (
    <>
      <DivStyled>
        <div className="button-minusorplus">
          <button className="minusOrPlus">
            <FaMinus onClick={handleRemoveProduct} />
          </button>
          <span>{value}</span>
          <button className="minusOrPlus">
            <FaPlus onClick={handleAddProduct} />
          </button>
        </div>
      </DivStyled>
      <ButtonStyled className="button">
        <Button title={"incluir"} price={1} />
      </ButtonStyled>
    </>
  );
}

export default MinusPlus;
