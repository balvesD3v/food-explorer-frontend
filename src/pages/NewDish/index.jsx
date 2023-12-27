import { DivStyled, InputField, IngredientsField, TextArea } from "./styles";
import { FaAngleLeft } from "react-icons/fa6";
import HeaderAdmin from "../../components/HeaderAdmin";
import SendImage from "../../components/SendImage";
import InputName from "../../components/InputName";
import Select from "../../components/Select";
import InputPrice from "../../components/InputPrice";
import IngredientTag from "../../components/IngredientTag";
import Button from "../../components/Button";
import Detailfooter from "../../components/Detailfooter";

function NewDish() {
  return (
    <>
      <HeaderAdmin />
      <DivStyled>
        <a href="/" className="linkto">
          <FaAngleLeft /> voltar
        </a>
        <h1>Adicionar prato</h1>
        <section>
          <InputField>
            <SendImage />
            <InputName />
            <Select />
          </InputField>
          <InputField>
            <IngredientsField>
              <span>Ingredientes</span>
              <div className="tags">
                <IngredientTag isNew placeholder="Adicionar" />
              </div>
            </IngredientsField>
            <div className="price">
              <InputPrice />
            </div>
          </InputField>
          <TextArea>
            <label htmlFor="">Descrição</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </TextArea>
        </section>
        <div className="button-save">
          <Button title={"Salvar Alterações"} />
        </div>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default NewDish;
