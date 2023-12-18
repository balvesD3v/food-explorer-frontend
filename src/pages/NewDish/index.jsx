import { DivStyled, InputField, IngredientsField, TextArea } from "./styles";
import { Header } from "../../components/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { Sendimage } from "../../components/Sendimage";
import { Inputname } from "../../components/Inputname";
import { Select } from "../../components/Select";
import { Inputprice } from "../../components/Inputprice";
import { Ingredienttag } from "../../components/Ingredienttag";
import { Button } from "../../components/Button";
import { Detailfooter } from "../../components/Detailfooter";

export const NewDish = () => {
  return (
    <>
      <Header />
      <DivStyled>
        <a href="/">
          <FaAngleLeft /> voltar
        </a>
        <h1>Adicionar prato</h1>
        <section>
          <InputField>
            <Sendimage />
            <Inputname />
            <Select />
          </InputField>
          <InputField>
            <IngredientsField>
              <span>Ingredientes</span>
              <div className="tags">
                <Ingredienttag value="Pão naan" />
                <Ingredienttag isNew placeholder="Adicionar" />
              </div>
            </IngredientsField>
            <div className="price">
              <Inputprice />
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
};
