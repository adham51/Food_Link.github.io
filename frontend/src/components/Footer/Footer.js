import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../../Assets/facebook-icon.png'; 
import twitterIcon from '../../Assets/twitter-icon.png'; 
import instagramIcon from '../../Assets/instagram-icon.png'; 

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:contact@foodlink.com" className={styles.contactLink}>contact@foodlink.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className={styles.contactLink}>+123 456 7890</a></p>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon}>
                            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
                        </a>
                        <a href="#" className={styles.socialIcon}>
                            <img src={twitterIcon} alt="Twitter" className={styles.icon} />
                        </a>
                        <a href="#" className={styles.socialIcon}>
                            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>Privacy Policy</a> | <a href="#" className={styles.footerLink}>Terms of Service</a>
                <p>© 2020 Copyright: FOODLINK.com</p>
            </div>
        </footer>
    );
}
