import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Card from './Card';

import team1 from '../../../assets/team1.webp';
import team2 from '../../../assets/team2.webp';
import team3 from '../../../assets/team3.webp';
import team4 from '../../../assets/team4.webp';

const pillars = [
    {
        title: "Personalised Learning for Students",
        description: [
            "Development of adaptive learning platforms that tailor content, pacing, and difficulty to each learner’s profile, performance, and context.",
            "Use of AI to bridge learning gaps through real‑time feedback, recommendations, and remedial pathways."
        ],
        image: team1
    },
    {
        title: "Tools to Enhance Productivity for Teachers",
        description: [
            "Assessment and analytics AI‑driven assessment tools for automated grading, formative assessment, and diagnostic testing at scale.",
            "Learning analytics for teachers, institutions, and policymakers to track outcomes, identify at‑risk learners, and optimize interventions."
        ],
        image: team2
    },
    {
        title: "Curriculum and Content",
        description: [
            "Smart content generation and curation, including AI‑assisted creation of question banks, micro‑content, simulations, and multilingual materials in line with NEP 2020.",
            "Support for curriculum design that embeds AI literacy and high‑tech skills, aligned with emerging industry needs."
        ],
        image: team3
    },
    {
        title: "Digital and Virtual Learning Environments",
        description: [
            "Virtual learning environments, intelligent tutoring systems, and AI‑powered classroom tools that augment teachers rather than replace them.",
            "Integration with broader digital public infrastructure and EdTech ecosystems to ensure interoperability and reach."
        ],
        image: team4
    }
];

const WhatWeBuild = () => {
    return (
        <Container className="py-20 text-center">
            <SectionHeading
                title="What We Build"
                highlightWord="Build"
                subtitle="Bodhan's work is organised around four interconnected pillars, each designed to strengthen a different layer of India's learning ecosystem."
                className="mb-8"
                parallax={true}
            />

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-8 xl:gap-11 items-stretch">
                {pillars.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        className="max-w-sm mx-auto w-full md:max-w-none"
                        panelClassName="p-4"
                        descriptionClassName="mt-2 text-xs leading-5 text-gray-600 space-y-2"
                    />
                ))}
            </div>

            {/* Open Research Problems Section */}
            <div id="research" className="mt-16 md:mt-40 max-w-4xl mx-auto scroll-mt-40">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                    Open Research Problems in<br />
                    <span className="text-[var(--text-orange-500)]">AI for Education</span>
                </h2>

                <p className="text-gray-600 text-base md:text-lg font-inter max-w-2xl mx-auto mb-8 leading-relaxed">
                    A comprehensive agenda of 200+ research problems across Speech, Language, Vision, and Learning technologies — designed to transform how Bharat learns, teaches, and thrives.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-y border-gray-200 py-6">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-inter font-bold text-[#FF6B35] mb-1">200+</span>
                        <span className="text-gray-500 font-inter font-medium uppercase tracking-wide text-xs">Research Problems</span>
                    </div>
                    <div className="flex flex-col items-center md:border-l md:border-r border-gray-200">
                        <span className="text-4xl font-inter font-bold text-[#FF6B35] mb-1">22</span>
                        <span className="text-gray-500 font-inter font-medium uppercase tracking-wide text-xs">Indian Languages</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-inter font-bold text-[#FF6B35] mb-1">8</span>
                        <span className="text-gray-500 font-inter font-medium uppercase tracking-wide text-xs">Research Verticals</span>
                    </div>
                </div>

                <a
                    href="https://safikhansoofiyani.github.io/bodhan-ai-research/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1A1A1A] hover:bg-black text-white text-sm md:text-base font-medium py-2.5 px-6 md:py-3 md:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                    Explore Bodhan Research
                </a>
            </div>
        </Container>
    );
};

export default WhatWeBuild;
