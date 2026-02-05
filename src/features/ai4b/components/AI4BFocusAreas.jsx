import React from 'react';

const AI4BFocusAreas = () => {
    const areas = [
        {
            title: "Machine Translation",
            description: "Neural translation models for translating to and from English and Indic languages.",
            iconPlaceHolder: "A/अ"
        },
        {
            title: "Transliteration",
            description: "Tools for converting between Roman and Indic scripts, including benchmarks and applications.",
            iconPlaceHolder: "A -> अ"
        },
        {
            title: "Automatic Speech Recognition (ASR)",
            description: "Models for 22 Indian languages.",
            iconPlaceHolder: "ASR"
        },
        {
            title: "Text-to-Speech (TTS)",
            description: "Synthesizer models for at least 20 languages, including expressive outputs.",
            iconPlaceHolder: "TTS"
        },
        {
            title: "Document Processing",
            description: "Emerging work in document layout parsing and OCR technologies for Indic languages.",
            iconPlaceHolder: "Doc"
        },
        {
            title: "Natural Language Understanding",
            description: "Language models, entity recognizers, and benchmarks for ten Indian languages.",
            iconPlaceHolder: "NLU"
        },
        {
            title: "AI-assisted Language Tools",
            description: "Shoonya and Chitralekha platforms for subtitling, translation, and annotation.",
            iconPlaceHolder: "AI Tools"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 bg-gray-50/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                        Ecosystem Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-8">
                        Our Focus Areas
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Our core areas include machine translation, where we build neural models to translate
                        between English and Indic languages, and transliteration, with tools and benchmarks
                        that enable seamless conversion between Roman and Indic scripts.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We develop automatic speech recognition models covering <span className="text-orange-500 font-medium">22 Indian languages</span>,
                        and text-to-speech systems for <span className="text-orange-500 font-medium">at least 20 languages</span>,
                        including expressive and high-quality outputs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-start border border-gray-100 ${index >= 4 ? 'lg:col-span-1 lg:last:col-start-auto' : ''}`}
                        >
                            <div className="w-full h-40 bg-gray-50 rounded-lg mb-6 flex items-center justify-center text-gray-400 border border-dashed border-gray-200">
                                <span className="text-xl font-bold">{area.iconPlaceHolder}</span>
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                {area.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* To center the last row of 3 items in a 4 col grid, we might need a different approach or flexbox for the container. 
                    Given the grid-cols-4, CSS grid alignment for the last row can be tricky without specific classes.
                    Let's try a Flexbox wrap approach for better centering control if strict grid alignment is not required,
                    OR use specific grid col spanning.
                    
                    For now, keeping grid but adjusting class logic if needed. 
                    Actually, looking at the screenshot, it's 4 then 3 centered. 
                    Flexbox wrapping is often easier for "4 then 3 centered".
                */}
            </div>

            {/* Alternative Flex Layout for Centered Last Row */}
            {/* Re-rendering with Flex to ensure the 4-3 split centers nicely */}
            <div className="hidden">
                {/* This block is just a comment replacement for thought process, not actual code */}
            </div>
        </section>
    );
};

// Re-writing the return to use Flexbox for better centering of the last row items
const AI4BFocusAreasFinal = () => {
    const areas = [
        {
            title: "Machine Translation",
            description: "Neural translation models for translating to and from English and Indic languages.",
            iconPlaceHolder: "A/अ"
        },
        {
            title: "Transliteration",
            description: "Tools for converting between Roman and Indic scripts, including benchmarks and applications.",
            iconPlaceHolder: "A -> अ"
        },
        {
            title: "Automatic Speech Recognition (ASR)",
            description: "Models for 22 Indian languages.",
            iconPlaceHolder: "ASR"
        },
        {
            title: "Text-to-Speech (TTS)",
            description: "Synthesizer models for at least 20 languages, including expressive outputs.",
            iconPlaceHolder: "TTS"
        },
        {
            title: "Document Processing",
            description: "Emerging work in document layout parsing and OCR technologies for Indic languages.",
            iconPlaceHolder: "Doc"
        },
        {
            title: "Natural Language Understanding",
            description: "Language models, entity recognizers, and benchmarks for ten Indian languages.",
            iconPlaceHolder: "NLU"
        },
        {
            title: "AI-assisted Language Tools",
            description: "Shoonya and Chitralekha platforms for subtitling, translation, and annotation.",
            iconPlaceHolder: "AI Tools"
        }
    ];

    return (
        <section id="product" className="bg-white py-24 px-6 md:px-12 bg-gray-50/30 scroll-mt-24">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                        Ecosystem Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-8">
                        Our Focus Areas
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                        Our core areas include machine translation, where we build neural models to translate
                        between English and Indic languages, and transliteration, with tools and benchmarks
                        that enable seamless conversion between Roman and Indic scripts.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                        We develop automatic speech recognition models covering <span className="text-orange-500 font-medium">22 Indian languages</span>,
                        and text-to-speech systems for <span className="text-orange-500 font-medium">at least 20 languages</span>,
                        including expressive and high-quality outputs.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] border border-gray-200 rounded-2xl p-2 bg-white"
                        >
                            {/* Icon Placeholder */}
                            <div className="w-full h-48 bg-white rounded-xl mb-4 flex items-center justify-center text-gray-400 border border-dashed border-gray-200 shadow-sm">
                                <span className="text-xl font-bold">{area.iconPlaceHolder}</span>
                            </div>

                            {/* Content with Gray Background */}
                            <div className="bg-gray-100 rounded-xl p-6 flex-grow transition-colors">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                    {area.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AI4BFocusAreasFinal;
