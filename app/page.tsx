import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Zenitho Labs | Enterprise AI Automation Services & Agents',
  description: 'Zenitho Labs builds custom AI agents using LangChain to automate support, data, and operations. Save 40% on costs and scale without hiring.',
  openGraph: {
    title: 'Automate Your Ops: AI Agents & Workflow Orchestration | Zenitho Labs',
    description: 'Stop hiring for repetitive tasks. Our AI agents automate 75% of support tickets and manual workflows. See how we save teams 20-40 hrs/week.',
    url: '/',
    siteName: 'Zenitho Labs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: 'Zenitho Labs AI Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenitho Labs: AI Automation for Enterprise Operations',
    description: 'Scale your ops without scaling headcount. Custom LangChain agents for support & workflows.',
    images: ['/opengraph-image.jpg?v=2'],
  },
};



export default function Home() {
  return <HomeContent />;
}
