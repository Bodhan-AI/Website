import React from 'react';
import { Languages, Database, Users, Globe, ArrowRight } from 'lucide-react';

const AI4BInnovation = () => {
    const features = [
        {
            icon: <Languages className="w-10 h-10 text-orange-500 mb-4 transition-transform duration-300 hover:scale-110" />,
            title: "Indic Language Models",
            description: "Advanced voice recognition across 22+ languages"
        },
        {
            icon: <Database className="w-10 h-10 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />,
            title: "Open Research Datasets",
            description: "Freely accessible AI resources for developers and researchers"
        },
        {
            icon: <Users className="w-10 h-10 text-orange-500 mb-4 transition-transform duration-300 hover:scale-110" />,
            title: "Collaborative Ecosystem",
            description: "Partnerships with leading institutions to drive technological advancement"
        },
        {
            icon: <Globe className="w-10 h-10 text-blue-600 mb-4 transition-transform duration-300 hover:scale-110" />,
            title: "Community Impact",
            description: "Real-world solutions transforming sectors through multilingual AI"
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="w-full px-4 md:px-12">
                <div className="mb-16 max-w-[1400px] mx-auto">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2 block">
                        Innovation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-blue-900 mb-6 leading-tight">
                        Transforming AI for<br />India's Linguistic Landscape
                    </h2>
                    <p className="text-xl text-16 text-black leading-relaxed max-w-3xl">
                        We develop cutting-edge AI technologies that understand and respond in
                        multiple Indian languages, bridging technological gaps across regions
                        and communities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-[1400px] mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start">
                            {feature.icon}
                            <h3 className="text-xl font-bold text-black mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-black leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-6 items-center max-w-[1400px] mx-auto">
                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md">
                        Explore Resources
                    </button>
                    <a href="#" className="flex items-center text-black font-medium hover:text-orange-500 transition-colors group">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AI4BInnovation;
