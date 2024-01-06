import {
  BannerStyled,
  DivStyled,
  Cookies,
  ContentDiv,
  DivPlates,
  DishesSection,
} from "./styles";
import Header from "../../components/Header";
import Plates from "../../components/Plates";
import cookies from "../../assets/pngegg 1.png";
import Detailfooter from "../../components/Detailfooter";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function HomeUser() {
  const [dishes, setDishes] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data);
    }
    fetchDishes();
  }, []);
  return (
    <>
      <Header />

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

          <Swiper>
            <DivPlates>
              <Swiper>
                <DivPlates>
                  {dishes &&
                    dishes.map((dish) => (
                      <SwiperSlide key={dish.id}>
                        <Plates
                          image={dish.image}
                          name={dish.name}
                          description={dish.description}
                          price={dish.price}
                        />
                      </SwiperSlide>
                    ))}
                </DivPlates>
              </Swiper>
            </DivPlates>
          </Swiper>

          <h2>Sobremesas</h2>

          <Swiper>
            <DivPlates></DivPlates>
          </Swiper>

          <h2>Bebidas</h2>

          <Swiper>
            <DivPlates></DivPlates>
          </Swiper>
        </DishesSection>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default HomeUser;
