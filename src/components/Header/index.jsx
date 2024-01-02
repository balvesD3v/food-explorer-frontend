/* eslint-disable react/prop-types */
import SeachBar from "../SeachBar";
import ButtonOrder from "../ButtonOrder";
import BurgerBar from "../BurgerBar";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HeaderStyled, Brand } from "./styles";
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
      <ButtonOrder title={"Pedidos"} />
      <a href="" className="signOut" onClick={signOut}>
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
}
export default Header;
