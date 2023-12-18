/* eslint-disable react/prop-types */
import { Seachbar } from "../Searchbar";
import { Buttonorder } from "../Buttonorder";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket, FaBars } from "react-icons/fa6";
import { HeaderStyled, Brand } from "./styles";
import { Button } from "../Button";

export const Header = ({ isAdmin }) => {
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
      <Seachbar />
      {isAdmin ? (
        <Button title={"Novo Prato"} />
      ) : (
        <Buttonorder title={"Pedidos"} />
      )}
      <a href="" className="signOut">
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
};
