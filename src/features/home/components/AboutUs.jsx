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
                className="mb-12"
                parallax={true}
            />

            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed bg-white/50 p-8 rounded-3xl border border-white/60 shadow-sm backdrop-blur-sm">
                <p className="mb-6">
                    This section will contain detailed information about what will be created through Bodhan.
                    Our mission is to democratize access to quality education through cutting-edge AI technology,
                    creating a personalized learning ecosystem for every student in India.
                </p>
                <p>
                    From intelligent tutoring systems to productivity tools for educators, Bodhan aims to
                    bridge the gap between traditional schooling and the future of learning.
                </p>
            </div>
        </Container>
    );
};

export default AboutUs;
