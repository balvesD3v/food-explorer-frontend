import {
  DivButton,
  DivInfo,
  DivStyled,
  LikeButton,
  ButtonStyled,
} from "./styles";
import plate from "../../assets/foods/Mask group-1.png";
import { FaAngleRight, FaPlus, FaRegHeart, FaMinus } from "react-icons/fa6";
import Button from "../Button";

function Plates() {
  return (
    <>
      <DivStyled>
        <LikeButton>
          <FaRegHeart />
        </LikeButton>
        <img src={plate} alt="Plate" />
        <DivInfo>
          <h3>
            Salada Ravanello <FaAngleRight />
          </h3>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
          </p>
          <span>R$ 49,97</span>
        </DivInfo>
        <DivButton>
          <ButtonStyled>
            <button>
              <FaMinus />
            </button>
            <span>01</span>
            <button>
              <FaPlus />
            </button>
          </ButtonStyled>
          <Button title={"Incluir"} />
        </DivButton>
      </DivStyled>
    </>
  );
}

export default Plates;
