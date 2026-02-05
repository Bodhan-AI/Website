import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Card from './Card';

import team1 from '../../../assets/team1.png';
import team2 from '../../../assets/team2.png';
import team3 from '../../../assets/team3.png';
import team4 from '../../../assets/team4.png';

const WhatWeBuild = () => {
    return (
        <Container className="pt-20 pb-24 text-center">
            <SectionHeading
                title="What We Build"
                highlightWord="Build"
                subtitle="Bodhan's work is organised around four interconnected pillars, each designed to strengthen a different layer of India's learning ecosystem."
                className="mb-8"
                parallax={true}
            />

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        title: "Personalised Learning for Students",
                        description: "Development of adaptive learning platforms that tailor content, pacing, and difficulty to each learner’s profile, performance, and context. Use of AI to bridge learning gaps through real‑time feedback, recommendations, and remedial pathways.",
                        image: team1
                    },
                    {
                        title: "Productivity Tools for Teachers",
                        description: "Assessment and analytics AI‑driven assessment tools for automated grading, formative assessment, and diagnostic testing at scale. Learning analytics for teachers, institutions, and policymakers to track outcomes, identify at‑risk learners, and optimize interventions.",
                        image: team2
                    },
                    {
                        title: "Curriculum and Content Systems",
                        description: "Smart content generation and curation, including AI‑assisted creation of question banks, micro‑content, simulations, and multilingual materials in line with NEP 2020. Support for curriculum design that embeds AI literacy and high‑tech skills, aligned with emerging industry needs.",
                        image: team3
                    },
                    {
                        title: "Virtual Learning Environments",
                        description: "Virtual learning environments, intelligent tutoring systems, and AI‑powered classroom tools that augment teachers rather than replace them. Integration with broader digital public infrastructure and EdTech ecosystems to ensure interoperability and reach.",
                        image: team4
                    }
                ].map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>
        </Container>
    );
};

export default WhatWeBuild;
