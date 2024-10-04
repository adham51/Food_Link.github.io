import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './FoodList.module.css'; 
import foodImage from '../../Assets/food-item.jfif'; // Placeholder image

export default function FoodList({ onSelectFood }) {
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch available food donations from the backend
    useEffect(() => {
        axios.get('/available')
            .then((response) => {
                setFoodList(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error fetching food data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.container}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.container}>{error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Available Food Donations</h1>
            {foodList.length === 0 ? (
                <p>No available food donations.</p>
            ) : (
                <ul>
                    {foodList.map(food => (
                        <li className={styles.foodItem} key={food.food_id} onClick={() => onSelectFood(food.food_id)}>
                            <img 
                                src={foodImage} 
                                alt="Food Donation" 
                                className={styles.foodImage}
                            />
                            <div className={styles.foodDetails}>
                                <strong>{food.food_name}</strong>
                                <p>Quantity: {food.quantity}</p>
                                <p>Description: {food.description}</p>
                                <p>Expiration Date: {new Date(food.expiration_date).toLocaleDateString()}</p>
                                <p>Status: {food.status}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
