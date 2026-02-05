import React from 'react';
import { motion as Motion } from "motion/react";


const HeroSection = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-screen bg-[var(--navbar-bg)] overflow-hidden flex flex-col items-center">
      {/* Background Gradient Mesh Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#FFDCA8] rounded-full blur-[120px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-[#FFC288] rounded-full blur-[100px] opacity-30 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-1/3 w-[60vw] h-[40vh] bg-white/80 blur-[80px]"></div>
      </div>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4 -mt-20 pb-20">

        {/* Badge - "Title" logic: Ease out bezier 0.12, 0.23, 0.5, 1 time 1s delay 3s */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.12, 0.23, 0.5, 1.0],
            delay: 3
          }}
          className="bg-white/60 backdrop-blur-sm border border-white/50 px-6 py-2 rounded-full shadow-sm mb-8"
        >
          <span className="text-[var(--color-11)] font-medium tracking-wide text-sm">
            Building India's Future, One Learner at a Time.
          </span>
        </Motion.div>

        {/* Heading - "bodhan" & "ai": Spring, time 3s, bounce 0.2s, delay 0.6s
                     ".": Bezier, time 1.1s, delay 1.5s */}
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-tight font-semibold text-[var(--color-9)] tracking-tight mb-2 flex items-center justify-center">
          <Motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              bounce: 0.2,
              delay: 0.6
            }}
          >
            bodhan
          </Motion.span>
          <Motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.12, 0.23, 0.5, 1.0],
              delay: 1.5
            }}
            className="text-[var(--brand-orange)]"
          >
            .
          </Motion.span>
          <Motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 3,
              bounce: 0.2,
              delay: 0.6
            }}
            className="text-orange-500"
          >
            ai
          </Motion.span>
        </h1>

        {/* Subheading & Button - Spring, time 2s, bounce 0.2s, delay 2s */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            bounce: 0.2,
            delay: 2
          }}
          className="flex flex-col items-center"
        >
          <p className="text-[var(--color-11)] text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase font-medium mb-8 md:mb-12 text-center max-w-[90%] md:max-w-none">
            Centre of Excellence in AI for Education
          </p>

          <button className="bg-[var(--color-20)] text-white text-sm md:text-base font-medium py-2.5 px-6 md:py-3 md:px-8 rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore with Us
          </button>
        </Motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
