/* eslint-disable react/prop-types */
import { FiPlus, FiX } from "react-icons/fi";
import { DivStyled } from "./styles";

function IngredientTag({ isNew, value, onClick, ...rest }) {
  return (
    <DivStyled isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </DivStyled>
  );
}
export default IngredientTag;
