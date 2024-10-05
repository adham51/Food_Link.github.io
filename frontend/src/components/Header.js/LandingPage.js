import React from 'react';
import Navbar from './NavBar';  // Assuming Navbar is already created
import HeroSection from './HeroSection';  // Import all the components
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import styles from './LandingPage.module.css';
import Footer from '../Footer/Footer';

export default function LandingPage() {
    return (
        <>
        <div className={styles.landingPage}>
            <Navbar />
            <div id="hero">
                <HeroSection />
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="how-it-works">
                <HowItWorks />
            </div>
            <div id="testimonials">
                <Testimonials />
            </div>
            <div id="call-to-action">
                <CallToAction />
            </div>
            <div id="footer">
                <Footer/>
            </div>
            </div>
        </>
    );
}
