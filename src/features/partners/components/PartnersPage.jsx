import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Layers, Target, Globe, Users, Zap, Mail, GraduationCap, LayoutDashboard, Server, Cpu, BookOpen, ArrowUp } from 'lucide-react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

const principles = [
    {
        icon: <Zap size={22} />,
        title: 'Accessibility & Equity',
        description:
            'We build AI for learning that is accessible to all, fair to every learner, and personalized to their specific needs.',
    },
    {
        icon: <Globe size={22} />,
        title: 'Rooted in India',
        description:
            'Our solutions are shaped by the unique linguistic and cultural context of India.',
    },
    {
        icon: <Users size={22} />,
        title: 'Collaboration over Competition',
        description:
            'We choose to partner and collaborate rather than compete, acting as a force multiplier for the EdTech ecosystem.',
    },
    {
        icon: <Target size={22} />,
        title: 'Collective Impact',
        description:
            'We aim to amplify our impact through the collective effort of our partner network.',
    },
];

// Two standalone layers + one grouped block for shared DPI Partners
const layerGroups = [
    {
        type: 'single',
        layer: {
            number: '04',
            title: 'Implementation & Delivery',
            icon: GraduationCap,
            focusTags: ['Training', 'Rollout', 'Last-mile support'],
            partnerLabel: 'Govt / NGOs / EdTechs',
            partnerType: 'Roll-out Partners',
            bullets: [
                'Drive real-world adoption through policy integration, training, and roll-out at last-mile support',
                "Collect field feedback based on Bodhan's framework to ensure tools meet classroom realities",
            ],
            accent: '#FF6B35',
            rowBg: '#FFF8F5',
        },
    },
    {
        type: 'single',
        layer: {
            number: '03',
            title: 'Application & Solution Layer',
            icon: LayoutDashboard,
            focusTags: ['Primary', 'Secondary', 'Higher Education', 'Skilling'],
            partnerLabel: 'Bodhan.AI / EdTechs',
            partnerType: 'Product Partners',
            bullets: [
                'Build EdTech solutions using the underlying AI IP developed by the Center of Excellence (CoE)',
                'Provide non-PII user data along with technical and qualitative feedback to contribute to the core model',
            ],
            accent: '#F97316',
            rowBg: '#FFFAF5',
        },
    },
    {
        type: 'group',
        groupLabel: 'DPI Partners',
        groupPartnerLabel: 'Bodhan.AI/Data Providers/Feedback Partners',
        groupAccent: '#314685',
        groupBullets: [
            'Quality ASR, OCR and TTS data for building foundational AI models',
            'Systemic Feedback Loop: NGOs, Pedagogists who can guide us on system design based on the end-users',
        ],
        layers: [
            {
                number: '02',
                title: 'AI Infrastructure Layer',
                icon: Server,
                focusTags: ['Model serving', 'Data pipelines', 'Cloud / Edge', 'Multilingual support'],
                partnerSubLabel: null,
                bullets: [
                    'Ensure high-concurrency at low latency, optimizing 8B–30B parameter models for national scale',
                ],
                accent: '#314685',
                rowBg: '#F5F7FF',
            },
            {
                number: '01',
                title: 'Core AI Assets & Research IP',
                icon: Cpu,
                focusTags: ['ASR', 'TTS', 'OCR', 'Reasoning', 'Bodhan Diagnostics'],
                partnerSubLabel: 'Public Good Aligned / Select Partners',
                bullets: [
                    'Quality ASR, OCR and TTS data for building foundational AI models',
                    'Systemic Feedback Loop: NGOs, Pedagogists who can guide us on system design based on end-users',
                ],
                accent: '#1D4ED8',
                rowBg: '#F5F8FF',
            },
            {
                number: '00',
                title: 'Foundational Research Layer',
                icon: BookOpen,
                focusTags: ['Learning Sciences', 'Linguistics', 'AI SOTA', 'India-scale equity', 'Multilingual'],
                partnerSubLabel: 'Research Institutions & Subject Matter Experts',
                bullets: [
                    'Ensure AI is grounded in the science of how children learn',
                    'Support multi-constituent languages and foundational literacy at India scale',
                ],
                accent: '#0F172A',
                rowBg: '#F8F9FA',
            },
        ],
    },
];

// Reusable upward arrow connector
const StackArrow = () => (
    <div className="absolute bottom-0 translate-y-1/2 z-20 flex flex-col items-center" style={{ left: '2.6rem' }}>
        <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center">
            <ArrowUp size={16} className="text-gray-400" />
        </div>
    </div>
);

// Left identity panel shared by both row types
const LayerLeftPanel = ({ layer }) => (
    <div className="flex items-start gap-4 px-6 py-5 h-full bg-white">
        <div className="flex-shrink-0 pt-0.5">
            <span className="text-3xl font-bold font-syne leading-none" style={{ color: layer.accent }}>
                {layer.number}
            </span>
        </div>
        <div className="w-px self-stretch bg-gray-200 flex-shrink-0 mx-1" />
        <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1A1A1A] leading-snug mb-2">{layer.title}</p>
            <div className="flex flex-wrap gap-1.5">
                {layer.focusTags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border font-medium"
                        style={{ color: layer.accent, borderColor: layer.accent + '40', backgroundColor: layer.accent + '10' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center self-center"
            style={{ backgroundColor: layer.accent + '15', color: layer.accent }}
        >
            <layer.icon size={22} />
        </div>
    </div>
);

// Single-layer row (layers 04 & 03)
const SingleRow = ({ group, animIndex, showArrowBelow }) => {
    const { layer } = group;
    return (
        <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: animIndex * 0.07 }}
            className="relative flex border-b border-gray-100"
        >
            <div className="w-2/5 border-r border-gray-100">
                <LayerLeftPanel layer={layer} />
            </div>
            <div className="flex-1 px-6 py-5 bg-white">
                <p className="text-sm font-semibold mb-2.5" style={{ color: layer.accent }}>
                    {layer.partnerLabel}
                    {layer.partnerType && (
                        <span className="font-normal text-gray-500">: {layer.partnerType}</span>
                    )}
                </p>
                <ul className="space-y-1.5">
                    {layer.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: layer.accent }} />
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
            {showArrowBelow && <StackArrow />}
        </motion.div>
    );
};

// Grouped rows block (layers 02, 01, 00 share "DPI Partners" with bracket)
const GroupedRows = ({ group, startAnimIndex }) => (
    <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: startAnimIndex * 0.07 }}
        className="flex"
    >
        {/* Left: stacked layer identities */}
        <div className="w-2/5 border-r border-gray-100 flex flex-col">
            {group.layers.map((layer, i) => (
                <div
                    key={layer.number}
                    className={`relative ${i < group.layers.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                    <LayerLeftPanel layer={layer} />
                    {i < group.layers.length - 1 && <StackArrow />}
                </div>
            ))}
        </div>

        {/* Right: grouped content */}
        <div className="flex-1 flex items-stretch bg-white">
            {/* Content */}
            <div className="flex-1 px-4 py-5 flex flex-col justify-center">
                <p className="text-sm font-bold mb-3" style={{ color: group.groupAccent }}>
                    {group.groupPartnerLabel}: {group.groupLabel}
                </p>
                <ul className="space-y-1.5">
                    {group.groupBullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: group.groupAccent }} />
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </motion.div>
);

const PartnersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-cream-50)]">
            <Navbar />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-[var(--bg-black-900)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
                        style={{
                            background: 'radial-gradient(ellipse at center, #FF6B35 0%, transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                    />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
                    >
                        <Layers size={13} />
                        Bharat EduAI Stack
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
                    >
                        Building Together for{' '}
                        <span className="text-[var(--text-orange-500)]">Every Learner</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-justify"
                    >
                        At Bodhan, we believe that delivering equal learning opportunities to every child in India
                        is a mission too vast for any single entity to achieve in isolation. Our strategy is built
                        on the Bharat EduAI Stack, a next-generation Digital Public Infrastructure (DPI) designed
                        to be an open, collaborative ecosystem.
                    </motion.p>
                </div>
            </div>

            {/* Vision & Principles Section */}
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-orange-500)] mb-3 block">
                        Our Vision & Principles
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
                        The Goal
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                        Our primary objective is to collaborate with a diverse network of partners to reach every
                        school in India, ensuring no learner is left behind.
                    </p>
                </motion.div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--text-orange-500)] mb-4">
                                {p.icon}
                            </div>
                            <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{p.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bharat EduAI Stack Section */}
            <div className="bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-orange-500)] mb-3 block">
                            Partnership Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
                            The 5-Layer Bharat EduAI Stack
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                            We will be engaging with partners across five distinct layers of the Bharat EduAI Stack,
                            ranging from foundational research to last-mile delivery.
                        </p>
                    </motion.div>

                    {/* Column headers */}
                    <div className="flex mb-0 px-6 pb-2">
                        <div className="w-2/5">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Layer / Focus</span>
                        </div>
                        <div className="flex-1 hidden md:block">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Partners &amp; Engagement</span>
                        </div>
                    </div>

                    {/* Stack — unified card */}
                    <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-md">
                        {layerGroups.map((group, gi) => {
                            const animIndex = layerGroups.slice(0, gi).reduce(
                                (acc, g) => acc + (g.type === 'group' ? g.layers.length : 1), 0
                            );
                            const isLastGroup = gi === layerGroups.length - 1;

                            if (group.type === 'single') {
                                return (
                                    <SingleRow
                                        key={group.layer.number}
                                        group={group}
                                        animIndex={animIndex}
                                        showArrowBelow={!isLastGroup}
                                    />
                                );
                            }
                            return (
                                <GroupedRows
                                    key={group.groupLabel}
                                    group={group}
                                    startAnimIndex={animIndex}
                                />
                            );
                        })}
                    </div>

                    {/* Foundation label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 flex items-center justify-center gap-3"
                    >
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Foundation
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </motion.div>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="relative overflow-hidden bg-[var(--bg-black-900)]">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-15"
                        style={{
                            background: 'radial-gradient(ellipse at center, #FF6B35 0%, transparent 70%)',
                            filter: 'blur(50px)',
                        }}
                    />
                </div>
                <div className="relative max-w-2xl mx-auto px-6 py-16 md:py-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-semibold text-white mb-10"
                    >
                        Ready to Partner with{' '}
                        <span className="text-[var(--text-orange-500)]">Bodhan</span>?
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center text-[var(--text-orange-500)]">
                                <Mail size={18} />
                            </div>
                            <p className="text-white/60 text-base">Reach us at</p>
                        </div>

                        <a
                            href="mailto:contact@bodhan.ai"
                            className="text-xl md:text-2xl font-semibold text-[var(--text-orange-500)] hover:underline break-all"
                        >
                            contact@bodhan.ai
                        </a>

                        <p className="text-white/50 text-sm mt-5 mb-4">with the following information:</p>

                        <ul className="space-y-2.5">
                            {['Name', 'Organization', 'Contact details', 'Message'].map((field) => (
                                <li key={field} className="flex items-center gap-3 text-white/70 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-orange-500)] flex-shrink-0" />
                                    {field}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PartnersPage;
