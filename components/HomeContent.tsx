'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero';
import { useContact } from './ClientLayoutWrapper';

const Services = dynamic(() => import('./Services'), { ssr: false });
const Process = dynamic(() => import('./Process'), { ssr: false });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const InteractiveProducts = dynamic(() => import('./InteractiveProducts'), { ssr: false });

export default function HomeContent() {
    const { open } = useContact();

    return (
        <>
            <Hero onOpenContact={open} />
            <Services />
            <Process />
            <Testimonials />
            <InteractiveProducts />
        </>
    );
}
