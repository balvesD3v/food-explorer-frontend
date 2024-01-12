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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function HomeAdmin() {
  const [slidesPerView, setSlidePerView] = useState(4);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data);
    }
    fetchDishes();
  }, []);

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
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <DivPlates>
              {dishes &&
                dishes
                  .filter((dish) => dish.categories === "refeicoes")
                  .map((dish) => (
                    <SwiperSlide key={dish.id}>
                      <PlatesAdmin
                        id={dish.id}
                        image={dish.image}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                      />
                    </SwiperSlide>
                  ))}
            </DivPlates>
          </Swiper>

          <h2>Sobremesas</h2>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <DivPlates>
              {dishes &&
                dishes
                  .filter((dish) => dish.categories === "sobremesas")
                  .map((dish) => (
                    <SwiperSlide key={dish.id}>
                      <PlatesAdmin
                        id={dish.id}
                        image={dish.image}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                      />
                    </SwiperSlide>
                  ))}
            </DivPlates>
          </Swiper>

          <h2>Bebidas</h2>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <DivPlates>
              {dishes &&
                dishes
                  .filter((dish) => dish.categories === "bebidas")
                  .map((dish) => (
                    <SwiperSlide key={dish.id}>
                      <PlatesAdmin
                        id={dish.id}
                        image={dish.image}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                      />
                    </SwiperSlide>
                  ))}
            </DivPlates>
          </Swiper>
        </DishesSection>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default HomeAdmin;
