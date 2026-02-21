'use client';

import React, { useState, createContext, ReactNode, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { usePathname } from 'next/navigation';
import { PHProvider } from '../app/Providers';

export const ContactContext = createContext<{ open: () => void } | undefined>(undefined);
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

    // Check if current route is an admin route
    const isAdminRoute = pathname?.startsWith('/admin');

    return (
        <PHProvider>
            <ContactContext.Provider value={{ open: openContact }}>
                {!isAdminRoute && <Navbar onOpenContact={openContact} />}
                <main className={isAdminRoute ? '' : 'pt-20 min-h-screen'}>{children}</main>
                {!isAdminRoute && <Footer />}
                {!isAdminRoute && <ContactModal isOpen={isContactOpen} onClose={closeContact} />}
            </ContactContext.Provider>
        </PHProvider>
    );
}
