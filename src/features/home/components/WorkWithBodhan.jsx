import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import CTAButton from './CTAButton';

const WorkWithBodhan = () => {
    return (
        <Container className="py-12 scroll-mt-32" id="careers">
            <div className="max-w-[85rem] mx-auto rounded-2xl md:rounded-[3rem] px-6 py-8 md:px-24 md:py-16 text-center shadow-xl relative overflow-hidden">

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


                <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 relative z-10 text-black leading-tight tracking-tight">
                    Work with <span className="text-[var(--primary-500)]">Bodhan</span>
                </h1>
                <p className="max-w-2xl mx-auto text-base md:text-lg font-medium mb-8 md:mb-12 leading-relaxed relative z-10 text-[var(--color-15)] tracking-tight">
                    Bodhan collaborates with governments, institutions, researchers, and practitioners committed to strengthening education through responsible AI. If you would like to engage, collaborate, or join the team, we would like to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <CTAButton
                        variant="primary"
                        className="hover:opacity-80 transition-opacity"
                        href="mailto:contact@bodhan.ai"
                    >
                        Contact Us
                    </CTAButton>
                    <Link
                        to="/careers"
                        onClick={() => window.scrollTo(0, 0)}
                        className="px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-lg bg-[var(--btn-join)] hover:opacity-80 transition-opacity border-none text-white"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default WorkWithBodhan;
