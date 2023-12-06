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

        <DivPlates>
          <Plates />
          <Plates />
        </DivPlates>

        <h2>Sobremesas</h2>

        <DivPlates>
          <Plates />
          <Plates />
        </DivPlates>

        <h2>Bebidas</h2>

        <DivPlates>
          <Plates />
          <Plates />
        </DivPlates>
      </DivStyled>
    </div>
  );
};
