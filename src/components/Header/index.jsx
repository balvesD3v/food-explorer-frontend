/* eslint-disable react/prop-types */
import SeachBar from "../SeachBar";
import ButtonOrder from "../ButtonOrder";
import BurgerBar from "../BurgerBar";
import polygon from "../../assets/Polygons/polygonColorful.png";
import Input from "../Input";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HeaderStyled, Brand, Inputs } from "./styles";
import { useAuth } from "../../hooks/auth";

function Header() {
  const { signOut } = useAuth();

  return (
    <HeaderStyled>
      <BurgerBar />
      <Brand to={"/"}>
        <img src={polygon} alt="polygon" />{" "}
        <a href="" className="foodexplorer">
          <span>Food explorer</span>
        </a>
      </Brand>
      <SeachBar />

      <Inputs>
        <Input title={"Meus favoritos"} link={"/favorites"} />
        <Input title={"Histórico de pedidos"} link={"/historic"} />
      </Inputs>

      <ButtonOrder title={"Pedidos"} />
      <a href="/" className="signOut" onClick={signOut}>
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
}
export default Header;
