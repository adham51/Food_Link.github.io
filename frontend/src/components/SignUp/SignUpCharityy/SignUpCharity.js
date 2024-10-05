import React, { useState } from 'react';
import axios from 'axios';
import styles from './SignUpCharity.module.css'; // Make sure to create a CSS file for styling


const SignUpCharity = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

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
            const response = await axios.post('/registercharity', formData);
            setMessage(response.data.message);
            // Optionally, reset the form after successful submission
            setFormData({ name: '', email: '', password: '' });
        } catch (error) {
            console.error('Error registering charity:', error);
            setMessage('Error registering charity. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            
            <h2>Sign Up as Charity</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
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
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default SignUpCharity;
