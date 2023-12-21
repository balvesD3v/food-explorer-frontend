import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import SeachBarMobile from "../SeachBarMobile";
import { StyledBurgerBar } from "./styles";

const BurgerBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("111");
  };

  return (
    <StyledBurgerBar showMenu={showMenu}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className="menu-overlay" onClick={toggleMenu}></div>
      <div className="menu-content">
        <div className="menu-header">
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L9 7.72721L16.4636 0.263604C16.8151 -0.087868 17.3849 -0.087868 17.7364 0.263604C18.0879 0.615076 18.0879 1.18492 17.7364 1.5364L10.2728 9L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L9 10.2728L1.5364 17.7364C1.18492 18.0879 0.615076 18.0879 0.263604 17.7364C-0.087868 17.3849 -0.087868 16.8151 0.263604 16.4636L7.72721 9L0.263604 1.5364C-0.087868 1.18492 -0.087868 0.615076 0.263604 0.263604Z"
              fill="white"
            />
          </svg>
          <span>Menu</span>
        </div>
        <div className="menu-inside-content">
          <SeachBarMobile />
          <p>Novo prato</p>
          <p>Sair</p>
        </div>
      </div>
    </StyledBurgerBar>
  );
};

export default BurgerBar;
