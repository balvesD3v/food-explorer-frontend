import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";

function EditDish() {
  const { id } = useParams();
  const { updateImageDish } = useAuth();
  const navigate = useNavigate();
  const [newIngredients, setNewIngredients] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [deletedIngredients, setDeletedIngredients] = useState([]);
  const [addedIngredients, setAddedIngredients] = useState([]);
  const [dishUpdated, setDishUpdated] = useState({
    newPrice: 0,
    newNameDish: "",
    newCategory: "",
    newIngredients: [],
    newDescription: "",
  });

  const [dishData, setDishData] = useState({
    name: "",
    price: "",
    categories: "",
    ingredients: [],
    description: "",
  });

  function handleRemoveTag(ingredientToRemove) {
    if (ingredientToRemove.id) {
      const updatedIngredients = dishData.ingredients.filter(
        (ingredient) => ingredient !== ingredientToRemove
      );
      setDishData({ ...dishData, ingredients: updatedIngredients });
      setDishUpdated({ ...dishUpdated, newIngredients: updatedIngredients });

      setDeletedIngredients((prevState) => [...prevState, ingredientToRemove]);
    } else {
      setAddedIngredients((prevState) =>
        prevState.filter((i) => i != ingredientToRemove.name)
      );

      setDishData((prevState) => ({
        ...prevState,
        ingredients: prevState.ingredients.filter(
          (i) => i.name != ingredientToRemove.name
        ),
      }));

      console.log("dishData", dishData, "addedingredientes", addedIngredients);
    }
  }

  const deletedRemovedIngredients = async () => {
    for (const ingredient of deletedIngredients) {
      await api.delete(`/dishes/ingredients/${ingredient.id}`);
    }
  };

  const createAddedIngredient = async () => {
    for (const ingredientName of addedIngredients) {
      await api.post(`/dishes/ingredients/`, {
        name: ingredientName,
        dishes_id: id,
      });
    }
  };

  function handleAddTag() {
    setAddedIngredients((prevState) => [...prevState, newIngredients]);
    setDishData({
      ...dishData,
      ingredients: [...dishData.ingredients, { name: newIngredients }],
    });
    setNewIngredients("");
  }

  const handleUpdateDish = async () => {
    try {
      const { data } = await api.put(`/dishes/${id}`, dishUpdated);

      await createAddedIngredient();
      await deletedRemovedIngredients();

      toast.success("Prato atualizado com sucesso!");
      await updateImageDish({ data, imageFile });
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o prato.");
      }
    }
  };

  const handleDeleteDish = async () => {
    try {
      await api.delete(`/dishes/${id}`);
      toast.success("Prato deletado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error(
        "Não foi possível deletar o prato, tente novamente mais tarde!"
      );
    }
  };

  const handleUpdateImage = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const response = await api.get(`/dishes/${id}`);
        const { name, ingredients, price, description, categories } =
          response.data;

        setDishUpdated({
          newNameDish: name,
          newDescription: description,
          newPrice: price,
          newCategory: categories,
          newIngredients: ingredients,
        });

        setDishData({
          name,
          ingredients,
          price,
          description,
          categories,
        });
      } catch (error) {
        console.error("Erro ao buscar dados do prato:", error);
      }
    };
    fetchDishData();
  }, [id]);
  return (
    <DivStyled>
      <HeaderAdmin />
      <main>
        <a href="/" className="linkto">
          <FaAngleLeft /> voltar
        </a>

        <h1>Editar prato</h1>

        <section>
          <InputField>
            <SendImage onChange={handleUpdateImage} />
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
              value={dishData.categories}
              onChange={(e) => {
                setDishData((prevData) => ({
                  ...prevData,
                  categories: e.target.value,
                }));
                setDishUpdated((prevData) => ({
                  ...prevData,
                  newCategory: e.target.value,
                }));
              }}
            />
          </InputField>

          <InputField>
            <IngredientsField>
              <span>Ingredientes</span>
              <div className="tags">
                {dishData.ingredients.map((ingredient, index) => (
                  <IngredientTag
                    key={String(index)}
                    value={ingredient.name}
                    onClick={() => {
                      handleRemoveTag(ingredient);
                    }}
                  />
                ))}
                <IngredientTag
                  isNew
                  placeholder="Adicionar"
                  value={newIngredients}
                  onChange={(e) => setNewIngredients(e.target.value)}
                  onClick={handleAddTag}
                />
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
          <Button title={"Excluir Prato"} isDelete onClick={handleDeleteDish} />
          <Button title={"Salvar Alterações"} onClick={handleUpdateDish} />
        </div>
      </main>
      <Detailfooter />
    </DivStyled>
  );
}

export default EditDish;
