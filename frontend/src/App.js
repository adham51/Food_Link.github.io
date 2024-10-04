
import React from 'react';
import { FoodProvider } from './context/FoodContext';
import DonerDashboard from './components/DonerDashBoard/DonerDashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodDonationApp from './components/CharityDashBoard/FoodDonationApp';
import styles from './App.module.css'


const App = () => {
    return (
        // <FoodProvider>
            
        //         <DonerDashboard />
            
        // </FoodProvider>
        <div >
            <FoodDonationApp/>
        </div>
    );
};

export default App;
