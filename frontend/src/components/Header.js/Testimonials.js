import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <section id="testimonials" className={styles.testimonials}>
            <h2>What People Say</h2>
            <div className="testimonial">
                <p>"FoodLink helped our organization feed hundreds of families. It’s such a wonderful initiative!"</p>
                <h4>- Charity A</h4>
            </div>
            <div className="testimonial">
                <p>"I’ve been able to donate surplus food regularly, knowing it’s making a real impact."</p>
                <h4>- Donor B</h4>
            </div>
        </section>
    );
}
