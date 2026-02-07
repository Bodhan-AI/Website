import React, { useState, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform } from "motion/react";
import { Link } from 'react-router-dom';
import Icon from '../../../assets/Icon.png';

const ease = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [maxScroll, setMaxScroll] = useState(500);
  const [heights, setHeights] = useState(['6rem', '20rem']);

  useEffect(() => {
    const updateResponsiveValues = () => {
      if (window.innerWidth < 768) {
        setMaxScroll(300);
        setHeights(['4rem', '6rem']);
      } else {
        setMaxScroll(500);
        setHeights(['6rem', '20rem']);
      }
    };

    updateResponsiveValues();
    window.addEventListener('resize', updateResponsiveValues);
    return () => window.removeEventListener('resize', updateResponsiveValues);
  }, []);

  const arcHeight = useTransform(scrollY, [0, maxScroll], heights);

  // Hero logo scroll animation
  const heroLogoScale = useTransform(scrollY, [0, 250], [1, 0.3]);
  const heroLogoOpacity = useTransform(scrollY, [150, 280], [1, 0]);

  return (
    <div className="relative w-full hero-radial-gradient bg-orange-50 overflow-hidden flex flex-col items-center">

      <div
        className="absolute left-0 right-0 top-[250px] md:top-[300px] z-0 h-[700px] md:h-[850px] lg:h-[1000px]"
        style={{
          WebkitMaskImage: `url(https://framerusercontent.com/images/KrtEpetX0JndZB1QUZVp2ZKCDiY.png?width=2400&height=1080)`,
          WebkitMaskSize: 'cover',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: '50%',
          maskImage: `url(https://framerusercontent.com/images/KrtEpetX0JndZB1QUZVp2ZKCDiY.png?width=2400&height=1080)`,
          maskSize: 'cover',
          maskRepeat: 'no-repeat',
          maskPosition: '50%'
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(32% 25% at 50% 45%, #faeacd 0%, #faaf01 49.7297%, #de5900 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16 pt-[50px] md:pt-[60px] lg:pt-[70px] pb-[40px] md:pb-[50px] lg:pb-[60px] max-w-[880px] mx-auto">

        {/* Step 1: Logo emerges from center */}
        <Motion.img
          src={Icon}
          alt="Bodhan Logo"
          initial={{ opacity: 0, scale: 0.4, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          style={{ scale: heroLogoScale, opacity: heroLogoOpacity }}
          className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mb-4"
        />

        {/* Step 2: Pill drops in */}
        <Motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          className="relative bg-white/70 backdrop-blur-md border border-white/40 px-5 py-2 rounded-full mb-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <span className="relative z-10 text-[#525252] font-medium tracking-wide text-sm">
            Building India's Future, One Learner at a Time.
          </span>
          <span className="absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#ff6207]/60 to-transparent"></span>
        </Motion.div>

        {/* Step 3: Title rises up */}
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
          className="text-5xl md:text-7xl lg:text-[6rem] leading-tight font-400 text-[#0a0a0a] tracking-tight mb-2"
        >
          Bodhan<span className="text-[#ff6207]">.</span><span className="text-[#ff6207]">AI</span>
        </Motion.h1>

        {/* Step 4: Subtitle fades in */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 2.4 }}
          className="text-[#525252] text-xs md:text-sm lg:text-base tracking-[0.15em] uppercase font-medium mb-6 text-center"
        >
          Centre of Excellence in AI for Education
        </Motion.p>

        {/* Step 5: Button slides up */}
        <Motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 2.8 }}
          className="bg-[#0a0a0a] text-white text-sm md:text-base font-medium py-3 px-7 rounded-[10px] hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px cursor-pointer"
          onClick={() => document.getElementById('narrative')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore with Us
        </Motion.button>

      </div>

      {/* Semi-circle gradient glow below button */}
      <div
        className="relative z-[1] w-[90%] md:w-[70%] lg:w-[60%] h-[120px] md:h-[160px] lg:h-[200px] -mt-[60px] md:-mt-[80px]"
        style={{
          background: 'radial-gradient(ellipse 50% 80% at 50% 0%, #faeacd 0%, #faaf01 30%, #de5900 60%, transparent 100%)',
          opacity: 0.35,
          filter: 'blur(40px)',
        }}
      ></div>

      <Motion.img src="https://framerusercontent.com/images/7JW5hiKTuIExiSp00XQILMZFt8.png?width=1920&amp;height=676" srcset="https://framerusercontent.com/images/7JW5hiKTuIExiSp00XQILMZFt8.png?scale-down-to=512&amp;width=1920&amp;height=676 512w,https://framerusercontent.com/images/7JW5hiKTuIExiSp00XQILMZFt8.png?scale-down-to=1024&amp;width=1920&amp;height=676 1024w,https://framerusercontent.com/images/7JW5hiKTuIExiSp00XQILMZFt8.png?width=1920&amp;height=676 1920w" alt="" style={{ height: arcHeight }} className="w-full relative flex-shrink-0"></Motion.img>
    </div>
  );
};

export default HeroSection;
