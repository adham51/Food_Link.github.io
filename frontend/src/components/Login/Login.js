import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Header.js/NavBar';

import Footer from '../Footer/Footer';
import styles from './Login.module.css'; // Make sure to create a CSS file for styling


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', formData);
            setMessage(response.data.message);
    
            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // Save token to local storage
                localStorage.setItem('charityName', response.data.data[0].name); // Save charity/user name to local storage
    
                // Check user type and redirect accordingly
                if (response.data.data[0].user_type === 'charity') {
                    navigate('/FoodDonationApp'); // Redirect to FoodDonationApp for charity
                } 
                else if (response.data.data[0].user_type === 'donor') {
                    navigate('/DonerDashBoard'); 
                } else {
                    navigate('/FoodDonationApp'); // Redirect to FoodDonationApp for others (if applicable)
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setMessage('Error logging in. Please try again.');
        }
    };
    

    return (
        <div className={styles.container}>
            <Navbar></Navbar>
            
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"

                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
        </div>
    );
};

export default Login;