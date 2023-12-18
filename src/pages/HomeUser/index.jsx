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
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index";
import { Plates } from "../../components/Plates";
import cookies from "../../assets/pngegg 1.png";

export const HomeUser = () => {
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

          <Splide
            id="slide-container"
            options={{
              perPage: 3,
              perMove: 1,
              arrows: false,
              pagination: false,
              breakpoints: {
                320: {
                  perPage: 2,
                },
              },
            }}
          >
            <SplideSlide id="splide-slide">
              <DivPlates>
                <Plates />
              </DivPlates>
            </SplideSlide>
          </Splide>

          <h2>Sobremesas</h2>

          <Splide
            id="slide-container"
            options={{
              perMove: 1,
              arrows: false,
              pagination: false,
              breakpoints: {
                320: {
                  perPage: 2,
                },
              },
            }}
          >
            <SplideSlide>
              <DivPlates>
                <Plates />
              </DivPlates>
            </SplideSlide>
          </Splide>

          <h2>Bebidas</h2>

          <Splide
            id="slide-container"
            options={{
              arrows: false,
              perPage: 3,
              perMove: 1,
              pagination: false,
              breakpoints: {
                320: {
                  perPage: 2,
                },
              },
            }}
          >
            <SplideSlide>
              <DivPlates>
                <Plates />
              </DivPlates>
            </SplideSlide>
          </Splide>
        </DishesSection>
      </DivStyled>
      <Footer />
    </>
  );
};
