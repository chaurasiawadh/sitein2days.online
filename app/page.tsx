import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'sitein2days.online | Your Complete Digital Partner for AI, Shopify & Data',
  description: 'From custom AI agents and Shopify development to Power BI dashboards and marketing automation. Scale your operations with sitein2days.online.',
  openGraph: {
    title: 'sitein2days.online | Your Complete Digital Partner',
    description: 'Transform your business with our custom AI automation, Shopify e-commerce solutions, and actionable data analytics.',
    url: '/',
    siteName: 'sitein2days.online',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo-large.png',
        width: 1200,
        height: 630,
        alt: 'sitein2days.online - Complete Digital Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sitein2days.online | Your Complete Digital Partner',
    description: 'AI Agents, Shopify Development, and Data Analytics to scale your operations.',
    images: ['/logo-large.png'],
  },
};



export default function Home() {
  return <HomeContent />;
}
