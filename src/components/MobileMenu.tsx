import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] z-40 bg-white shadow-2xl lg:hidden flex flex-col"
                    >
                        {/* Mobile Drawer Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                                <img src="/logo-large.png" alt="sitein2days.online logo" width={200} height={40} className="h-10 w-auto object-contain" />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2.5 text-black bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Mobile Drawer Links */}
                        <div className="flex flex-col py-8 px-6 space-y-2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl text-xl font-bold text-gray-900 active:bg-gray-50 transition-all group"
                                >
                                    <span>{link.name}</span>
                                    <span className="text-gray-300 group-active:text-gray-900 transition-colors">
                                        <ArrowRight size={20} />
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Drawer Footer / CTA */}
                        <div className="mt-auto p-6 border-t border-gray-100">
                            <a
                                href="https://wa.me/919936169852"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#25D366] text-white w-full py-4 rounded-xl font-bold text-lg hover:bg-[#20BA5A] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] active:scale-[0.98] block text-center"
                            >
                                Connect on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
