import React from 'react';
import { Linkedin } from 'lucide-react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Card from './Card';
import { teamData } from '../../../utils/teamData';

const Team = () => {
    const advisoryBoard = [
        {
            name: "Dr. A. K. Sharma",
            role: "Former Director, NCERT",
            details: "Guiding the pedagogical framework and curriculum alignment."
        },
        {
            name: "Ms. Sunita Gupta",
            role: "Education Policy Advisor",
            details: "Expertise in implementation of NEP 2020 at the grassroots level."
        },
        {
            name: "Prof. Rajesh Kumar",
            role: "AI Ethics Researcher, IIT Delhi",
            details: "Ensuring responsible AI deployment in educational contexts."
        },
        {
            name: "Mr. Vikram Singh",
            role: "EdTech Entrepreneur",
            details: "Strategic mentorship on scaling digital learning solutions."
        }
    ];

    return (
        <Container className="pt-20 pb-24 scroll-mt-32" id="team">
            <SectionHeading
                title="Our People"
                highlightWord="People"
                subtitle="The team driving the Bodhan mission forward."
                className="mb-16"
                parallax={true}
            />

            {/* Leadership / Org Chart Section */}
            <div className="mb-24">
                <h3 className="text-3xl font-semibold text-center mb-16 text-[#1A1A1A]">Leadership & Implementation Team</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {teamData.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Circular Image */}
                            <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 relative overflow-hidden flex items-center justify-center group-hover:ring-4 ring-[#FF6B35]/20 transition-all shadow-md">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {member.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 h-10 px-4 leading-snug">
                                {member.role}
                            </p>

                            <a
                                href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center text-[#314685] hover:text-[#FF6600] font-medium text-sm mt-2 transition-colors"
                            >
                                <Linkedin className="w-4 h-4 mr-1" />
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Advisory Board Section */}
            <div>
                <h3 className="text-3xl font-semibold text-center mb-12 text-[#1A1A1A]">Advisory Board</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advisoryBoard.map((member, index) => (
                        <Card
                            key={index}
                            title={member.name}
                            description={`${ member.role } — ${ member.details } `}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Team;
