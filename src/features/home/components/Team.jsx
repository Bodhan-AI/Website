import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Card from './Card';

import miteshImg from '../../../assets/mitesh-sir.png';
import balaramanImg from '../../../assets/Balaraman Ravindran.jpg';
import karthikRamanImg from '../../../assets/Karthik Raman.jpg';
import nandanImg from '../../../assets/Nandan Sudarsanam.jpg';
import neethiImg from '../../../assets/S Neethi.jpg';
import karthikMahaImg from '../../../assets/Karthik-Mahadevan.png';
import VeezhinathanImg from '../../../assets/prof-kamakoti.png';
import manuImg from '../../../assets/prof-manu.jpg';
import jeffImg from '../../../assets/Jeff Ullman.jpg';
import svethaImg from '../../../assets/svetha.jpeg';
import ashokImg from '../../../assets/Ashok Goel.png';
import mohanImg from '../../../assets/Mohan_Photo.jpg';
import babakImg from '../../../assets/Babak-Hojjat.png';
import linkedinIcon from '../../../assets/linkdin.png';

const Team = () => {
    const advisoryBoard = [
        {
            name: "Prof. Jeff Ullman",
            role: "Professor Emeritus, Stanford University",
            details: "AM Turing Award winner (2020), CEO of Gradiance Corp. Author of 16 books including 'Database Systems' and 'Compilers'.",
            image: jeffImg
        },
        {
            name: "Prof. Svetha Venkatesh",
            role: "Distinguished Professor, Deakin University",
            details: "Co-Director of Deakin Applied AI. Australian Laureate Fellow and Fellow of the Australian Academy of Science.",
            image: svethaImg
        },
        {
            name: "Prof. Ashok Goel",
            role: "Professor, Georgia Tech",
            details: "Chief Scientist, C21U. Fellow of AAAI and Cognitive Science Society. Recipient of AAAI Outstanding AI Educator Award.",
            image: ashokImg
        },
        {
            name: "Prof. Mohan Kankanhalli",
            role: "Provost's Chair Professor, NUS",
            details: "Founding Director of NUS AI Institute. Deputy Executive Chairman of AI Singapore. Fellow of IEEE, IAPR, and ACM.",
            image: mohanImg
        },
        {
            name: "Dr. Babak Hodjat",
            role: "Chief AI Officer, Cognizant",
            details: "Former co-founder/CEO of Sentient. Primary inventor of technology behind Apple’s Siri. Named in 2025 AI 100 UK list.",
            image: babakImg
        }
    ];

    const boardMembers = [
        {
            name: "Prof. Veezhinathan Kamakoti",
            role: "Director, IIT Madras",
            details: "",
            image: VeezhinathanImg
        },
        {
            name: "Prof. Balaraman Ravindran",
            role: "Head - DSAI, IIT Madras",
            details: "",
            image: balaramanImg
        },
        {
            name: "Prof. Manu Santhanam",
            role: "Dean - IC&SR, IIT Madras",
            details: "",
            image: manuImg
        },
    ];

    const teamMembers = [
        {
            name: "Prof. Mitesh Khapra",
            role: "Associate Professor IIT Madras",
            linkedin: "https://www.linkedin.com/in/mitesh-khapra-3bb3032/",
            image: miteshImg
        },
        {
            name: "Prof. Karthik Raman",
            role: "Professor IIT Madras",
            linkedin: "https://www.linkedin.com/in/ramankarthik/",
            image: karthikRamanImg
        },
        {
            name: "Prof. Nandan Sudarsanam",
            role: "Associate Professor IIT Madras",
            linkedin: "https://www.linkedin.com/in/nandan-sudarsanam-67359b6/",
            image: nandanImg
        },
        {
            name: "Dr. S Neethi",
            role: "Adjunct Faculty IIT Madras",
            linkedin: "https://www.linkedin.com/in/s-neethi/",
            image: neethiImg
        },
        {
            name: "Mr. Karthik Mahadevan Mohanakrishnan",
            role: "Lead",
            linkedin: "https://www.linkedin.com/in/karthikmaha/",
            image: karthikMahaImg
        }
    ];

    return (
        <Container className="pt-20 pb-10 scroll-mt-32" id="team">
            <SectionHeading
                title="Our People"
                highlightWord="People"
                subtitle="The team driving the Bodhan mission forward."
                className="mb-8"
                parallax={true}
            />

            {/* Advisory Board Section */}
            <div id="advisory" className="mb-24 scroll-mt-32">
                <h3 className="text-3xl font-bold text-center mb-12 text-[#1A1A1A]">International Advisory Council</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {advisoryBoard.map((member, index) => (
                        <Card
                            key={index}
                            title={member.name}
                            description={`${member.role} — ${member.details} `}
                            image={member.image}
                            className="max-w-sm mx-auto w-full md:max-w-none"
                            panelClassName="text-center"
                        />
                    ))}
                </div>
            </div>

            {/* Board Members Section */}
            <div id="board" className="mb-24 scroll-mt-32">
                <h3 className="text-3xl font-bold text-center mb-12 text-[#1A1A1A]">Board Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                    <div className="lg:col-start-2 w-full">
                        {boardMembers[0] && <Card title={boardMembers[0].name} description={boardMembers[0].details ? `${boardMembers[0].role} — ${boardMembers[0].details}` : boardMembers[0].role} image={boardMembers[0].image} className="max-w-sm mx-auto w-full md:max-w-none" panelClassName="text-center" />}
                    </div>
                    <div className="w-full">
                        {boardMembers[1] && <Card title={boardMembers[1].name} description={boardMembers[1].details ? `${boardMembers[1].role} — ${boardMembers[1].details}` : boardMembers[1].role} image={boardMembers[1].image} className="max-w-sm mx-auto w-full md:max-w-none" panelClassName="text-center" />}
                    </div>
                    <div className="w-full">
                        {boardMembers[2] && <Card title={boardMembers[2].name} description={boardMembers[2].details ? `${boardMembers[2].role} — ${boardMembers[2].details}` : boardMembers[2].role} image={boardMembers[2].image} className="max-w-sm mx-auto w-full md:max-w-none" panelClassName="text-center" />}
                    </div>
                </div>
            </div>

            {/* Leadership / Org Chart Section */}
            <div className="mb-10">
                <h3 className="text-3xl font-inter font-semibold text-center mb-12 text-[#1A1A1A]">Leadership</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Circular Image */}
                            <div className="w-40 h-40 rounded-full bg-gray-100 mb-6 relative overflow-hidden flex items-center justify-center group-hover:ring-4 ring-orange-100 transition-all border border-gray-200">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <span className="text-4xl text-gray-500 font-semibold">
                                        {member.name.charAt(0)}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-lg font-100 text-gray-900 mb-1 leading-tight">
                                {member.name}
                            </h3>
                            {/* <p className="text-gray-600 text-sm mb-3 h-auto">
                                {member.role}
                            </p> */}

                            <a
                                href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm mt-auto"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 mr-1" />
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Team;
