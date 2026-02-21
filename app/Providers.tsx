'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'
import { ReactNode } from 'react'
import { POSTHOG_KEY, POSTHOG_HOST } from '../credential'

if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        person_profiles: 'identified_only',
        capture_pageview: false,
        disable_session_recording: isLocalhost,
        loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') console.log('PostHog loaded')
        }
    })
}

export function PHProvider({ children }: { children: ReactNode }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
