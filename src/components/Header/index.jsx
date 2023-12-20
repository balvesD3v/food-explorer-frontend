/* eslint-disable react/prop-types */
import SeachBar from "../SeachBar";
import ButtonOrder from "../ButtonOrder";
import Button from "../Button";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket, FaBars } from "react-icons/fa6";
import { HeaderStyled, Brand } from "./styles";

function Header({ isAdmin }) {
  return (
    <HeaderStyled>
      <button className="burger-bar">
        <FaBars />
      </button>
      <Brand to={"/"}>
        <img src={polygon} alt="polygon" />{" "}
        <a href="" className="foodexplorer">
          <span>Food explorer</span>
          {isAdmin && <span className="admin">Admin</span>}
        </a>
      </Brand>
      <SeachBar />
      {isAdmin ? (
        <Button title={"Novo Prato"} />
      ) : (
        <ButtonOrder title={"Pedidos"} />
      )}
      <a href="" className="signOut">
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
}
export default Header;
