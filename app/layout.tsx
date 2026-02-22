import Script from 'next/script';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'sitein2days.online | Your Complete Digital Partner for AI, Shopify & Data',
  description: 'From custom AI agents and Shopify development to Power BI dashboards and marketing automation. Scale your operations with sitein2days.online.',
  metadataBase: new URL('https://sitein2days.online'),
  robots: 'index, follow',
  alternates: { canonical: '/' },
  icons: {
    icon: '/logo-small.png',
  },
  openGraph: {
    title: 'sitein2days.online | Your Complete Digital Partner',
    description: 'Transform your business with our custom AI automation, Shopify e-commerce solutions, and actionable data analytics.',
    url: 'https://sitein2days.online',
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

import { getOrganizationSchema, getWebSiteSchema, JsonLdScript } from '@/lib/json-ld';

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLdScript data={organizationSchema} id="organization-schema" />
        <JsonLdScript data={websiteSchema} id="website-schema" />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>

        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6999d3cf3614221c3644ab47/1ji0e6pcq';
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
