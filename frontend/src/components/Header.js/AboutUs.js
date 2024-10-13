import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    const [totalMeals, setTotalMeals] = useState(0);
    const [totalCharities, setTotalCharities] = useState(0);

    
    useEffect(() => {
        axios.get('/request/totalmeals')
            .then((response) => {
                setTotalMeals(response.data.totalMeals);
            })
            .catch((error) => {
                console.error('Error fetching total meals:', error);
            });

        axios.get('/request/totalcharities')
            .then((response) => {
                setTotalCharities(response.data.totalCharities);
            })
            .catch((error) => {
                console.error('Error fetching total charities:', error);
            });
    }, []); 

    return (
        <section id="about" className={styles.aboutUs}>
            <h2>About FoodLink</h2>
            <p>FoodLink's mission is to connect surplus food from donors to charities, reducing food waste and helping those in need.</p>
            <div className={styles.impactStats}>
                <div className={styles.stat}>
                    <h3>{totalMeals}+</h3>
                    <p>Meals Donated</p>
                </div>
                <div className={styles.stat}>
                    <h3>{totalCharities}+</h3>
                    <p>Charities Helped</p>
                </div>
            </div>
        </section>
    );
}