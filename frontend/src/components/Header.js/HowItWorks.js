import React from 'react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.howItWorks}>
            <h2>How It Works</h2>
            <div className="steps">
                <div className="step">
                    <h3>For Donors</h3>
                    <p>List surplus food and coordinate pick-ups easily through our platform.</p>
                </div>
                <div className="step">
                    <h3>For Charities</h3>
                    <p>Browse available food, request items, and arrange pick-ups.</p>
                </div>
            </div>
        </section>
    );
}
