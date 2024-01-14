import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DishContext = createContext({});

function DishProvider({ children }) {
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [favoritedDishes, setFavoritedDishes] = useState([]);

  useEffect(() => {
    const storedFavoritedDishes =
      JSON.parse(localStorage.getItem("@foodexplorer:favoritedDishes")) || [];
    setFavoritedDishes(storedFavoritedDishes);
  }, []);

  const addToFavorites = (dish) => {
    setFavoritedDishes((prevFavoritedDishes) => {
      const updatedFavorites = [...prevFavoritedDishes, dish];
      localStorage.setItem(
        "@foodexplorer:favoritedDishes",
        JSON.stringify(updatedFavorites)
      );
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (dishId) => {
    setFavoritedDishes((prevFavoritedDishes) => {
      const updatedFavorites = prevFavoritedDishes.filter(
        (dish) => dish.id !== dishId
      );
      localStorage.setItem(
        "@foodexplorer:favoritedDishes",
        JSON.stringify(updatedFavorites)
      );
      return updatedFavorites;
    });
  };

  useEffect(() => {
    const existingDish = localStorage.getItem("@foodexplorer:selectedDishes");
    if (existingDish) {
      setSelectedDishes(
        JSON.parse(localStorage.getItem("@foodexplorer:selectedDishes"))
      );
    }
  }, []);

  const removeDish = (dishId) => {
    const updatedDishes = selectedDishes.filter(
      (selectedDish) => selectedDish.id !== dishId
    );

    setSelectedDishes(updatedDishes);

    localStorage.setItem(
      "@foodexplorer:selectedDishes",
      JSON.stringify(updatedDishes)
    );

    toast.success("Prato excluido!!");
  };

  const addToSelectedDishes = (dish) => {
    let updatedDish = [];

    const existingDish = selectedDishes.find(
      (selectedDishes) => selectedDishes.id === dish.id
    );

    if (existingDish) {
      updatedDish = selectedDishes.map((currentDish) => {
        if (currentDish.id === existingDish.id) {
          currentDish.quantity += dish.quantity;
        }
        return currentDish;
      });
    } else {
      updatedDish = [...selectedDishes, dish];
    }

    setSelectedDishes(updatedDish);

    localStorage.setItem(
      "@foodexplorer:selectedDishes",
      JSON.stringify(updatedDish)
    );
  };

  return (
    <DishContext.Provider
      value={{
        selectedDishes,
        favoritedDishes,
        addToSelectedDishes,
        removeDish,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </DishContext.Provider>
  );
}

function useDish() {
  const context = useContext(DishContext);
  return context;
}

export { DishProvider, useDish };
