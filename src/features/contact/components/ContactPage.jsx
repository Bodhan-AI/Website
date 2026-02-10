import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';

const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await fetch(SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            setStatus('success');
            setForm({ name: '', email: '', organization: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-cream-50)]">
            <Navbar />

            <div className="pt-10 md:pt-16 pb-16 md:pb-24 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-3 md:mb-4">
                            Get in <span className="text-[var(--text-orange-500)]">Touch</span>
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto md:whitespace-nowrap">
                            Have a question or want to collaborate? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-14">
                        {/* Left — Info Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-2 flex flex-col"
                        >
                            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-6 md:p-8 lg:p-10 text-white flex-1 flex flex-col justify-center">
                                <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Let's build together</h2>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Whether you're a government body, academic institution, researcher, or practitioner — we're eager to explore how AI can strengthen education across India.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 text-center h-full flex flex-col items-center justify-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                                        <CheckCircle size={32} className="text-green-500" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Message Sent!</h2>
                                    <p className="text-gray-500 mb-8 max-w-sm">
                                        Thank you for reaching out. We'll get back to you soon.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-sm font-medium text-[var(--text-orange-500)] hover:underline cursor-pointer"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-8 lg:p-10"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Name <span className="text-orange-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[var(--bg-cream-50)]/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Email <span className="text-orange-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[var(--bg-cream-50)]/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="organization"
                                                name="organization"
                                                value={form.organization}
                                                onChange={handleChange}
                                                placeholder="Your organization"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[var(--bg-cream-50)]/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Subject <span className="text-orange-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="What is this regarding?"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[var(--bg-cream-50)]/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Message <span className="text-orange-400">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[var(--bg-cream-50)]/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-medium py-3.5 px-6 rounded-xl hover:bg-black transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                        <Send size={16} />
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-center text-sm text-red-500 mt-4">
                                            Something went wrong. Please try again or email us at{' '}
                                            <a href="mailto:contact@bodhan.ai" className="underline">
                                                contact@bodhan.ai
                                            </a>
                                        </p>
                                    )}
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
