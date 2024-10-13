import React, { useState, useEffect } from 'react';
import FoodList from './FoodList';
import PickUpRequestForm from './PickUpRequestsForm';
import styles from './FoodDonationApp.module.css';
import CharityNav from './CharityNav';
import { Navigate, useNavigate } from 'react-router';

export default function FoodDonationApp() {
    const [selectedFoodId, setSelectedFoodId] = useState(null);
    const [charityName, setCharityName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        
        const storedCharityName = localStorage.getItem('charityName');
        if (storedCharityName) {
            setCharityName(storedCharityName);
        }
    }, []);

    const handleFoodSelect = (foodId) => {
        setSelectedFoodId(foodId);
    };

    const handleBackToFoodList = () => {
        setSelectedFoodId(null); 
    };

    const handleLogout = () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('charityName');
        navigate('/');
    };

    const handleViewFoodList = () => {
        
        setSelectedFoodId(null);
    };

    return (
        <div className={styles.container}>
            
            <CharityNav 
                charityName={charityName} 
                onLogout={handleLogout} 
                onViewFoodList={handleViewFoodList} 
            />

            
            {!selectedFoodId ? (
                <FoodList onSelectFood={handleFoodSelect} />
            ) : (
                <PickUpRequestForm selectedFoodId={selectedFoodId} onBack={handleBackToFoodList} />
            )}
        </div>
    );
}