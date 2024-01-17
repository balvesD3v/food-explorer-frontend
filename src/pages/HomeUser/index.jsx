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
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";

function HomeUser() {
  const { user } = useAuth();
  const { addToSelectedDishes } = useDish();
  const { searchTerm } = useSearch();
  const [dishes, setDishes] = useState([]);
  const [slidesPerView, setSlidePerView] = useState(4);
  const [originalDishes, setOriginalDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, [user.id]);

  async function fetchDishes() {
    try {
      const response = await api.get(`/dishes`);
      setOriginalDishes(response.data);
      setDishes(response.data);
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  }

  const searchDishes = async (searchTerm) => {
    try {
      // Se searchTerm for uma string vazia, retorne todos os pratos
      if (!searchTerm.trim()) {
        setDishes(originalDishes);
        return;
      }
      const response = await api.get(`/dishes?&name=${searchTerm}`);
      setDishes(response.data);
      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Error searching dishes:", error);
    }
  };

  return (
    <>
      <Header onSearch={searchDishes} />
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
            loop={true}
            modules={[Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
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
            loop={true}
            modules={[Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
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
                      onAddToOrder={(dishData) => addToSelectedDishes(dishData)}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>

          <h2>Bebidas</h2>

          <Swiper
            loop={true}
            modules={[Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
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
                      onAddToOrder={(dishData) => addToSelectedDishes(dishData)}
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
