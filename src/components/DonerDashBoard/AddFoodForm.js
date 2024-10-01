import React, { useState, useContext } from 'react';
import { FoodContext } from '../../context/FoodContext';

const AddFoodForm = () => {
    const { addFoodItem } = useContext(FoodContext);
    const [foodName, setFoodName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            id: Math.random(), // Generate a random ID for now
            name: foodName,
            quantity: quantity,
        };

        addFoodItem(newFood);
        setFoodName('');
        setQuantity('');
    };

    return (
        <div className="add-food-form">
            <h2 className="mb-4">Add New Food Donation</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3"> 
                    <label htmlFor="foodName" className="form-label custom-label">Food Name:</label>
                    <input
                        type="text"
                        id="foodName"
                        className="form-control" 
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3"> 
                    <label htmlFor="quantity" className="form-label custom-label">Quantity:</label>
                    <input
                        type="text"
                        id="quantity"
                        className="form-control" 
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Add Food</button>
            </form>
        </div>
    );
};

export default AddFoodForm;
