import React, { useEffect, useState } from 'react';
import { X, Loader2, ArrowRight } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormState {
    success: boolean;
    message: string | null;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [state, setState] = useState<FormState>({ success: false, message: null });
    const [pending, setPending] = useState(false);

    useEffect(() => {
        if (state.success) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [state.success, onClose]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Reset state on close
    useEffect(() => {
        if (!isOpen) {
            setState({ success: false, message: null });
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const interest = data.get('interest') as string;
        const projectDetails = data.get('projectDetails') as string;

        // Build mailto link as fallback since no server action
        const subject = encodeURIComponent(`Project Inquiry: ${interest}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${interest}\n\nMessage:\n${projectDetails}`);
        window.open(`mailto:chaurasiawadh@gmail.com?subject=${subject}&body=${body}`, '_blank');

        setTimeout(() => {
            setPending(false);
            setState({ success: true, message: 'Your email client has opened. Please send the email to complete your inquiry.' });
        }, 500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                style={{ animation: 'fadeIn 0.2s ease-out' }}
            />

            {/* Modal Container */}
            <div
                className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
                style={{ animation: 'scaleIn 0.3s ease-out' }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                >
                    <X size={20} className="text-gray-500" />
                </button>

                {/* Modal Content */}
                <div className="p-8">
                    {/* Header */}
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Let's Talk About Your Project</h2>

                    {state.success ? (
                        <div className="flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                <ArrowRight size={32} className="-rotate-45" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Almost there!</h3>
                            <p className="text-gray-500 mb-6">{state.message}</p>
                            <button
                                onClick={onClose}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {state.message && !state.success && (
                                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                                    {state.message}
                                </div>
                            )}

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="Your full name"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="We'll get back to you here"
                                />
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Company Name</label>
                                <input
                                    name="company"
                                    type="text"
                                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="Let us know who you represent"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                                <select
                                    required
                                    name="interest"
                                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                >
                                    <option value="">What's this about?</option>
                                    <option value="web-dev">Custom AI Development</option>
                                    <option value="shopify">Shopify Development</option>
                                    <option value="ai-automation">AI Automation</option>
                                    <option value="documentation">Documentation</option>
                                    <option value="profitability">Profitability Analysis</option>
                                    <option value="growth">Growth & Marketing</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                                <textarea
                                    required
                                    name="projectDetails"
                                    rows={4}
                                    className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                    placeholder="Tell us how we can help"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={pending}
                                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                                >
                                    {pending ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" /> Opening email...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default ContactModal;
