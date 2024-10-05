import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Header.js/NavBar';
import HeroSection from './components/Header.js/HeroSection';
import HowItWorks from './components/Header.js/HowItWorks';
import Testimonials from './components/Header.js/Testimonials';
import CallToAction from './components/Header.js/CallToAction';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';
import AboutUs from './components/Header.js/AboutUs';
import LandingPage from './components/Header.js/LandingPage';
import SignUpDonor from './components/SignUp/SignUpDonor/SignUpDonor';
import SignUpCharity from './components/SignUp/SignUpCharityy/SignUpCharity';
import Login from './components/Login/Login';
import FoodDonationApp from './components/CharityDashBoard/FoodDonationApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {path: "*", element: <Error></Error>},
  {path: "/navbar", element: <Navbar></Navbar>},
  {path: "/HeroSection", element: <HeroSection></HeroSection>},
  {path: "/HowItWorks", element: <HowItWorks></HowItWorks>},
  {path: "/Testimonials", element: <Testimonials></Testimonials>},
  {path: "/CallToAction", element: <CallToAction></CallToAction>},
  {path: "/AboutUs", element: <AboutUs></AboutUs>},
  {path: "/LandingPage", element: <LandingPage></LandingPage>},
  {path: "/SignUpDonor", element: <SignUpDonor></SignUpDonor>},
  {path: "/SignUpCharity", element: <SignUpCharity></SignUpCharity>},
  {path: "/Login", element: <Login></Login>},
  {path: "/FoodDonationApp", element: <FoodDonationApp></FoodDonationApp>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);