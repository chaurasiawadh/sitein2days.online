'use client';

import React, { useState, createContext, ReactNode, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { usePathname } from 'next/navigation';


const ContactContext = createContext<{ open: () => void } | undefined>(undefined);
export const useContact = () => {
    const ctx = useContext(ContactContext);
    if (!ctx) throw new Error('useContact must be used within ContactProvider');
    return ctx;
};

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);
    const pathname = usePathname();

    return (
        <ContactContext.Provider value={{ open: openContact }}>
            <Navbar onOpenContact={openContact} />
            <main className="pt-20 min-h-screen">{children}</main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        </ContactContext.Provider>
    );
}
