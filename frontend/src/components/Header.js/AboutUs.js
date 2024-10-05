import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <section id="about" className={styles.aboutUs}>
            <h2>About FoodLink</h2>
            <p>FoodLink's mission is to connect surplus food from donors to charities, reducing food waste and helping those in need.</p>
            <div className={styles.impactStats}>
                <div className={styles.stat}>
                    <h3>10,000+</h3>
                    <p>Meals Donated</p>
                </div>
                <div className={styles.stat}>
                    <h3>200+</h3>
                    <p>Charities Helped</p>
                </div>
            </div>
        </section>
    );
}
