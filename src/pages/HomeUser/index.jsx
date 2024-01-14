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

function HomeUser() {
  const { addToSelectedDishes } = useDish();
  const { user } = useAuth();
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [slidesPerView, setSlidePerView] = useState(4);

  console.log(user.id);

  const handleSearch = (searchTerm) => {
    const filtered = dishes.filter(
      (dish) =>
        (dish.name &&
          dish.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (dish.ingredients &&
          dish.ingredients.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredDishes(filtered);
    setSearch(searchTerm);
    // setIngredients(searchTerm);
    console.log(searchTerm);
  };

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data);
      setFilteredDishes(response.data);
    }
    fetchDishes();
  }, []);

  async function fetchDishesByName(name) {
    const response = await api.get(
      `/dishes?name=${name}&ingredients${ingredients}`
    );
    setFilteredDishes(response.data);
  }

  // async function fetchDishesByIngredients(ingredients) {
  //   const response = await api.get(`/dishes?ingredients=${ingredients}`);
  //   setFilteredDishes(response.data);
  // }

  useEffect(() => {
    if (search && !ingredients) {
      fetchDishesByName(search);
    } else if (!search && ingredients) {
      fetchDishesByIngredients(ingredients);
    } else {
      // Caso ambos estejam preenchidos, você pode decidir o que fazer
      // Neste exemplo, estou chamando fetchDishesByName
      fetchDishesByName(search);
    }
  }, [search, ingredients]);

  return (
    <>
      <Header onSearch={handleSearch} />

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
            {filteredDishes &&
              filteredDishes
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
            {filteredDishes &&
              filteredDishes
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
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {filteredDishes &&
              filteredDishes
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
