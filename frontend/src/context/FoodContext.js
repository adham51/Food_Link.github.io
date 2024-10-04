import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);

  const addFoodItem = (newFood) => {
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
  };

  return (
    <FoodContext.Provider value={{ foodList, addFoodItem }}>
      {children}
    </FoodContext.Provider>
  );
};
