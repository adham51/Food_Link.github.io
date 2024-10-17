import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { HashLink } from "react-router-hash-link";
import styles from './NavBar.module.css';
import flLogo from "../../Assets/logoidea1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currUserId, setCurrUserId] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Check local storage for user ID on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem("currUserId");
    setCurrUserId(storedUserId);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("currUserId"); // Remove user ID from local storage
    setCurrUserId(null); 
    navigate("/#hero"); 
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container-fluid">
        <div className={`d-flex justify-content-between align-items-center ${styles.navContainer}`}>
          <div className={styles.navLogo}>
            <HashLink smooth to="/#hero" className={`navbar-brand ${styles.navbarBrand}`}>
              <img src={flLogo} alt="FL Logo" className={styles.logo} />
            </HashLink>
          </div>

          {/* Hamburger Menu */}
          <div className={styles.hamburger} onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
            <ul className="navbar-nav d-flex justify-content-between align-items-center w-100">
              <li className={styles.navItem}>
                <HashLink smooth to="/#hero" className={styles.navLink} onClick={toggleNav}>Home</HashLink> 
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#about" className={styles.navLink} onClick={toggleNav}>Our Mission</HashLink>
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#how-it-works" className={styles.navLink} onClick={toggleNav}>How It Works</HashLink>
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#testimonials" className={styles.navLink} onClick={toggleNav}>Testimonials</HashLink>
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#call-to-action" className={styles.navLink} onClick={toggleNav}>About Food Waste</HashLink>
              </li>
              <li className={styles.navItem}>
                {currUserId ? (
                  <button className={`${styles.navLink} ${styles.loginButton}`} onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/Login" className={`${styles.navLink} ${styles.loginButton}`} onClick={toggleNav}>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
