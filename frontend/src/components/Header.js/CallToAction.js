import React from 'react';
import styles from './CallToAction.module.css';
import { Link } from 'react-router-dom';

export default function CallToAction() {
    return (
        <section id="cta" className={styles.callToAction}>
            <h2>Join FoodLink</h2>
            <p>Sign up to donate or receive surplus food and help us make an impact!</p>
            <div className={styles.buttonGroup}>
            <Link to="/SignUpDonor" className={styles.link}>
                    <button className={styles.btnPrimary}>Sign Up as Donor</button>
                </Link>
                <Link to="/SignUpCharity" className={styles.link}>
                    <button className={styles.btnSecondary}>Sign Up as Charity</button>
                </Link>
            </div>
            <p>Subscribe to our newsletter for updates</p>
            <div className={styles.newsletter}>
                <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
                <button className={styles.btnPrimary}>Subscribe</button>
            </div>
        </section>
    );
}
