import React from 'react';
import Container from './Container';
import CTAButton from './CTAButton';

const WorkWithBodhan = () => {
    return (
        <Container className="py-24 scroll-mt-32" id="careers">
            <div className="w-full rounded-[3rem] p-12 md:p-24 text-center shadow-xl relative overflow-hidden bg-[var(--primary-100)]">

                {/* Background layers */}
                <div className="absolute inset-0 z-0">
                    <div className="cta-bg-gradient"></div>
                    <div className="cta-noise"></div>
                </div>


                <h2 className="text-5xl md:text-6xl font-semibold mb-8 relative z-10 text-gray-900">
                    Work with <span className="text-[var(--text-orange-500)]">Bodhan</span>
                </h2>
                <p className="max-w-3xl mx-auto text-base md:text-lg font-medium mb-12 leading-relaxed relative z-10 text-gray-800">
                    Bodhan collaborates with governments, institutions, researchers, and practitioners committed to strengthening education through responsible AI. If you would like to engage, collaborate, or join the team, we would like to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <CTAButton variant="primary" className="hover:opacity-80 transition-opacity">
                        Contact Us
                    </CTAButton>
                    <CTAButton
                        variant="primary"
                        className="!bg-[var(--btn-join)] !hover:bg-[var(--btn-join)] hover:opacity-80 transition-opacity border-none"
                    >
                        Apply to Join
                    </CTAButton>
                </div>
            </div>
        </Container>
    );
};

export default WorkWithBodhan;
