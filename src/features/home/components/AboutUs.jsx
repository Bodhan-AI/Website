import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';

const AboutUs = () => {
    return (
        <Container className="pt-20 pb-24 text-center scroll-mt-32" id="about">
            <SectionHeading
                title="About Us"
                highlightWord="Us"
                subtitle="Bodhan is an AI-first initiative to enable the next generation of learners."
                className="mt-10"
                parallax={true}
            />

            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed bg-white/50 p-8 rounded-3xl border border-white/60 shadow-sm backdrop-blur-sm">
                <p className="mb-6">
                   Bodhan AI is the Center of Excellence (CoE) in Artificial Intelligence for Education, incubated by IIT Madras as a Section 8 Company. 
                    It is rooted in the vision of the National Education Policy 2020, which identifies AI as a key driver of personalized, inclusive learning and future‑ready skills. Bodhan in Sanskrit means “Awakening” / “Enlightenment.”
                </p>
                <p>
                    Anchored by dedicated funding in the Union Budget 2025‑26, it stands as a flagship initiative in India’s AI‑driven education and skilling roadmap.
                    Framed within the national ambition of “Make AI in India, Make AI Work for India,” Bodhan AI is conceived as critical AI infrastructure for transforming how India learns, teaches, and builds talent at scale.
                </p>
            </div>
        </Container>
    );
};

export default AboutUs;
