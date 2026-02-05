import React from 'react';
import { Edit2 } from 'lucide-react';
import content1 from '../../../assets/content1.avif';
import content2 from '../../../assets/content2.avif';
import content3 from '../../../assets/content3.avif';

const AI4BAbout = () => {
    return (
        <div id="about-us" className="bg-white">
            {/* Origin Section */}
            <section className="py-20 px-6">
                <div className="w-full px-4 md:px-12">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                                Origin
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-6">
                                Building India's Language AI
                            </h2>
                            <p className="text-lg text-black-700 leading-relaxed mb-6">
                                AI4Bharat is a research lab and open-source initiative founded at
                                <span className="italic font-medium"> IIT Madras in 2019</span>. We build AI models,
                                datasets, and tools tailored for Indian languages.
                            </p>
                            <p className="text-lg text-black-700 leading-relaxed mb-6">
                                AI4Bharat was set up by <span className="font-medium">Prof. Mitesh Khapra,
                                    Prof. Pratyush Kumar, Anoop Kunchukuttan</span> and <span className="font-medium">Vivek Raghavan</span>.
                            </p>
                            <p className="text-sm text-black-500 leading-relaxed">
                                We operate as a non-profit, supported by partners such as EkStep Foundation,
                                Nilekani Philanthropies, Microsoft Research, Google, Yotta, CDAC and the
                                Ministry of Electronics and Information Technology, Government of India.
                            </p>
                        </div>
                        <div className="flex-1 w-full flex justify-center">
                            <div className=" h-90 w-90 rounded-xl overflow-hidden">
                                <img src={content1} alt="AI4B Origin" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section (Moved to Middle, Layout Opposite: Image-Left) */}
            <section className="py-20 px-6 bg-gray-50/50">
                <div className="w-full px-4 md:px-12">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 w-full flex justify-center">
                            <div className="w-full max-w-[600px] h-auto rounded-xl overflow-hidden">
                                <img src={content2} alt="AI4B Mission" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                                Mission
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-6 leading-tight">
                                Achieve AI equity between Indic Languages & English
                            </h2>
                            <p className="text-lg text-black-700 leading-relaxed mb-6">
                                AI4Bharat exists to address the disadvantage faced by users of Indian languages
                                in accessing high-quality AI solutions, especially compared to English.
                            </p>
                            <p className="text-lg text-black-700 leading-relaxed mb-6">
                                The initiative's mission is to bring parity between AI technologies in Indian
                                languages and English, enabling India's linguistic diversity to flourish.
                            </p>
                            <p className="text-lg text-black-700 leading-relaxed">
                                They consider open resources for Indian language AI a digital public good,
                                aiming to provide equitable access for all Indians.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section (Moved to Last) */}
            <section className="py-20 px-6">
                <div className="w-full px-4 md:px-12">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                                Vision
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-6 leading-tight">
                                Empowering India's DPI for Language Technology
                            </h2>
                            <p className="text-lg text-black-700 leading-relaxed mb-6">
                                We envision AI4Bharat as the backbone of India's digital public infrastructure for
                                language technology. Our long-term goal is to empower millions by making AI
                                accessible in every major Indian language, reducing the digital divide.
                            </p>
                            <p className="text-lg text-black-700 leading-relaxed">
                                We aim to achieve true parity in AI performance between Indian languages and English,
                                creating an inclusive compute ecosystem where researchers and startups can innovate.
                            </p>
                        </div>
                        <div className="flex-1 w-full flex justify-center">
                            <div className="w-full max-w-[600px] h-auto rounded-xl overflow-hidden">
                                <img src={content3} alt="AI4B Vision" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AI4BAbout;
