import React from 'react';
import Container from './Container';
import CTAButton from './CTAButton';

const WorkWithBodhan = () => {
    return (
        <Container className="py-24">
            <div className="w-full rounded-[3rem] bg-gradient-to-br from-[var(--bg-gradient-start)] via-[var(--bg-gradient-mid)] to-[var(--bg-gradient-end)] animate-gradient p-12 md:p-24 text-center shadow-xl relative overflow-hidden">
                {/* Override heading for exact visual fidelity of this section */}
                <div className="absolute top-0 left-0 w-full h-full z-0"></div> {/* Placeholder for structure */}

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
