import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { api } from "../../services/api";
import { useDish } from "../../hooks/dish";

import {
  BannerStyled,
  DivStyled,
  Cookies,
  ContentDiv,
  DishesSection,
} from "./styles";

import Header from "../../components/Header";
import Plates from "../../components/Plates";
import Detailfooter from "../../components/Detailfooter";
import cookies from "../../assets/pngegg 1.png";

function HomeUser() {
  const { addToSelectedDishes } = useDish();
  const [dishes, setDishes] = useState([]);
  const [slidesPerView, setSlidePerView] = useState(4);

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
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dishes &&
              dishes
                .filter((dish) => dish.categories === "refeicoes")
                .map((dish) => (
                  <SwiperSlide key={dish.id}>
                    <Plates
                      id={dish.id}
                      image={dish.image}
                      name={dish.name}
                      description={dish.description}
                      price={dish.price}
                      onAddToOrder={(dishData) => addToSelectedDishes(dishData)}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>

          <h2>Sobremesas</h2>

          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dishes &&
              dishes
                .filter((dish) => dish.categories === "sobremesas")
                .map((dish) => (
                  <SwiperSlide key={dish.id}>
                    <Plates
                      id={dish.id}
                      image={dish.image}
                      name={dish.name}
                      description={dish.description}
                      price={dish.price}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>

          <h2>Bebidas</h2>

          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dishes &&
              dishes
                .filter((dish) => dish.categories === "bebidas")
                .map((dish) => (
                  <SwiperSlide key={dish.id}>
                    <Plates
                      id={dish.id}
                      image={dish.image}
                      name={dish.name}
                      description={dish.description}
                      price={dish.price}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </DishesSection>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default HomeUser;
