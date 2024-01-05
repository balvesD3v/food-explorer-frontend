import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  BannerStyled,
  DivStyled,
  Cookies,
  ContentDiv,
  DivPlates,
  DishesSection,
} from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import PlatesAdmin from "../../components/PlatesAdmin";
import cookies from "../../assets/pngegg 1.png";
import Detailfooter from "../../components/Detailfooter";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function HomeAdmin() {
  const [dishes, setDishes] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data);
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fecthImage() {
      const response = await api.get("/image");
      setImage(response.data);
      console.log(response.data);
    }

    fecthImage();
  });
  return (
    <>
      <HeaderAdmin />

      <DivStyled>
        <BannerStyled>
          <Cookies>
            <img src={cookies} alt="" />
          </Cookies>
          <ContentDiv>
            <h1>Sabores inigualáveis</h1>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </ContentDiv>
        </BannerStyled>

        <DishesSection>
          <h2>Refeições</h2>

          <DivPlates>
            {dishes &&
              dishes.map((dish) => (
                <PlatesAdmin
                  key={dish.id}
                  image={dish.image}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              ))}
          </DivPlates>
          <h2>Sobremesas</h2>

          <Splide
            id="slide-container"
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              arrows: false,
              breakpoints: {
                320: {
                  perPage: 2,
                  gap: "50px",
                },
                425: {
                  perPage: 2,
                  padding: "30px",
                  gap: "-30px",
                },
              },
            }}
          >
            <SplideSlide id="splide-slide">
              <DivPlates>
                <PlatesAdmin />
              </DivPlates>
            </SplideSlide>
          </Splide>

          <h2>Bebidas</h2>

          <Splide
            id="slide-container"
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              arrows: false,
              breakpoints: {
                320: {
                  perPage: 2,
                  gap: "50px",
                },
                425: {
                  perPage: 2,
                  padding: "30px",
                  gap: "-30px",
                },
              },
            }}
          >
            <SplideSlide id="splide-slide">
              <DivPlates>
                <PlatesAdmin />
              </DivPlates>
            </SplideSlide>
          </Splide>
        </DishesSection>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default HomeAdmin;
