import { FAQItem } from '@/constants';
import React from 'react';

export type OrganizationSchema = {
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: string;
    legalName?: string;
    url: string;
    logo: string;
    description: string;
    contactPoint?: Array<{
        '@type': 'ContactPoint';
        telephone?: string;
        contactType: string;
        email?: string;
        areaServed?: string | string[];
        availableLanguage?: string | string[];
        url?: string;
    }>;
    sameAs?: string[];
    address?: {
        '@type': 'PostalAddress';
        streetAddress?: string;
        addressLocality?: string;
        addressRegion?: string;
        postalCode?: string;
        addressCountry?: string;
    };
};

export type ServiceSchema = {
    '@context': 'https://schema.org';
    '@type': 'Service';
    serviceType: string;
    provider: {
        '@type': 'Organization';
        name: string;
        url: string;
    };
    areaServed?: string;
    description: string;
    offers?: {
        '@type': 'Offer';
        priceCurrency?: string;
        price?: string;
        availability?: string;
    };
};

export type FAQPageSchema = {
    '@context': 'https://schema.org';
    '@type': 'FAQPage';
    mainEntity: Array<{
        '@type': 'Question';
        name: string;
        acceptedAnswer: {
            '@type': 'Answer';
            text: string;
        };
    }>;
};

export type HowToSchema = {
    '@context': 'https://schema.org';
    '@type': 'HowTo';
    name: string;
    description: string;
    step: Array<{
        '@type': 'HowToStep';
        name: string;
        text: string;
        url?: string;
    }>;
    totalTime?: string;
    tool?: Array<{
        '@type': 'HowToTool';
        name: string;
    }>;
};

export type ReviewSchema = {
    '@context': 'https://schema.org';
    '@type': 'Review';
    itemReviewed: {
        '@type': 'Service' | 'Organization';
        name: string;
    };
    reviewRating: {
        '@type': 'Rating';
        ratingValue: number;
        bestRating: string;
    };
    author: {
        '@type': 'Person' | 'Organization';
        name: string;
    };
    reviewBody: string;
};

export type ArticleSchema = {
    '@context': 'https://schema.org';
    '@type': 'Article';
    headline: string;
    description: string;
    image: string[];
    author: {
        '@type': 'Person' | 'Organization';
        name: string;
        url?: string;
    };
    publisher: {
        '@type': 'Organization';
        name: string;
        logo: {
            '@type': 'ImageObject';
            url: string;
        };
    };
    datePublished: string;
    dateModified?: string;
};

const BASE_URL = 'https://zenitholabs.com';
const ORGANIZATION_NAME = 'Zenitho Labs';

export function getOrganizationSchema(): OrganizationSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: ORGANIZATION_NAME,
        legalName: 'Zenitho Labs', // Assuming similar legal name
        url: BASE_URL,
        logo: `${BASE_URL}/icon.svg`,
        description: 'Zenitho Labs automates business operations using AI agents and workflow orchestration. We save teams 20-40 hours/week by automating repetitive tasks.',
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'hello@zenitholabs.com', // Placeholder, confirm if available
                url: `${BASE_URL}/contact`,
            },
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'sales@zenitholabs.com', // Placeholder
                url: `${BASE_URL}/contact`,
            }
        ],
        sameAs: [
            'https://twitter.com/zenitholabs', // Placeholder
            'https://linkedin.com/company/zenitholabs' // Placeholder
        ]
    };
}

export function getServiceSchema(service: { title: string; description: string }): ServiceSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.title,
        provider: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            url: BASE_URL,
        },
        description: service.description,
        areaServed: 'Worldwide',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        }
    };
}

export function getFAQSchema(faqs: FAQItem[]): FAQPageSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function getHowToSchema(data: { name: string; description: string; steps: { name: string; text: string }[]; totalTime?: string; tools?: string[] }): HowToSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: data.name,
        description: data.description,
        step: data.steps.map((step) => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text,
        })),
        totalTime: data.totalTime,
        tool: data.tools?.map(tool => ({
            '@type': 'HowToTool',
            name: tool
        }))
    };
}

export function getReviewSchema(review: { itemReviewed: string; rating: number; author: string; text: string }): ReviewSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
            '@type': 'Service',
            name: review.itemReviewed,
        },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating,
            bestRating: '5',
        },
        author: {
            '@type': 'Person',
            name: review.author,
        },
        reviewBody: review.text,
    };
}

export function getArticleSchema(article: { headline: string; description: string; image: string[]; author: string; datePublished: string; dateModified?: string }): ArticleSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        image: article.image,
        author: {
            '@type': 'Person',
            name: article.author,
        },
        publisher: {
            '@type': 'Organization',
            name: ORGANIZATION_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/icon.svg`,
            },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
    };
}

export function JsonLdScript<T extends object>({ data, id }: { data: T; id?: string }): React.JSX.Element {
    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
