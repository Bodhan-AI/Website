import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, FileText, ExternalLink, ChevronDown, Download, Eye, X } from 'lucide-react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

// ─── Tender Data ────────────────────────────────────────────────────────────
// Add or edit tenders here. Each tender can have one or more PDF documents.
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
        status: 'closed',
        title: 'Office Space Lease – Chennai',
        description:
            'Bodhan AI had invited proposals from property owners / real estate agencies for leasing furnished office space (approximately 3,000–5,000 sq. ft.) in Chennai for a period of 2 years with an option to extend.',
        closingDate: '2026-01-20',
        closingTime: '17:00 IST',
        documents: [
            { name: 'Tender Document', url: 'https://drive.google.com/uc?export=download&id=1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde', previewUrl: 'https://drive.google.com/file/d/1cxgnv9Izmy-1HSB5dVXMucdNaSsH-Xde/preview' },
        ],
        applyUrl: 'https://docs.google.com/forms/d/e/example-form-id-2/viewform',
    },
];
// ────────────────────────────────────────────────────────────────────────────

const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

const StatusBadge = ({ status }) =>
    status === 'active' ? (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
        </span>
    ) : (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            Closed
        </span>
    );

// Google Docs viewer works for any publicly accessible PDF URL.
// For Google Drive files, use the direct download link:
//   https://drive.google.com/uc?export=download&id=FILE_ID
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
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="relative bg-white rounded-2xl shadow-2xl flex flex-col w-full max-w-4xl"
                    style={{ height: '85vh' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex-shrink-0">
                                <FileText size={14} className="text-[var(--text-orange-500)]" />
                            </span>
                            <span className="font-semibold text-[#1A1A1A] truncate">{doc.name}</span>
                            <span className="text-xs text-gray-400 uppercase font-mono flex-shrink-0">PDF</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                            <a
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#0a0a0a] bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                            >
                                <Download size={12} />
                                Download
                            </a>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
                                aria-label="Close preview"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Iframe */}
                    <iframe
                        src={doc.previewUrl || getPreviewUrl(doc.url)}
                        className="flex-1 w-full rounded-b-2xl"
                        title={doc.name}
                        allow="fullscreen"
                    />
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

const TenderCard = ({ tender, index, onPreview }) => {
    const [expanded, setExpanded] = useState(false);
    const isActive = tender.status === 'active';

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
            {/* Card Header — always visible */}
            <div
                className="p-6 md:p-8 cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <StatusBadge status={tender.status} />
                            <span className="text-xs text-gray-400 font-mono">{tender.id}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2 leading-snug">
                            {tender.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                            {tender.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar size={13} />
                                Closes: {formatDate(tender.closingDate)}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock size={13} />
                                {tender.closingTime}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <FileText size={13} />
                                {tender.documents.length} document{tender.documents.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </div>

                    {/* Right side: Apply + Chevron */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        {isActive && tender.applyUrl && (
                            <a
                                href={tender.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-[#0a0a0a] text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-black transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Apply Now
                                <ExternalLink size={13} />
                            </a>
                        )}
                        <button
                            className={`p-2 rounded-full hover:bg-gray-100 transition-all ${expanded ? 'rotate-180' : ''}`}
                            aria-label="Toggle details"
                        >
                            <ChevronDown size={20} className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Expandable Details */}
            <motion.div
                initial={false}
                animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="px-6 md:px-8 pb-8 pt-0 border-t border-gray-100">
                    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Full Description */}
                        <div>
                            <h4 className="text-sm font-semibold text-[var(--text-orange-500)] uppercase tracking-wide mb-3">
                                About This Tender
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {tender.description}
                            </p>
                            <div className="mt-4 space-y-2 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                                    <span>
                                        Closing Date:{' '}
                                        <span className="font-medium text-gray-700">
                                            {formatDate(tender.closingDate)}
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-gray-400 flex-shrink-0" />
                                    <span>
                                        Closing Time:{' '}
                                        <span className="font-medium text-gray-700">
                                            {tender.closingTime}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Documents */}
                        <div>
                            <h4 className="text-sm font-semibold text-[var(--text-orange-500)] uppercase tracking-wide mb-3">
                                Tender Documents
                            </h4>
                            <ul className="space-y-2.5">
                                {tender.documents.map((doc, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex-shrink-0 gap-0.5">
                                            <FileText size={12} className="text-[var(--text-orange-500)]" />
                                            <span className="text-[9px] font-bold text-[var(--text-orange-500)] uppercase leading-none tracking-wide">PDF</span>
                                        </span>
                                        <span className="text-sm font-medium text-gray-700 flex-1 min-w-0 truncate">
                                            {doc.name}
                                        </span>
                                        <button
                                            onClick={() => onPreview(doc)}
                                            className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[var(--text-orange-500)] bg-gray-100 hover:bg-orange-50 px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                                            title="Preview"
                                        >
                                            <Eye size={12} />
                                            Preview
                                        </button>
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#0a0a0a] bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                                            title="Download"
                                        >
                                            <Download size={12} />
                                            Download
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Apply Button */}
                    {isActive && tender.applyUrl && (
                        <div className="mt-8 pt-6 border-t border-gray-50 flex justify-end">
                            <a
                                href={tender.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-[#0a0a0a] text-white text-sm font-medium py-2.5 px-6 rounded-lg hover:bg-black transition-colors"
                            >
                                Apply for this Tender
                                <ExternalLink size={13} />
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const TendersPage = () => {
    const [activeTab, setActiveTab] = useState('active');
    const [previewDoc, setPreviewDoc] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Prevent body scroll when modal is open
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
            <div className="pt-12 pb-6 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4"
                    >
                        Tenders &amp;{' '}
                        <span className="text-[var(--text-orange-500)]">Procurement</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto"
                    >
                        Official tender notices and procurement opportunities from Bodhan AI.
                        Download documents and submit applications through the links below.
                    </motion.p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-5xl mx-auto px-6 mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm"
                >
                    {[
                        { key: 'active', label: 'Active', count: activeCnt },
                        { key: 'closed', label: 'Closed', count: closedCnt },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`relative flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                activeTab === tab.key
                                    ? 'bg-[#0a0a0a] text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            {tab.label}
                            <span
                                className={`text-xs font-semibold rounded-full px-1.5 py-0.5 ${
                                    activeTab === tab.key
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-100 text-gray-500'
                                }`}
                            >
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Tender Listings */}
            <div className="max-w-5xl mx-auto px-6 pb-20">
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
                                <TenderCard key={tender.id} tender={tender} index={index} onPreview={setPreviewDoc} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key={activeTab + '-empty'}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
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

export default TendersPage;
