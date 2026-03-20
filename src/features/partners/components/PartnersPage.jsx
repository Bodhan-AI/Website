import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Layers, Target, Globe, Users, Zap, Mail } from 'lucide-react';
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

const stackLayers = [
    {
        number: '04',
        title: 'Implementation & Delivery',
        focus: 'Training, Rollout, and Last-mile support.',
        partners: 'Govt / NGOs / EdTechs (Roll-out Partners).',
        engagement:
            'These partners drive real-world adoption through policy integration and training. They are critical for collecting field feedback based on Bodhan\'s framework to ensure the tools meet classroom realities.',
        accent: '#FF6B35',
        bg: '#FFF4EE',
        border: '#FFD5C0',
    },
    {
        number: '03',
        title: 'Application & Solution Layer',
        focus: 'SEP / LSP Partners covering specific use-cases and verticals (Primary, Secondary, Higher Education, and Skilling).',
        partners: 'Bodhan.AI / EdTechs (Product Partners).',
        engagement:
            'Product partners build end-user EdTech solutions using the underlying AI IP developed by the Center of Excellence (CoE). They contribute to the ecosystem by providing non-PII user data and technical feedback to refine core models.',
        accent: '#F97316',
        bg: '#FFF7ED',
        border: '#FED7AA',
    },
    {
        number: '02',
        title: 'AI Infrastructure Layer',
        focus: 'Model serving, data pipelines, cloud/edge security, and robust multilingual support.',
        partners: 'DPI Partners.',
        engagement:
            'We work with infrastructure specialists to ensure high-concurrency at low latency, optimizing 8B–30B parameter models for national scale.',
        accent: '#314685',
        bg: '#EEF2FF',
        border: '#C7D2FE',
    },
    {
        number: '01',
        title: 'Core AI Assets & Research IP',
        focus: 'ASR, TTS, OCR, Reasoning, and Bodhan Diagnostics.',
        partners: 'DPI Partners Public Good Aligned / Select Partners.',
        engagement:
            'We collaborate with data providers and feedback partners to source quality ASR, OCR, and TTS data. This layer relies on a systemic feedback loop with NGOs and pedagogists to guide system design based on end-user needs.',
        accent: '#1D4ED8',
        bg: '#EFF6FF',
        border: '#BFDBFE',
    },
    {
        number: '00',
        title: 'Foundational Research Layer',
        focus: 'Learning Sciences, Linguistics, AI State-of-the-Art (SOTA), and India-scale equity.',
        partners: 'DPI Partners — Research Institutions & Subject Matter Experts.',
        engagement:
            'Engagement at this level ensures our AI is grounded in the science of how children learn, supporting multi-constituent languages and foundational literacy.',
        accent: '#0F172A',
        bg: '#F1F5F9',
        border: '#CBD5E1',
    },
];

const StackLayerCard = ({ layer, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        className="relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: layer.border, backgroundColor: layer.bg }}
    >
        {/* Layer Number Sidebar */}
        <div
            className="flex items-center justify-center md:w-24 py-5 md:py-0 flex-shrink-0"
            style={{ backgroundColor: layer.accent }}
        >
            <div className="text-center px-4">
                <span className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">Layer</span>
                <span className="block text-white text-3xl md:text-4xl font-bold font-syne leading-none">{layer.number}</span>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3 mb-1">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">{layer.title}</h3>
            </div>

            <div>
                <span
                    className="text-xs font-semibold uppercase tracking-wide mb-2 block"
                    style={{ color: layer.accent }}
                >
                    Focus
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{layer.focus}</p>
            </div>

            <div>
                <span
                    className="text-xs font-semibold uppercase tracking-wide mb-2 block"
                    style={{ color: layer.accent }}
                >
                    Partners
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{layer.partners}</p>
            </div>

            <div>
                <span
                    className="text-xs font-semibold uppercase tracking-wide mb-2 block"
                    style={{ color: layer.accent }}
                >
                    Engagement
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{layer.engagement}</p>
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

                    {/* Stack Layers */}
                    <div className="flex flex-col gap-4">
                        {stackLayers.map((layer, index) => (
                            <StackLayerCard key={layer.number} layer={layer} index={index} />
                        ))}
                    </div>

                    {/* Foundation label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-400"
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
