/* eslint-disable react/prop-types */
import { Seachbar } from "../SearchBar";
import { ButtonOrder } from "../ButtonOrder";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HeaderStyled, Brand } from "./styles";

export const Header = ({ isAdmin }) => {
  return (
    <HeaderStyled>
      <Brand>
        <img src={polygon} alt="polygon" />{" "}
        <a href="" className="foodexplorer">
          <span>Food explorer</span>
          {isAdmin && <span className="admin">Admin</span>}
        </a>
      </Brand>
      <Seachbar />
      <ButtonOrder title={"Pedidos"} />
      <a href="" className="signOut">
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
};
