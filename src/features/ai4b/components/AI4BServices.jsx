import React from 'react';
import { Map, Brain, FolderOpen, Handshake } from 'lucide-react';

const AI4BServices = () => {
    const services = [
        {
            icon: <Map className="w-12 h-12 text-blue-900 mb-6" />,
            title: "Building India's Language Data Commons",
            description: "Curating and annotating datasets across 22 scheduled Indian languages, including speech, text and image datasets."
        },
        {
            icon: <Brain className="w-12 h-12 text-orange-500 mb-6" />,
            title: "Core Models Powering Indic AI",
            description: "Building foundational models in translation, automatic speech recognition, transliteration, language understanding, and text-to-speech synthesis."
        },
        {
            icon: <FolderOpen className="w-12 h-12 text-blue-900 mb-6" />,
            title: "Open Infrastructure for Innovation",
            description: "Offering open-source software for community use, enabling researchers, startups, and governments to build upon their platforms."
        },
        {
            icon: <Handshake className="w-12 h-12 text-orange-500 mb-6" />,
            title: "From Research to Real Impact",
            description: "Deploying AI-assisted tools for document translation, video subtitling, and educational content."
        }
    ];

    return (
        <section id="resource" className="bg-white py-24 px-6 md:px-12 scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase mb-2 block">
                        Path to Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-8">
                        Services
                    </h2>
                    <p className="text-lg text-black leading-relaxed mb-6 font-medium">
                        AI4Bharat solves problems by building large-scale open-source datasets, developing state-of-the-art AI models, and deploying practical applications for Indian languages.
                    </p>
                    <p className="text-lg text-black leading-relaxed">
                        Our work involves collaborations with voice artists, researchers, and translators nationwide, collecting data from <span className="text-orange-500 font-bold">over 400 districts</span>, and creating parallel corpora with millions of translation pairs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-full flex justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AI4BServices;
