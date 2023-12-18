import { Header } from "../../components/Header";
import { Detailfooter } from "../../components/Detailfooter";
import { Tags } from "../../components/Tags";
import {
  DivContent,
  ContentStyled,
  IngredientsStyled,
  BuyDish,
} from "./styles";
import { FaAngleLeft } from "react-icons/fa6";
import plate from "../../assets/foods/Mask group-1.png";
import { Minusplus } from "../../components/Minusplus";

export const UserOrder = () => {
  return (
    <>
      <Header />

      <DivContent>
        <a href="/">
          <FaAngleLeft /> voltar
        </a>
        <ContentStyled>
          <div className="imagePhoto">
            <img src={plate} alt="" />
          </div>

          <div className="InfoContent">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <IngredientsStyled>
              <Tags titleTag={"Alface"} />
              <Tags titleTag={"Tomato"} />
            </IngredientsStyled>

            <BuyDish className="buyDish">
              <Minusplus />
            </BuyDish>
          </div>
        </ContentStyled>
      </DivContent>

      <Detailfooter />
    </>
  );
};
