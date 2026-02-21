import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'sitein2days.online | Enterprise AI Automation Services & Agents',
  description: 'sitein2days.online builds custom AI agents using LangChain to automate support, data, and operations. Save 40% on costs and scale without hiring.',
  openGraph: {
    title: 'Automate Your Ops: AI Agents & Workflow Orchestration | sitein2days.online',
    description: 'Stop hiring for repetitive tasks. Our AI agents automate 75% of support tickets and manual workflows. See how we save teams 20-40 hrs/week.',
    url: '/',
    siteName: 'sitein2days.online',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: 'sitein2days.online AI Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sitein2days.online: AI Automation for Enterprise Operations',
    description: 'Scale your ops without scaling headcount. Custom LangChain agents for support & workflows.',
    images: ['/opengraph-image.jpg?v=2'],
  },
};



export default function Home() {
  return <HomeContent />;
}
