import React from 'react';
import { motion } from "motion/react";
import SectionHeading from './SectionHeading';
import designIcon from '../../../assets/design.avif';
import dataFirstIcon from '../../../assets/datafirst.avif';
import responsibleHumanImg from '../../../assets/responsiblehuman.avif';
import border from '../../../assets/border.png';

const PublicInfrastructure = () => {

    const easeCinematic = [0.16, 1, 0.3, 1];


   const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.65
    }
  }
};


    const revealTopLeft = {
        hidden: {
            x: -350,
            y: -20,
            opacity: 0,
            scale: 0.92,
            rotate: -8,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 2.0,
                ease: easeCinematic
            }
        }
    };


    const revealBottomLeft = {
        hidden: {
            x: -420,
            y: 40,
            opacity: 0,
            scale: 0.92,
            rotate: 7,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 2.3,
                ease: easeCinematic
            }
        }
    };


    const revealRightBig = {
        hidden: {
            x: 450,
            y: 30,
            opacity: 0,
            scale: 0.88,
            rotate: 10,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 2.5,
                ease: easeCinematic
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 sm:py-32 text-center">

            <SectionHeading
                title="Built as Public Infrastructure"
                highlightWord="Public Infrastructure"
                subtitle="Bodhan AI is designed to operate as foundational infrastructure, interoperable by default and aligned with national priorities. Its systems integrate with existing platforms, respect data sovereignty, and prioritise responsible AI practices, enabling governments, institutions, and partners to build on top with confidence."
                className="mb-8"
                parallax={true}
            />

            {/* 🟢 TABLET STAGE */}
            <div className="max-w-5xl mx-auto relative px-4 sm:px-6 md:px-0">


                {/* 🟡 SCREEN CONTENT */}
                <div className="bg-[var(--bg-cream-100)] rounded-[2rem] p-8 md:p-12">

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >

                        {/* Feature 1 */}
                        <motion.div
                            className="bg-white p-8 rounded-3xl flex flex-col sm:flex-row items-center text-left gap-6"
                            variants={revealTopLeft}
                        >
                            <div className="w-[30%] max-w-[150px] aspect-square flex-shrink-0 flex items-center justify-start">
                                <img src={designIcon} alt="Interoperable" className="w-full h-full object-contain object-left" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Interoperable by Design</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Built to integrate seamlessly with existing education platforms, standards, and workflows.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            className="bg-white p-8 rounded-3xl flex flex-col sm:flex-row items-center text-left gap-6"
                            variants={revealBottomLeft}
                        >
                            <div className="w-[30%] max-w-[150px] aspect-square flex-shrink-0 flex items-center justify-start">
                                <img src={dataFirstIcon} alt="Data Sovereignty" className="w-full h-full object-contain object-left" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Data Sovereignty First</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Respects national data policies, local governance, and institutional ownership while enabling secure, scalable intelligence.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            className="bg-white p-8 rounded-3xl flex flex-col justify-between text-left md:col-start-2 md:row-start-1 md:row-span-2 h-full"
                            variants={revealRightBig}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-full aspect-[4/3] bg-[var(--bg-orange-100)] rounded-2xl flex items-center justify-center overflow-hidden mb-6">
                                <img src={responsibleHumanImg} alt="Responsible AI" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Responsible and Human-Centred</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Designed for transparency, explainability, and trust, ensuring AI supports educators and learners without replacing judgment.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

                {/* 🔵 TABLET PNG OVERLAY */}
                <img
                    src={border}
                    alt="tablet frame"
                    className="pointer-events-none absolute inset-0 w-full h-full object-fill scale-[1.08] z-20"
                />

            </div>
        </div>
    );
};

export default PublicInfrastructure;
