'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../constants';
import MobileMenu from './MobileMenu';

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
                  initial={{ opacity: 0, y: -1, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 1, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href="/" className="flex items-center group z-50">
                    <Image src="/logo-large.png" alt="sitein2days.online logo" width={300} height={10} className="h-10 w-auto scale-[3] ml-[60px] object-contain" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
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
              href="https://wa.me/919936169852"
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
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;