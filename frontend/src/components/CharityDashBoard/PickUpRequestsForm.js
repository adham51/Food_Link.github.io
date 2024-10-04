import React, { useState } from 'react';
import axios from 'axios';
import styles from './PickUpRequestsForm.module.css';

export default function PickUpRequestForm({ selectedFoodId, onBack }) {
    const [charityId, setCharityId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle the form submission for requesting a food pickup
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!charityId) {
            setError('Please enter charity ID.');
            return;
        }

        const requestData = {
            food_id: selectedFoodId,
            charity_id: charityId,
        };

        setLoading(true);
        axios.post('/request', requestData)
            .then(() => {
                setSuccessMessage('Pickup request submitted successfully!');
                setError('');
                setCharityId(''); // Clear the charity ID
            })
            .catch(() => {
                setError('Error submitting pickup request.');
                setSuccessMessage('');
            })
            .finally(() => {
                setLoading(false); // Always run this after the request
            });
    };

    return (
        <div className={styles.container}>
            <h1>Request a Food Pickup</h1>
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button onClick={onBack} className={styles.backButton}>
                Back to Food List
            </button>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                    Charity ID:
                    <input
                        type="text"
                        value={charityId}
                        onChange={(e) => setCharityId(e.target.value)}
                        className={styles.input}
                    />
                </label>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Request'}
                </button>
            </form>
        </div>
    );
}
