import Script from 'next/script';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Automate Your Ops: AI Agents & Workflow Orchestration | Zenitho Labs',
  description: 'Stop hiring for repetitive tasks. Our AI agents automate 75% of support tickets and manual workflows. See how we save teams 20-40 hrs/week.',
  metadataBase: new URL('https://zenitholabs.com'),
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Automate Your Ops: AI Agents & Workflow Orchestration | Zenitho Labs',
    description: 'Stop hiring for repetitive tasks. Our AI agents automate 75% of support tickets and manual workflows. See how we save teams 20-40 hrs/week.',
    url: 'https://zenitholabs.com',
    siteName: 'Zenitho Labs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: 'Zenitho Labs - AI Automation & Workflow Orchestration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automate Your Ops: AI Agents & Workflow Orchestration | Zenitho Labs',
    description: 'Stop hiring for repetitive tasks. Our AI agents automate 75% of support tickets and manual workflows. See how we save teams 20-40 hrs/week.',
    images: ['/opengraph-image.jpg?v=2'],
  },
};

import { getOrganizationSchema, JsonLdScript } from '@/lib/json-ld';

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLdScript data={organizationSchema} id="organization-schema" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-57DVX9V7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>

        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57DVX9V7');
          `}
        </Script>
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/696368517c8bd319796accab/1jem4v0jc';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

