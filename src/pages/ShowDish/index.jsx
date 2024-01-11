import Detailfooter from "../../components/Detailfooter";
import Button from "../../components/Button";
import Tags from "../../components/Tags";
import HeaderAdmin from "../../components/HeaderAdmin";
import { DivContent, ContentStyled, IngredientsStyled } from "./styles";
import { FaAngleLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function ShowDish({ name, description, image }) {
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

  console.log(dishes.image);

  return (
    <>
      <HeaderAdmin />

      <DivContent>
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

            <div className="buyDish">
              <Button title={"Editar Prato"} link={`/edit/${id}`} />
            </div>
          </div>
        </ContentStyled>
      </DivContent>

      <Detailfooter />
    </>
  );
}

export default ShowDish;
