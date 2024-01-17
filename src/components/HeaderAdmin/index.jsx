/* eslint-disable react/prop-types */
import Search from "../SeachBar";
import Button from "../Button";
import Input from "../Input";
import BurgerBarAdmin from "../BurgerBarAdmin";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HeaderStyled, Brand, MobileStyled, Inputs } from "./styles";
import { useAuth } from "../../hooks/auth";

function HeaderAdmin({ onSearch }) {
  const { signOut } = useAuth();

  return (
    <HeaderStyled>
      <BurgerBarAdmin />
      <Brand to={"/"}>
        <img src={polygon} alt="polygon" />{" "}
        <div className="foodexplorer">
          <a href="">
            <span className="food-explorer-title">Food explorer</span>
          </a>
          <span className="admin">admin</span>
        </div>
      </Brand>

      <Search onInputChange={onSearch} />

      <Inputs>
        <Input title={"Meus favoritos"} link={"/favorites"} />
        <Input title={"Histórico de pedidos"} link={"/historic"} />
      </Inputs>

      <MobileStyled>
        <Button title={"Novo Prato"} link={"/new"} />
      </MobileStyled>

      <a href="/" className="signOut" onClick={signOut}>
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
}
export default HeaderAdmin;
