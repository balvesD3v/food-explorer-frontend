import { DivStyled, ButtonStyled } from "./styles";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "../../components/Button";

export const Minusplus = () => {
  return (
    <>
      <DivStyled>
        <div className="button-minusorplus">
          <button className="minusOrPlus">
            <FaMinus />
          </button>
          <span>01</span>
          <button className="minusOrPlus">
            <FaPlus />
          </button>
        </div>
      </DivStyled>
      <ButtonStyled className="button">
        <Button title={"incluir"} />
      </ButtonStyled>
    </>
  );
};
