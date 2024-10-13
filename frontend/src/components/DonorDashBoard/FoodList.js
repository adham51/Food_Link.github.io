import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import './FoodItem.css'
const FoodList = ({ foodList }) => {
    const [count, setCount] = useState(foodList.length)

    
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1); // Update state using previous state
      };
      if(foodList.length !== count){
        incrementCount();
      }
    return (
        <div className="row">
            {foodList.map((food, index) => (
                <FoodItem key={food.id || index} food={food} index={index} />
            ))}
        </div>
    );
};

export default FoodList;
