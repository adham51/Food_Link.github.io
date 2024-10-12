import React, { useEffect, useRef } from 'react';
import styles from './AboutUs.module.css';
import bag from '../../Assets/bag2.png'; // Imported image


export default function AboutUs() {
    const imageRef = useRef(null);
    const topTextRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                imageRef.current.classList.add(styles.revealImage);
                topTextRef.current.classList.add(styles.revealText);
                leftTextRef.current.classList.add(styles.revealRightLeft);
                rightTextRef.current.classList.add(styles.revealRightLeft);
            } else {
                imageRef.current.classList.remove(styles.revealImage);
                topTextRef.current.classList.remove(styles.revealText);
                leftTextRef.current.classList.remove(styles.revealRightLeft);
                rightTextRef.current.classList.remove(styles.revealRightLeft);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="our-mission" className={styles.aboutUs}>
            {/* Our Mission Section */}
            <div className={styles.missionTitle}>
                <div className={styles.titleRectangle}></div>
                <h2>OUR MISSION</h2>
            </div>
            <div className={styles.missionText}>
                <p>Food Link is a social impact company on a mission to inspire and empower everyone to fight food waste together.</p>
            </div>

            {/* Why Use FoodLink */}
            <div ref={topTextRef} className={styles.topText}>
                <h2>Why Use</h2> 
                <h2 className={styles.topTextFL}>Food Link</h2>
            </div>

            {/* Left Text with Earth Icon */}
            <div ref={leftTextRef} className={styles.textLeft}>
                <p><i className="fas fa-globe"></i> Help the environment by reducing food waste</p>
            </div>

            {/* Right Text with Pizza Icon */}
            <div ref={rightTextRef} className={styles.textRight}>
                <p>Rescue food near you <i className="fas fa-pizza-slice"></i></p>
            </div>

            {/* Image */}
            <div className={styles.imageContainer}>
                <img src={bag} alt="Food Link Logo" ref={imageRef} className={styles.missionImage} />
            </div>
        </section>
    );
}
