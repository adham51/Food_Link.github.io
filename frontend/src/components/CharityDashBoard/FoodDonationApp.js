import React, { useState } from 'react';
import FoodList from './FoodList';
import PickUpRequestForm from './PickUpRequestsForm';
import styles from './FoodDonationApp.module.css';

export default function FoodDonationApp() {
    const [selectedFoodId, setSelectedFoodId] = useState(null);

    const handleFoodSelect = (foodId) => {
        setSelectedFoodId(foodId);
    };

    return (
        <div className={styles.container}>
            {!selectedFoodId ? (
                <FoodList onSelectFood={handleFoodSelect} />
            ) : (
                <PickUpRequestForm selectedFoodId={selectedFoodId} onBack={() => setSelectedFoodId(null)} />
            )}
        </div>
    );
}
