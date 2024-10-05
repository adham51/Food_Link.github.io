import React from 'react';
import styles from './HeroSection.module.css';
import background from '../../Assets/hero-image.jfif'; 

export default function HeroSection() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.heroContent}>
                <h1>Connecting Surplus Food with Those in Need</h1>
                <p>Help us make a difference by donating surplus food to charities in need.</p>
                <div className={styles.ctaButtons}>
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
        </section>
    );
}
