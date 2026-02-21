'use client';

import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import Testimonials from './Testimonials';
import InteractiveProducts from './InteractiveProducts';
import Partners from './Partners';
import { useContact } from './ClientLayoutWrapper';

export default function HomeContent() {
    const { open } = useContact();

    return (
        <>
            <Hero onOpenContact={open} />
            <Services />
            <Process />
            <Testimonials />
            <InteractiveProducts />
            <Partners />
        </>
    );
}
