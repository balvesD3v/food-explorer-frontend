import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { DivStyled, InputField, IngredientsField, TextArea } from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import Detailfooter from "../../components/Detailfooter";
import SendImage from "../../components/SendImage";
import InputName from "../../components/InputName";
import Select from "../../components/Select";
import InputPrice from "../../components/InputPrice";
import IngredientTag from "../../components/IngredientTag";
import Button from "../../components/Button";
import { FaAngleLeft } from "react-icons/fa6";

function EditDish() {
  const { id } = useParams();

  const [dishUpdated, setDishUpdated] = useState({
    newNameDish: "",
    newDescription: "",
    newPrice: 0,
  });

  const [dishData, setDishData] = useState({
    name: "",
    ingredients: [],
    price: "",
    description: "",
    categories: "",
  });

  async function handleUpdateDish() {
    await api.put(`/dishes/${id}`, dishUpdated);
  }

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const response = await api.get(`/dishes/${id}`);
        const { name, ingredients, price, description } = response.data;
        console.log(response.data);

        setDishUpdated({
          newNameDish: name,
          newDescription: description,
          newPrice: price,
        });

        setDishData({
          name,
          ingredients,
          price,
          description,
          categories: "",
        });
      } catch (error) {
        console.error("Erro ao buscar dados do prato:", error);
      }
    };
    fetchDishData();
  }, [id]);

  return (
    <>
      <HeaderAdmin />
      <DivStyled>
        <a href="/" className="linkto">
          <FaAngleLeft /> voltar
        </a>
        <h1>Editar prato</h1>
        <section>
          <InputField>
            <SendImage />
            <InputName
              value={dishData.name}
              onChange={(e) => {
                setDishUpdated((prevData) => ({
                  ...prevData,
                  newNameDish: e.target.value,
                }));
                setDishData((prevData) => ({
                  ...prevData,
                  name: e.target.value,
                }));
              }}
            />
            <Select
              value={dishData.ingredients}
              onChange={(e) => {
                setDishData((prevData) => ({
                  ...prevData,
                  ingredients: e.target.value,
                }));
              }}
            />
          </InputField>
          <InputField>
            <IngredientsField>
              <span>Ingredientes</span>
              <div className="tags">
                {dishData.ingredients.map((ingredient, index) => (
                  <IngredientTag key={index} value={ingredient.name} />
                ))}
                <IngredientTag isNew placeholder="Adicionar" />
              </div>
            </IngredientsField>
            <div className="price">
              <InputPrice
                value={dishData.price}
                onChange={(e) => {
                  setDishUpdated((prevData) => ({
                    ...prevData,
                    newPrice: e.target.value,
                  }));
                  setDishData((prevData) => ({
                    ...prevData,
                    price: e.target.value,
                  }));
                }}
              />
            </div>
          </InputField>
          <TextArea>
            <label htmlFor="">Descrição</label>
            <textarea
              value={dishData.description}
              onChange={(e) => {
                setDishUpdated((prevData) => ({
                  ...prevData,
                  newDescription: e.target.value,
                }));
                setDishData((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }));
              }}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </TextArea>
        </section>
        <div className="button-save">
          <Button title={"Excluir Prato"} isDelete />
          <Button title={"Salvar Alterações"} onClick={handleUpdateDish} />
        </div>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default EditDish;
