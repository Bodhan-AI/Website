import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import NarrativeSection from './NarrativeSection';
import VisionMission from './VisionMission';
import WhatWeBuild from './WhatWeBuild';
import PublicInfrastructure from './PublicInfrastructure';
import WorkWithBodhan from './WorkWithBodhan';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Team from './Team';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <NarrativeSection />
            <VisionMission />
            <div className="w-full bg-[var(--bg-cream-50)] text-[#1A1A1A] relative">
                <AboutUs />
                <WhatWeBuild />
                <PublicInfrastructure />
                <Team />
                <WorkWithBodhan />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
