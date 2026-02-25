import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, FileText, ExternalLink, ChevronDown, Download, Eye, X, ArrowRight } from 'lucide-react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

// ─── Tender Data ─────────────────────────────────────────────────────────────
const tenders = [
    {
        id: 'tender-001',
        status: 'active',
        title: 'Procurement of GPU Compute Infrastructure',
        description:
            'Bodhan AI invites sealed tenders from eligible vendors for the supply, installation, and commissioning of high-performance GPU compute infrastructure to support large-scale AI model training and inference workloads for Indian language AI research.',
        closingDate: '2026-03-31',
        closingTime: '17:00 IST',
        documents: [
            { name: 'Tender Notice', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' },
            { name: 'Technical Specifications', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' },
            { name: 'Terms & Conditions', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' },
        ],
        applyUrl: 'https://docs.google.com/forms/d/e/example-form-id/viewform',
    },
    {
        id: 'tender-002',
        status: 'active',
        title: 'Data Annotation Services for Indic Languages',
        description:
            'Expression of Interest (EoI) is invited from agencies / organisations with proven experience in linguistic data annotation for providing data annotation, transcription, and quality assurance services for 22 scheduled Indian languages across speech, text, and multimodal datasets.',
        closingDate: '2026-04-15',
        closingTime: '15:00 IST',
        documents: [
            { name: 'EoI Document', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' },
            { name: 'Scope of Work', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' },
        ],
        applyUrl: 'https://docs.google.com/forms/d/e/example-form-id-2/viewform',
    },
    {
        id: 'tender-003',
        status: 'active',
        title: 'Office Space Lease – Chennai',
        description:
            'Bodhan AI had invited proposals from property owners / real estate agencies for leasing furnished office space (approximately 3,000–5,000 sq. ft.) in Chennai for a period of 2 years with an option to extend.',
        closingDate: '2026-01-20',
        closingTime: '17:00 IST',
        documents: [{ name: 'Tender Document', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' }],
        applyUrl: 'https://docs.google.com/forms/d/e/example-form-id-2/viewform',
    },
];
// ─────────────────────────────────────────────────────────────────────────────

const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};
const formatDateShort = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

const getPreviewUrl = (url) =>
    `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

const PdfPreviewModal = ({ doc, onClose }) => (
    <AnimatePresence>
        {doc && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="relative bg-white rounded-2xl shadow-2xl flex flex-col w-full max-w-4xl"
                    style={{ height: '85vh' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex-shrink-0">
                                <FileText size={14} className="text-[var(--text-orange-500)]" />
                            </span>
                            <span className="font-semibold text-[#1A1A1A] truncate">{doc.name}</span>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                            <a href={doc.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                                <Download size={12} /> Download
                            </a>
                            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                    <iframe src={doc.previewUrl || getPreviewUrl(doc.url)} className="flex-1 w-full rounded-b-2xl" title={doc.name} allow="fullscreen" />
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

const StatusBadge = ({ status }) =>
    status === 'active' ? (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
        </span>
    ) : (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Closed
        </span>
    );

const TenderCardV2 = ({ tender, index, onPreview }) => {
    const [expanded, setExpanded] = useState(false);
    const isActive = tender.status === 'active';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * index }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex"
        >
            {/* Left accent strip */}
            <div className={`w-1.5 flex-shrink-0 ${isActive ? 'bg-[var(--text-orange-500)]' : 'bg-gray-200'}`} />

            <div className="flex-1 p-6 md:p-7 min-w-0">
                {/* Main row: info + deadline box */}
                <div className="flex flex-col md:flex-row gap-5">
                    {/* Left: tender info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2.5">
                            <StatusBadge status={tender.status} />
                            <span className="text-xs text-gray-400 font-mono">{tender.id}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-2 leading-snug">
                            {tender.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                            {tender.description}
                        </p>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[var(--text-orange-500)] transition-colors"
                        >
                            <FileText size={12} />
                            {tender.documents.length} document{tender.documents.length !== 1 ? 's' : ''}
                            <ChevronDown size={12} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* Right: deadline box */}
                    <div className="md:flex-shrink-0 md:w-44">
                        <div className={`rounded-xl p-4 text-center ${isActive ? 'bg-orange-50 border border-orange-100' : 'bg-gray-50 border border-gray-100'}`}>
                            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1.5">Closing</p>
                            <p className={`text-sm font-bold leading-tight ${isActive ? 'text-[#1A1A1A]' : 'text-gray-400'}`}>
                                {formatDateShort(tender.closingDate)}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{tender.closingTime}</p>
                            {isActive && tender.applyUrl && (
                                <a
                                    href={tender.applyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center justify-center gap-1.5 w-full bg-[#0a0a0a] text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-black transition-colors"
                                >
                                    Apply Now <ArrowRight size={11} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Expandable documents */}
                <motion.div
                    initial={false}
                    animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                >
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <ul className="space-y-2">
                            {tender.documents.map((doc, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="flex flex-col items-center justify-center w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex-shrink-0 gap-0.5">
                                        <FileText size={11} className="text-[var(--text-orange-500)]" />
                                        <span className="text-[8px] font-bold text-[var(--text-orange-500)] uppercase leading-none">PDF</span>
                                    </span>
                                    <span className="text-sm font-medium text-gray-700 flex-1 min-w-0 truncate">{doc.name}</span>
                                    <button
                                        onClick={() => onPreview(doc)}
                                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[var(--text-orange-500)] bg-gray-100 hover:bg-orange-50 px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                                    >
                                        <Eye size={11} /> Preview
                                    </button>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#0a0a0a] bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                                    >
                                        <Download size={11} /> Download
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const TendersPageV2 = () => {
    const [activeTab, setActiveTab] = useState('active');
    const [previewDoc, setPreviewDoc] = useState(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);
    useEffect(() => {
        document.body.style.overflow = previewDoc ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [previewDoc]);

    const filtered = tenders.filter((t) => t.status === activeTab);
    const activeCnt = tenders.filter((t) => t.status === 'active').length;
    const closedCnt = tenders.filter((t) => t.status === 'closed').length;
    const nextDeadline = tenders
        .filter((t) => t.status === 'active')
        .sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate))[0];

    return (
        <div className="min-h-screen bg-[var(--bg-cream-50)] flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="pt-12 pb-6 px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-3"
                        >
                            Tenders &amp;{' '}
                            <span className="text-[var(--text-orange-500)]">Procurement</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12 }}
                            className="text-gray-500 text-base max-w-2xl mb-5"
                        >
                            Official tender notices and procurement opportunities from Bodhan AI.
                        </motion.p>

                        {/* Stat chips */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.22 }}
                            className="flex flex-wrap gap-2"
                        >
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active: {activeCnt}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Closed: {closedCnt}
                            </span>
                            {nextDeadline && (
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
                                    <Calendar size={12} /> Next closing: {formatDateShort(nextDeadline.closingDate)}
                                </span>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Underline tabs */}
                <div className="max-w-5xl mx-auto px-6 mb-6 w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        className="flex border-b border-gray-200"
                    >
                        {[
                            { key: 'active', label: 'Active Tenders', count: activeCnt },
                            { key: 'closed', label: 'Closed Tenders', count: closedCnt },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                                    activeTab === tab.key
                                        ? 'border-[var(--text-orange-500)] text-[var(--text-orange-500)]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {tab.label}
                                <span className={`text-xs font-semibold rounded-full px-1.5 py-0.5 ${
                                    activeTab === tab.key ? 'bg-orange-100 text-[var(--text-orange-500)]' : 'bg-gray-100 text-gray-500'
                                }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Listings */}
                <div className="max-w-5xl mx-auto px-6 pb-20 w-full">
                    <AnimatePresence mode="wait">
                        {filtered.length > 0 ? (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4"
                            >
                                {filtered.map((tender, index) => (
                                    <TenderCardV2 key={tender.id} tender={tender} index={index} onPreview={setPreviewDoc} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeTab + '-empty'}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                    <FileText size={24} className="text-gray-400" />
                                </div>
                                <p className="text-gray-500 font-medium">No {activeTab} tenders at the moment.</p>
                                <p className="text-gray-400 text-sm mt-1">Check back soon for new opportunities.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
            <PdfPreviewModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />
        </div>
    );
};

export default TendersPageV2;
