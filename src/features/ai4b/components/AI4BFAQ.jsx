import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const AI4BFAQ = () => {
    const faqs = [
        {
            question: "What is AI For Bharat?",
            answer: "A national initiative developing open, inclusive Al technologies specifically designed for India's linguistic diversity. We create multilingual models that empower technological access across different regions and communities."
        },
        {
            question: "How can researchers access your models?",
            answer: "Our open-source models and APIs are freely available through our research portal. Researchers can download, integrate, and contribute to ongoing development."
        },
        {
            question: "Are the models truly multilingual?",
            answer: "Yes, we support over 22 Indian languages with advanced natural language processing technologies that understand contextual nuances."
        },
        {
            question: "Can startups use these resources?",
            answer: "Absolutely. We provide comprehensive documentation, developer support, and free access to encourage innovation across the startup ecosystem."
        },
        {
            question: "How do you ensure data privacy?",
            answer: "We follow strict data protection protocols and anonymize all research data. Our models prioritize ethical Al development and user privacy."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
                {/* Left Column */}
                <div className="lg:w-1/3">
                    <h2 className="text-5xl md:text-6xl font-serif text-blue-900 font-bold mb-6">
                        FAQs
                    </h2>
                    <p className="text-xl text-orange-500 font-medium leading-relaxed">
                        Common questions about our AI initiative and technological approach
                    </p>
                </div>

                {/* Right Column - Accordion */}
                <div className="lg:w-2/3 flex flex-col gap-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left py-3 px-5 flex items-center justify-between transition-all duration-300 ${openIndex === index
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'bg-blue-900 text-white hover:bg-blue-800'
                                    } rounded-xl mb-1`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-xl font-light text-white'}`}>
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                    <span className="text-lg font-medium">{faq.question}</span>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-800 px-5 pt-3 pb-3 leading-relaxed bg-orange-50 rounded-xl border border-orange-100">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AI4BFAQ;
