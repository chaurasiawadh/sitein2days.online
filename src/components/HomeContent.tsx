import React, { lazy, Suspense } from 'react';
import Hero from './Hero';
import { useContact } from '../App';

// Lazy load heavy homepage sections
const Services = lazy(() => import('./Services'));
const Process = lazy(() => import('./Process'));
const Testimonials = lazy(() => import('./Testimonials'));
const InteractiveProducts = lazy(() => import('./InteractiveProducts'));

const SectionLoader = () => (
    <div className="py-24 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin" />
    </div>
);

const HomeContent: React.FC = () => {
    const { open } = useContact();

    return (
        <>
            <Hero onOpenContact={open} />
            <Suspense fallback={<SectionLoader />}>
                <Services />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Process />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <InteractiveProducts />
            </Suspense>
        </>
    );
};

export default HomeContent;
