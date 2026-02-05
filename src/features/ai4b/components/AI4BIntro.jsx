import React from 'react';
import { motion } from "motion/react";
import AI4BImageSection from './AI4BImageSection';

const AI4BIntro = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.5,
                bounce: 0.2
            }
        }
    };

    return (
        <section id="home" className="bg-white pt-20 text-center">
            <motion.div
                className="w-full pb-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="text-4xl md:text-6xl font-bold font-serif mb-8 max-w-5xl mx-auto px-6" variants={itemVariants}>
                    <span className="text-orange-500">Empowering </span>
                    <span className="text-blue-900">Every Voice</span>
                    <span className="text-orange-500 block mt-2">in Bharat</span>
                </motion.h1>

                <motion.p className="text-xl text-black max-w-2xl mx-auto mb-10 leading-relaxed px-6" variants={itemVariants}>
                    Open, inclusive AI that speaks the languages of India. We build multilingual models
                    that transform technology access across our diverse nation.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-6" variants={itemVariants}>
                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                        Explore Models
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-8 rounded-md transition-colors shadow-sm">
                        Join Research
                    </button>
                </motion.div>

                {/* AI4BImageSection with animation */}
                <motion.div variants={itemVariants} className="mt-20 w-full">
                    <AI4BImageSection />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AI4BIntro;
