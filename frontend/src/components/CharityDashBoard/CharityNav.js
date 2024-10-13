import React from 'react';
import styles from './CharityNav.module.css';

const CharityNav = ({ charityName, onLogout, onViewFoodList }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLeft}>
                <h2 className={styles.navLeft}>{charityName}</h2> {/* Dynamically displaying the charity name */}
            </div>
            <div className={styles.navRight}>
                <button onClick={onViewFoodList}>Available Food List</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default CharityNav;