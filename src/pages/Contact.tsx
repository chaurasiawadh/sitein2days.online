import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, MapPin, ArrowRight, Loader2, MessageCircle } from 'lucide-react';

interface FormState {
    success: boolean;
    message: string | null;
    isLoading: boolean;
}

export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>({ success: false, message: null, isLoading: false });

    useEffect(() => { document.title = 'Contact Us | sitein2days.online'; }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState({ success: false, message: null, isLoading: true });
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => { data[key] = value as string; });
        try {
            const response = await fetch('https://formspree.io/f/chaurasiawadh@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setFormState({ success: true, message: "Thank you! We'll get back to you within 24 hours.", isLoading: false });
            } else {
                throw new Error('Failed');
            }
        } catch {
            setFormState({ success: false, message: "Something went wrong. Please email chaurasiawadh@gmail.com directly.", isLoading: false });
        }
    };

    return (
        <div className="min-h-screen pt-16 pb-16 sm:pt-24 sm:pb-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 sm:mb-12">
                    <span className="text-black font-bold tracking-wider uppercase text-sm border border-black rounded-full px-3 py-1 bg-white mb-6 inline-block">Contact Us</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black mb-6">Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Competitive Advantage</span></h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">Ready to scale? Partner with our elite engineering team to deploy AI-driven solutions and premium web products tailored for your business success.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        {formState.success ? (
                            <div className="flex flex-col items-center justify-center text-center py-16">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                    <ArrowRight size={32} className="-rotate-45" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-500 mb-6">{formState.message}</p>
                                <button onClick={() => setFormState({ success: false, message: null, isLoading: false })} className="text-blue-600 font-semibold hover:underline">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {formState.message && !formState.success && (
                                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{formState.message}</div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                                    <input required name="name" type="text" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2 mt-4">Email Address</label>
                                    <input required name="email" type="email" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="We'll get back to you here" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2 mt-4">Company Name</label>
                                    <input name="company" type="text" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Let us know who you represent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2 mt-4">Subject</label>
                                    <select required name="interest" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all">
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
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2 mt-4">Message</label>
                                    <textarea required name="projectDetails" rows={4} className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none" placeholder="Tell us how we can help" />
                                </div>
                                <button type="submit" disabled={formState.isLoading} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-4">
                                    {formState.isLoading ? (<><Loader2 size={18} className="animate-spin" /> Sending...</>) : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#25D366] rounded-lg p-6 shadow-md text-white">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><MessageCircle size={24} className="animate-pulse" /> Chat on WhatsApp</h3>
                            <p className="text-white/90 text-sm mb-4">Get instant answers to your questions. We're active right now!</p>
                            <a href="https://wa.me/919936169852" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-[#25D366] text-center font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
                                Start Conversation
                            </a>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Prefer a Direct Approach?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                                        <a href="tel:+919936169852" className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors">+91-9936169852</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Email</p>
                                        <a href="mailto:chaurasiawadh@gmail.com" className="text-gray-900 text-sm font-medium hover:text-blue-600 transition-colors">chaurasiawadh@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Working Hours</p>
                                        <p className="text-gray-900 text-sm font-medium">Monday to Friday, 9 AM - 6 PM (GMT)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Visit Our Office</h3>
                            <div className="flex items-start gap-3 mb-6">
                                <MapPin size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-900 text-sm font-medium">Lanka BHU, Varanasi</p>
                            </div>
                            <div className="rounded-lg overflow-hidden mb-4 h-48">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.123456789!2d82.9867!3d25.2677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2de0c3b5a5a5%3A0x0!2sLanka%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704967345000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                            <a href="https://maps.google.com/?q=Lanka+BHU+Varanasi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:gap-3 transition-all">
                                Get a Direction <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
