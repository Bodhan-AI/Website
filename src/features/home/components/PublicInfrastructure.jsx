import React from 'react';
import SectionHeading from './SectionHeading';
import designIcon from '../../../assets/design.avif';
import dataFirstIcon from '../../../assets/datafirst.avif';
import responsibleHumanImg from '../../../assets/responsiblehuman.avif';

const PublicInfrastructure = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <SectionHeading
                title="Built as Public Infrastructure"
                highlightWord="Public Infrastructure"
                subtitle="Bodhan AI is designed to operate as foundational infrastructure, interoperable by default and aligned with national priorities. Its systems integrate with existing platforms, respect data sovereignty, and prioritise responsible AI practices, enabling governments, institutions, and partners to build on top with confidence."
                className="mb-8"
                parallax={true}
            />

            {/* Use a Tablet/Device Mockup Container */}
            <div className="bg-[#111] rounded-[3rem] p-3 md:p-6 shadow-2xl mx-auto max-w-5xl border-8 border-[#222]">
                {/* Screen Content */}
                <div className="bg-[var(--bg-cream-100)] rounded-[2rem] p-8 md:p-12 overflow-hidden h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-3xl flex flex-col sm:flex-row items-center text-left gap-6">
                            <div className="w-32 h-32 flex-shrink-0 flex items-center justify-start">
                                <img src={designIcon} alt="Interoperable" className="w-full h-full object-contain object-left" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Interoperable by Design</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Built to integrate seamlessly with existing education platforms, standards, and workflows.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl flex flex-col sm:flex-row items-center text-left gap-6">
                            <div className="w-32 h-32 flex-shrink-0 flex items-center justify-start">
                                <img src={dataFirstIcon} alt="Data Sovereignty" className="w-full h-full object-contain object-left" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Data Sovereignty First</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Respects national data policies, local governance, and institutional ownership while enabling secure, scalable intelligence.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl flex flex-col justify-between text-left md:col-start-2 md:row-start-1 md:row-span-2 h-full">
                            <div className="w-full aspect-[4/3] bg-[var(--bg-orange-100)] rounded-2xl flex items-center justify-center overflow-hidden mb-6">
                                <img src={responsibleHumanImg} alt="Responsible AI" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Responsible and Human-Centred</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Designed for transparency, explainability, and trust, ensuring AI supports educators and learners without replacing judgment.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicInfrastructure;
