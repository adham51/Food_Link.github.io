import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FoodContext = createContext();



export const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);
  const [currUserId, setCurrUserID] = useState(7);


  // Fetch food items from the backend when the component mounts
  // useEffect(() => {
  //   const fetchFoodItems = async () => {
  //     try {
  //       const response = await axios.get("/available"); // Update this URL as necessary
  //       setFoodList(response.data); // Assuming response.data is an array of food items
  //     } catch (error) {
  //       console.error("Error fetching food items:", error);
  //     }
  //   };

  //   fetchFoodItems();
  // }, []);

  const addFoodItem = async (newFood) => {
    try {
      const response = await axios.post("http://localhost:3003", newFood); // Update this URL as necessary
      setFoodList((prevFoodList) => [...prevFoodList, response.data]); // Assuming response.data is the newly added food item
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  };

  // Fetch food items for the current user
useEffect(() => {
  const fetchFoodItems = async () => {
      if (currUserId) {
          try {
              const response = await axios.get(`/doner/${currUserId}`); // Use the user ID
              setFoodList(response.data); // Set food list with the user's food items
          } catch (error) {
              console.error("Error fetching food items:", error);
          }
      }
  };

  fetchFoodItems();
}, [currUserId]);


  return (
    <FoodContext.Provider value={{ foodList, addFoodItem, currUserId}}>
      {children}
    </FoodContext.Provider>
  );
};
