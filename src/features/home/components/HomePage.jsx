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
// import ScrollGradient from './ScrollGradient';

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
            {/* <ScrollGradient
                direction="down"
                image={{
                    src: "data:image/svg+xml,%3Csvg width='1200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFF9F0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23050505;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='100' fill='url(%23grad1)' /%3E%3C/svg%3E",
                    alt: "Gradient transition"
                }}
                maxHeight={8}
                minHeight={2}
                animation={{ start: 100, end: 50 }}
            /> */}
            <NarrativeSection />
            <VisionMission />
            {/* <ScrollGradient
                direction="up"
                image={{
                    src: "data:image/svg+xml,%3Csvg width='1200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23050505;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='100' fill='url(%23grad2)' /%3E%3C/svg%3E",
                    alt: "Gradient transition"
                }}
                maxHeight={8}
                minHeight={2}
                animation={{ start: 100, end: 50 }}
            /> */}
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
