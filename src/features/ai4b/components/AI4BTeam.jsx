import React from 'react';
import { Linkedin } from 'lucide-react';
import { teamData } from '../../../utils/teamData';

const AI4BTeam = () => {
    const team = teamData;

    return (
        <section id="people" className="bg-white py-24 px-6 md:px-12 border-t border-gray-100 scroll-mt-24">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                    Meet
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-4">
                    Founding Team
                </h2>
                <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
                    Pioneering researchers and technologists driving India's AI revolution
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Circular Image */}
                            <div className="w-40 h-40 rounded-full bg-gray-200 mb-6 relative overflow-hidden flex items-center justify-center group-hover:ring-4 ring-orange-100 transition-all">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {member.name}
                            </h3>
                            <p className="text-black-600 text-sm mb-4 h-10 px-4">
                                {member.role}
                            </p>

                            <a
                                href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mt-2"
                            >
                                <Linkedin className="w-4 h-4 mr-1" />
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AI4BTeam;
