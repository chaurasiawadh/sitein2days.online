import React, { Suspense, lazy, useState, createContext, useContext, useEffect, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Lazy load all pages for route-level code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetail = lazy(() => import('./pages/PortfolioDetail'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Affiliate = lazy(() => import('./pages/Affiliate'));
const Policy = lazy(() => import('./pages/Policy'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Contact context
export const ContactContext = createContext<{ open: () => void } | undefined>(undefined);
export const useContact = () => {
    const ctx = useContext(ContactContext);
    if (!ctx) throw new Error('useContact must be used within ContactProvider');
    return ctx;
};

function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
        </div>
    );
}

function AppLayout({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <ContactContext.Provider value={{ open: openContact }}>
            <Navbar onOpenContact={openContact} />
            <main className="pt-20 min-h-screen">{children}</main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        </ContactContext.Provider>
    );
}

// Tawk.to chat script loader
function TawkToScript() {
    useEffect(() => {
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6999d3cf3614221c3644ab47/1ji0e6pcq';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        document.head.appendChild(s1);
        return () => {
            document.head.removeChild(s1);
        };
    }, []);
    return null;
}

export default function App() {
    return (
        <BrowserRouter>
            <TawkToScript />
            <AppLayout>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/affiliate" element={<Affiliate />} />
                        <Route path="/policy" element={<Policy />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </AppLayout>
        </BrowserRouter>
    );
}
