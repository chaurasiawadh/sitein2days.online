'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenContact?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu is open
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

  const isPortfolioDetail = pathname.startsWith('/portfolio/') && pathname !== '/portfolio';

  const navLinks = [
    { name: 'Explore', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${scrolled ? 'top-0 px-0' : 'top-3 sm:top-6 px-4'} pointer-events-none`}>
        <nav
          className={`pointer-events-auto w-full transition-all duration-500 ease-in-out flex items-center justify-between ${scrolled || isOpen
            ? 'bg-white/90 backdrop-blur-md sm:backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-gray-100'
            : 'bg-white/70 backdrop-blur-sm sm:backdrop-blur-md border border-white/50'
            } ${scrolled ? 'rounded-none max-w-full px-8 py-4' : 'rounded-full max-w-6xl px-6 py-3'}`}
        >
          {/* Logo / Back Button Section */}
          <div className="flex items-center gap-2 z-50 min-w-[140px] sm:min-w-[200px]">
            <AnimatePresence mode="wait">
              {isPortfolioDetail ? (
                <motion.div
                  key="back-button"
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/portfolio"
                    className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors group"
                  >
                    <div className="bg-gray-100 p-2 rounded-full group-hover:bg-gray-200 transition-colors">
                      <ArrowLeft size={16} />
                    </div>
                    <span className="font-bold text-sm sm:text-base whitespace-nowrap">Back to Portfolio</span>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className="bg-black p-1.5 rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
                      <Sparkles size={16} fill="#ccf381" className="text-accent" />
                    </div>
                    <span className="font-black text-lg tracking-tight text-black">
                      Zenitho<span className="text-gray-500 font-medium">Labs</span>
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black rounded-full hover:bg-gray-50 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/919680018108"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Connect on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-black bg-gray-100 rounded-full hover:bg-gray-200 transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
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
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="bg-black p-1.5 rounded-full text-white">
                    <Sparkles size={16} fill="#ccf381" className="text-accent" />
                  </div>
                  <span className="font-black text-lg tracking-tight text-black">
                    Zenitho<span className="text-gray-500 font-medium">Labs</span>
                  </span>
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
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
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
                  href="https://wa.me/919680018108"
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
    </>
  );
};

export default Navbar;