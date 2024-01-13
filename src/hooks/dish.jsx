import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DishContext = createContext({});

function DishProvider({ children }) {
  const [selectedDishes, setSelectedDishes] = useState([]);

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
      value={{ selectedDishes, addToSelectedDishes, removeDish }}
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
