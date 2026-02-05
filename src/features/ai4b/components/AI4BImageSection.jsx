import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import iitmResearchPark from '../../../assets/iitm-research-park.avif';

const AI4BImageSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={containerRef} className="w-full h-[500px] md:h-[600px] flex items-center justify-center relative overflow-hidden shadow-2xl">
            <motion.div
                style={{ scale }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src={iitmResearchPark}
                    alt="IIT Madras Research Park"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-8 left-8 text-white z-10 text-left">
                <h3 className="text-2xl font-bold mb-2">IIT Madras Research Park</h3>
                <p className="text-white/80">Home of AI4Bharat</p>
            </div>
        </section>
    );
};

export default AI4BImageSection;
