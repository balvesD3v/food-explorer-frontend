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
import { useAuth } from "../../hooks/auth";

function NewDish() {
  const { updateImageDish } = useAuth();

  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [imageFile, setImageFile] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setIngredients((prevState) => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleRemoveTag(deleted) {
    setIngredients((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewDish() {
    if (!name) {
      return toast.error("Digite o título da nota");
    }

    if (!categories) {
      return toast.error("Escolha uma categoria para o prato");
    }

    if (!price) {
      return toast.error("Digite um preço para o prato");
    }

    if (price < 0) {
      return toast.error("Digite um preço acima de 0");
    }

    if (!description) {
      return toast.error("Escreva uma descrição para o prato");
    }

    if (newIngredients) {
      return toast.error(
        "Você deixou um ingrediente no campo para adicionar, mas não adicionou."
      );
    }

    try {
      const { data } = await api.post("/dishes", {
        name,
        description,
        ingredients,
        price,
        categories,
      });

      toast.success("Prato criado com sucesso!");

      await updateImageDish({ data, imageFile });
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

  async function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  return (
    <DivStyled>
      <HeaderAdmin />
      <main>
        <a href="/" className="linkto">
          <FaAngleLeft /> voltar
        </a>

        <h1 className="new">Adicionar prato</h1>

        <section>
          <InputField>
            <SendImage onChange={handleChangeImage} />
            <InputName onChange={(e) => setName(e.target.value)} />
            <Select onChange={(e) => setCategories(e.target.value)} />
          </InputField>

          <InputField>
            <IngredientsField>
              <span>Ingredientes</span>
              <div className="tags">
                {ingredients.map((tag, index) => (
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
                  onChange={(e) => setNewIngredients(e.target.value)}
                  value={newIngredients}
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
      </main>
      <Detailfooter />
    </DivStyled>
  );
}

export default NewDish;
