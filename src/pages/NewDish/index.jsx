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
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewDish() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [price, setPrice] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewDish() {
    try {
      await api.post("/dishes", {
        title,
        description,
        price,
        tags,
      });

      toast.success("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar o prato:", error);
      toast.error("Erro ao criar o prato. Tente novamente mais tarde.");
    }
  }

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
            <InputName onChange={(e) => setTitle(e.target.value)} />
            <Select />
          </InputField>
          <InputField>
            <IngredientsField>
              <span>Ingredientes</span>
              <div className="tags">
                {tags.map((tag, index) => (
                  <IngredientTag
                    key={String(index)}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                ))}
                <IngredientTag
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </IngredientsField>
            <div className="price">
              <InputPrice onChange={(e) => setPrice(e.target.value)} />
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
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </TextArea>
        </section>
        <div className="button-save">
          <Button title={"Salvar Alterações"} onClick={handleNewDish} />
        </div>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default NewDish;
