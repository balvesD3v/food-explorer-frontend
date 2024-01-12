/* eslint-disable react/prop-types */
import SeachBar from "../SeachBar";
import Button from "../Button";
import Input from "../Input";
import BurgerBarAdmin from "../BurgerBarAdmin";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HeaderStyled, Brand, MobileStyled, Inputs } from "./styles";
import { useAuth } from "../../hooks/auth";

function HeaderAdmin() {
  const { signOut } = useAuth();

  return (
    <HeaderStyled>
      <BurgerBarAdmin />
      <Brand to={"/"}>
        <img src={polygon} alt="polygon" />{" "}
        <a href="" className="foodexplorer">
          <span className="food-explorer-title">Food explorer</span>
          <span className="admin">admin</span>
        </a>
      </Brand>

      <SeachBar />

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
