import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, FileText, ExternalLink, ChevronDown, Download, Eye, X, Hash } from 'lucide-react';
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
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open
        </span>
    ) : (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Closed
        </span>
    );

const TenderRow = ({ tender, index, isLast, onPreview }) => {
    const [expanded, setExpanded] = useState(false);
    const isActive = tender.status === 'active';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06 * index }}
        >
            {/* Main row */}
            <div
                className={`group cursor-pointer transition-colors ${expanded ? 'bg-orange-50/30' : 'hover:bg-gray-50/80'}`}
                onClick={() => setExpanded(!expanded)}
            >
                {/* Desktop row */}
                <div className="hidden md:grid items-center px-6 py-4 gap-4"
                    style={{ gridTemplateColumns: '48px 1fr 150px 90px 100px 110px' }}>
                    {/* No. */}
                    <span className="text-sm text-gray-400 font-mono tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Title + ID */}
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1A1A1A] truncate leading-snug">
                            {tender.title}
                        </p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">{tender.id}</p>
                    </div>

                    {/* Closing date */}
                    <div className="min-w-0">
                        <p className="text-sm text-gray-700 font-medium">{formatDate(tender.closingDate)}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{tender.closingTime}</p>
                    </div>

                    {/* Doc count */}
                    <span className="text-sm text-gray-500 inline-flex items-center gap-1.5">
                        <FileText size={13} className="text-gray-400" />
                        {tender.documents.length}
                    </span>

                    {/* Status */}
                    <StatusBadge status={tender.status} />

                    {/* Action */}
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        {isActive && tender.applyUrl ? (
                            <a
                                href={tender.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium bg-[#0a0a0a] text-white px-3 py-1.5 rounded-lg hover:bg-black transition-colors"
                            >
                                Apply <ExternalLink size={10} />
                            </a>
                        ) : (
                            <span className="text-xs text-gray-300">—</span>
                        )}
                        <ChevronDown
                            size={15}
                            className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
                        />
                    </div>
                </div>

                {/* Mobile row */}
                <div className="md:hidden px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <StatusBadge status={tender.status} />
                                <span className="text-xs text-gray-400 font-mono">{tender.id}</span>
                            </div>
                            <p className="text-sm font-semibold text-[#1A1A1A] leading-snug mb-1">{tender.title}</p>
                            <p className="text-xs text-gray-400">{formatDate(tender.closingDate)} · {tender.closingTime}</p>
                        </div>
                        <ChevronDown size={16} className={`text-gray-400 mt-1 flex-shrink-0 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                    </div>
                </div>
            </div>

            {/* Expanded panel */}
            <motion.div
                initial={false}
                animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
            >
                <div className="px-6 py-5 bg-orange-50/20 border-t border-orange-100/60">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
                        {tender.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tender.documents.map((doc, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 shadow-sm"
                            >
                                <span className="flex flex-col items-center justify-center w-7 h-7 rounded-md bg-orange-50 border border-orange-100 flex-shrink-0 gap-px">
                                    <FileText size={10} className="text-[var(--text-orange-500)]" />
                                    <span className="text-[7px] font-bold text-[var(--text-orange-500)] uppercase leading-none">PDF</span>
                                </span>
                                <span className="text-xs font-medium text-gray-700">{doc.name}</span>
                                <div className="flex items-center gap-1 ml-1">
                                    <button
                                        onClick={() => onPreview(doc)}
                                        className="p-1 rounded-md text-gray-400 hover:text-[var(--text-orange-500)] hover:bg-orange-50 transition-colors"
                                        title="Preview"
                                    >
                                        <Eye size={12} />
                                    </button>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                                        title="Download"
                                    >
                                        <Download size={12} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isActive && tender.applyUrl && (
                        <div className="mt-4 flex md:hidden">
                            <a
                                href={tender.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-[#0a0a0a] text-white text-xs font-medium px-4 py-2 rounded-lg"
                            >
                                Apply for this Tender <ExternalLink size={11} />
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>

            {!isLast && <div className="border-b border-gray-100 mx-6" />}
        </motion.div>
    );
};

const TendersPageV4 = () => {
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

    return (
        <div className="min-h-screen bg-[var(--bg-cream-50)] flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="pt-12 pb-8 px-6 border-b border-gray-200 bg-white">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
                            >
                                <Hash size={12} /> Bodhan AI / Procurement
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.08 }}
                                className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
                            >
                                Tenders &amp;{' '}
                                <span className="text-[var(--text-orange-500)]">Procurement</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.16 }}
                                className="text-gray-500 text-sm mt-2 max-w-xl"
                            >
                                Official tender notices. Click any row to view the full description and download documents.
                            </motion.p>
                        </div>

                        {/* Summary badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.22 }}
                            className="flex gap-3 flex-shrink-0"
                        >
                            <div className="text-center px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl">
                                <p className="text-2xl font-bold text-emerald-700">{activeCnt}</p>
                                <p className="text-xs text-emerald-600 font-medium">Active</p>
                            </div>
                            <div className="text-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl">
                                <p className="text-2xl font-bold text-gray-500">{closedCnt}</p>
                                <p className="text-xs text-gray-500 font-medium">Closed</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="max-w-5xl mx-auto px-6 pt-6 pb-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm"
                    >
                        {[
                            { key: 'active', label: 'Active', count: activeCnt },
                            { key: 'closed', label: 'Closed', count: closedCnt },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === tab.key
                                        ? 'bg-[#0a0a0a] text-white shadow-sm'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                {tab.label}
                                <span className={`text-xs font-semibold rounded-full px-1.5 py-0.5 ${
                                    activeTab === tab.key ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                                }`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Table */}
                <div className="max-w-5xl mx-auto px-6 pb-20 w-full">
                    <AnimatePresence mode="wait">
                        {filtered.length > 0 ? (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                {/* Column headers (desktop only) */}
                                <div
                                    className="hidden md:grid items-center px-6 py-3 bg-gray-50 border-b border-gray-100 gap-4"
                                    style={{ gridTemplateColumns: '48px 1fr 150px 90px 100px 110px' }}
                                >
                                    {['No.', 'Tender Title', 'Closing Date', 'Docs', 'Status', 'Action'].map((h) => (
                                        <span key={h} className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</span>
                                    ))}
                                </div>

                                {filtered.map((tender, index) => (
                                    <TenderRow
                                        key={tender.id}
                                        tender={tender}
                                        index={index}
                                        isLast={index === filtered.length - 1}
                                        onPreview={setPreviewDoc}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeTab + '-empty'}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20 bg-white rounded-2xl border border-gray-100"
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

export default TendersPageV4;
