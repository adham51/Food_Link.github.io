
import React from 'react';
import { FoodProvider } from './context/FoodContext';
import DonerDashboard from './components/DonerDashBoard/DonerDashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <FoodProvider>
            
                <DonerDashboard />
            
        </FoodProvider>
    );
};

export default App;
