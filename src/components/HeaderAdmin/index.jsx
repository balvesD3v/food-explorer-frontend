/* eslint-disable react/prop-types */
import SeachBar from "../SeachBar";
import Button from "../Button";
import BurgerBarAdmin from "../BurgerBarAdmin";
import polygon from "../../assets/Polygons/polygonColorful.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HeaderStyled, Brand } from "./styles";

function HeaderAdmin() {
  return (
    <HeaderStyled>
      <BurgerBarAdmin />
      <Brand to={"/"}>
        <img src={polygon} alt="polygon" />{" "}
        <a href="" className="foodexplorer">
          <span>Food explorer</span>
          <span className="admin">Admin</span>
        </a>
      </Brand>
      <SeachBar />

      <Button title={"Novo Prato"} />

      <a href="" className="signOut">
        <FaArrowRightFromBracket className="arrowRight" />
      </a>
    </HeaderStyled>
  );
}
export default HeaderAdmin;
