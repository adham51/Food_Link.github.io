import { Link } from "react-router-dom";
import logo from "../../Assets/logo.jfif";
import styles from './NavBar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbar}`}>
      <div className="container-fluid">
        <Link to={"/LandingPage"} className={`navbar-brand ${styles.navbarBrand}`}>
          <img src={logo} alt="FoodLink Logo" className={styles.logo} />
          FoodLink
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/HeroSection"} className="nav-link">Hero Section</Link>
            </li>
            <li className="nav-item">
              <Link to={"/AboutUs"} className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to={"/HowItWorks"} className="nav-link">How It Works</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Testimonials"} className="nav-link">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to={"/CallToAction"} className="nav-link">Call to Action</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Login"} className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
