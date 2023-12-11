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
import { Footer } from "../../components/Footer";
import { PlatesAdmin } from "../../components/PlatesAdmin";
import cookies from "../../assets/pngegg 1.png";

export const HomeAdmin = () => {
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
              pagination: false,
            }}
          >
            <SplideSlide id="splide-slide">
              <DivPlates>
                <PlatesAdmin />
              </DivPlates>
            </SplideSlide>
          </Splide>

          <h2>Sobremesas</h2>

          <Splide
            id="slide-container"
            options={{
              type: "loop",
              rewind: true,
              rewindSpeed: 1000,
              perPage: 3,
              perMove: 1,
              focus: "center",
              pagination: false,
            }}
          >
            <SplideSlide>
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
              rewind: true,
              rewindSpeed: 1000,
              perPage: 3,
              perMove: 1,
              focus: "center",
              pagination: false,
            }}
          >
            <SplideSlide>
              <DivPlates>
                <PlatesAdmin />
              </DivPlates>
            </SplideSlide>
          </Splide>
        </DishesSection>
      </DivStyled>
      <Footer />
    </>
  );
};
