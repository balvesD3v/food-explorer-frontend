import {
  DivButton,
  DivInfo,
  DivStyled,
  LikeButton,
  ButtonStyled,
} from "./styles";
import { FaAngleRight, FaPlus, FaMinus } from "react-icons/fa6";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDish } from "../../hooks/dish";

function Plates({ id, name, description, price, image, onAddToOrder }) {
  const [value, setValue] = useState(1);
  const { addToFavorites, removeFromFavorites, favoritedDishes } = useDish();
  const isFavorited = favoritedDishes.some((dish) => dish.id === id);

  const navigate = useNavigate();

  function handleAddProduct() {
    setValue((prevValue) => prevValue + 1);
  }

  function handleRemoveProduct() {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue((prevValue) => prevValue - 1);
    }
  }

  function handleNavigation() {
    navigate(`/userorder/${id}`);
  }

  function handleFavorited() {
    if (isFavorited) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, name, description, price, image });
      toast.success("Esse prato é favorito!");
    }
  }

  function handleAddToOrder(event) {
    event.preventDefault();
    onAddToOrder({
      id,
      name,
      description,
      price,
      image,
      quantity: value,
    });

    toast.success("Prato adicionado ao carrinho!");
  }

  return (
    <>
      <DivStyled>
        <LikeButton onClick={handleFavorited} isFavorited={isFavorited}>
          <svg
            className={isFavorited ? "isFav" : ""}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              className={isFavorited ? "isFav" : "isNotFav"}
              d="M13.6997 23.4256L23.0754 13.1996C25.3788 10.6747 25.7145 6.54645 23.5384 3.90789C22.9926 3.24297 22.3283 2.70638 21.586 2.33093C20.8437 1.95547 20.0391 1.74903 19.2211 1.72422C18.4032 1.6994 17.5893 1.85674 16.829 2.18661C16.0687 2.51648 15.3781 3.01196 14.7993 3.64278L13.0399 5.57435L11.5236 3.90789C9.2086 1.39558 5.4236 1.02947 3.00443 3.40291C2.39479 3.99814 1.90282 4.7227 1.55859 5.53231C1.21435 6.34192 1.02508 7.21958 1.00233 8.11167C0.979577 9.00376 1.12383 9.89154 1.42627 10.7208C1.72872 11.55 2.183 12.3033 2.76136 12.9345L12.3801 23.4256C12.5557 23.6153 12.7928 23.7217 13.0399 23.7217C13.287 23.7217 13.5241 23.6153 13.6997 23.4256Z"
              stroke="#e6e1e1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
        </LikeButton>
        <img
          src={`https://food-explorer-api-inyq.onrender.com/files/${image}`}
          alt="Plate"
          onClick={handleNavigation}
        />
        <DivInfo>
          <h3>
            {name}
            <FaAngleRight />
          </h3>
          <p>{description}</p>

          <span>R${price}</span>
        </DivInfo>

        <DivButton>
          <ButtonStyled>
            <button>
              <FaMinus onClick={handleRemoveProduct} />
            </button>
            <span>{value}</span>
            <button>
              <FaPlus onClick={handleAddProduct} />
            </button>
          </ButtonStyled>
          <Button
            title={"Incluir"}
            onClick={handleAddToOrder}
            className={"include"}
          />
        </DivButton>
      </DivStyled>
    </>
  );
}

export default Plates;
