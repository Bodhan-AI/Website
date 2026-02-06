import React from 'react';
import Container from './Container';
import CTAButton from './CTAButton';

const WorkWithBodhan = () => {
    return (
        <Container className="py-16 scroll-mt-32" id="careers">
            <div className="w-full rounded-[3rem] p-8 md:p-24 text-center shadow-xl relative overflow-hidden">

                {/* Background layers */}
                <div className="absolute inset-0 z-0">
                    <div className="cta-bg-gradient"></div>
                    <div className="cta-blur-rotate-1">
                        <div className="cta-conic-1"></div>
                    </div>
                    <div className="cta-blur-rotate-2">
                        <div className="cta-conic-2"></div>
                    </div>
                    <div className="cta-noise"></div>
                </div>


                <h1 className="text-6xl font-medium mb-8 relative z-10 text-black leading-tight tracking-tight">
                    Work with <span className="text-[var(--primary-500)]">Bodhan</span>
                </h1>
                <p className="max-w-2xl mx-auto text-l font-medium mb-12 leading-relaxed relative z-10 text-[var(--color-15)] tracking-tight">
                    Bodhan collaborates with governments, institutions, researchers, and practitioners committed to strengthening education through responsible AI. If you would like to engage, collaborate, or join the team, we would like to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <CTAButton
                        variant="primary"
                        className="hover:opacity-80 transition-opacity"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeAukx8zOMY18rp_a2B7TNMbKWR6BKV3pWSWt3aXpAfDHBRlw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
