import Header from "../../components/Header";
import Detailfooter from "../../components/Detailfooter";
import Tags from "../../components/Tags";
import {
  DivContent,
  ContentStyled,
  IngredientsStyled,
  ButtonStyled,
} from "./styles";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft, FaMinus, FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useDish } from "../../hooks/dish";
import Button from "../../components/Button";
import { toast } from "react-toastify";

function UserOrder({ name, description, image, onAddToOrder, price }) {
  const { addToSelectedDishes } = useDish();
  const { id } = useParams();
  const [dishes, setDishes] = useState([]);
  const [value, setValue] = useState(1);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/${id}`);
        setDishes(response.data);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }
    fetchDishes();
  }, [id]);

  function handleAddProduct() {
    setValue((prevValue) => prevValue + 1);
  }

  function handleRemoveProduct() {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue((prevValue) => prevValue - 1);
    }
  }

  function handleAddToOrder(event) {
    event.preventDefault();
    addToSelectedDishes({
      id,
      name: dishes.name,
      description: dishes.description,
      price: dishes.price,
      image: dishes.image,
      quantity: value,
    });

    toast.success("Prato adicionado ao carrinho!");
  }
  return (
    <DivContent>
      <Header />

      <main>
        <Link to="/" className="linkto">
          <FaAngleLeft /> voltar
        </Link>
        <ContentStyled>
          <div className="imagePhoto">
            <img src={`http://localhost:3000/files/${dishes.image}`} alt="" />
          </div>

          <div className="InfoContent">
            <h1>{dishes.name}</h1>
            <p>{dishes.description}</p>
            <IngredientsStyled>
              {dishes.ingredients &&
                dishes.ingredients.map((ingredient, index) => (
                  <Tags key={index} titleTag={ingredient.name} />
                ))}
            </IngredientsStyled>

            <ButtonStyled>
              <button>
                <FaMinus onClick={handleRemoveProduct} />
              </button>
              <span>{value}</span>
              <button>
                <FaPlus onClick={handleAddProduct} />
              </button>
              <Button
                title={"incluir"}
                price={dishes.price}
                onClick={handleAddToOrder}
              />
            </ButtonStyled>
          </div>
        </ContentStyled>
      </main>
      <Detailfooter />
    </DivContent>
  );
}

export default UserOrder;
