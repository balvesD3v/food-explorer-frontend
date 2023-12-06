import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  BannerStyled,
  DivStyled,
  Cookies,
  ContentDiv,
  DivPlates,
} from "./styles";
import { Header } from "../../components/Header";
import { Plates } from "../../components/Plates";
import cookies from "../../assets/pngegg 1.png";
import { Footer } from "../../components/Footer";

export const HomeUser = () => {
  return (
    <div>
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

        <h2>Refeições</h2>

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
              <Plates />
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
              <Plates />
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
              <Plates />
            </DivPlates>
          </SplideSlide>
        </Splide>
      </DivStyled>
      <Footer />
    </div>
  );
};
