import Header from "../../components/Header";
import Detailfooter from "../../components/Detailfooter";
import Button from "../../components/Button";
import Tags from "../../components/Tags";
import { DivContent, ContentStyled, IngredientsStyled } from "./styles";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import plate from "../../assets/foods/Mask group-1.png";

function ShowDish() {
  return (
    <>
      <Header />

      <DivContent>
        <Link to="/" className="linkto">
          <FaAngleLeft /> voltar
        </Link>
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
              <Tags titleTag={"Tomato"} />
              <Tags titleTag={"Tomato"} />
              <Tags titleTag={"Tomato"} />
              <Tags titleTag={"Tomato"} />
            </IngredientsStyled>

            <div className="buyDish">
              <Button title={"Editar Prato"} />
            </div>
          </div>
        </ContentStyled>
      </DivContent>

      <Detailfooter />
    </>
  );
}

export default ShowDish;
