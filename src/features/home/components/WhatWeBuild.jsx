import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Card from './Card';

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
                        description: "Adaptive learning systems that respond to each learner's pace, performance, and context. AI-driven feedback, recommendations, and remedial pathways help close learning gaps in real time, at scale."
                    },
                    {
                        title: "Productivity Tools for Teachers",
                        description: "AI-enabled assessment, diagnostics, and analytics that reduce administrative burden and surface meaningful insights. Teachers gain clarity on learner progress, risks, and interventions without losing agency."
                    },
                    {
                        title: "Curriculum and Content Systems",
                        description: "AI-assisted creation and curation of question banks, micro-content, simulations, and multilingual learning materials. Curriculum design support that embeds AI literacy and aligns with evolving industry needs."
                    },
                    {
                        title: "Virtual Learning Environments",
                        description: "Intelligent tutoring systems and AI-powered classroom tools that augment, not replace, educators. Seamless integration with India's digital public infrastructure and the broader EdTech ecosystem."
                    }
                ].map((item, index) => (
                    <Card key={index} title={item.title} description={item.description} />
                ))}
            </div>
        </Container>
    );
};

export default WhatWeBuild;
