import Header from "../../components/Header";
import Detailfooter from "../../components/Detailfooter";
import Tags from "../../components/Tags";
import MinusPlus from "../../components/MinusPlus";
import {
  DivContent,
  ContentStyled,
  IngredientsStyled,
  BuyDish,
} from "./styles";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function UserOrder({ name, description, image }) {
  const { id } = useParams();
  const [dishes, setDishes] = useState([]);

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

            <BuyDish className="buyDish">
              <MinusPlus />
            </BuyDish>
          </div>
        </ContentStyled>
      </main>
      <Detailfooter />
    </DivContent>
  );
}

export default UserOrder;
