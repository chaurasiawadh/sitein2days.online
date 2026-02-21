import { PostHog } from 'posthog-node'
import { POSTHOG_KEY, POSTHOG_HOST } from '../credential'

export default function PostHogClient() {
    const posthogClient = new PostHog(POSTHOG_KEY, {
        host: POSTHOG_HOST,
        flushAt: 1,
        flushInterval: 0
    })
    return posthogClient
}
