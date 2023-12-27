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
import Header from "../../components/Header";
import Plates from "../../components/Plates";
import cookies from "../../assets/pngegg 1.png";
import Detailfooter from "../../components/Detailfooter";

function HomeUser() {
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
              type: "loop",
              perPage: 3,
              focus: "center",
              arrows: false,
              breakpoints: {
                320: {
                  perPage: 2,
                  gap: "60px",
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
                <Plates />
              </DivPlates>
            </SplideSlide>
          </Splide>

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
                  gap: "60px",
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
                <Plates />
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
                  gap: "60px",
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
                <Plates />
              </DivPlates>
            </SplideSlide>
          </Splide>
        </DishesSection>
      </DivStyled>
      <Detailfooter />
    </>
  );
}

export default HomeUser;
