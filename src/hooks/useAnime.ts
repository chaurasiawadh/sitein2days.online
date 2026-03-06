import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface UseAnimeRevealProps {
    threshold?: number;
    delay?: number;
    duration?: number;
    translateY?: number | string;
    easing?: string;
    triggerOnce?: boolean;
}

/**
 * Hook to smoothly fade in and slide up an element when it scrolls into view.
 */
export function useAnimeReveal<T extends HTMLElement>(props: UseAnimeRevealProps = {}) {
    const {
        threshold = 0.1,
        delay = 0,
        duration = 800,
        translateY = 50,
        easing = 'easeOutExpo',
        triggerOnce = true
    } = props;

    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Initial hidden state
        element.style.opacity = '0';
        element.style.transform = `translateY(${typeof translateY === 'number' ? `${translateY}px` : translateY})`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: element,
                            opacity: [0, 1],
                            translateY: [translateY, 0],
                            duration,
                            delay,
                            easing,
                        });

                        if (triggerOnce) {
                            observer.unobserve(element);
                        }
                    } else if (!triggerOnce) {
                        // Reset if we want it to animate again when scrolling back
                        element.style.opacity = '0';
                        element.style.transform = `translateY(${typeof translateY === 'number' ? `${translateY}px` : translateY})`;
                    }
                });
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, delay, duration, translateY, easing, triggerOnce]);

    return ref;
}

/**
 * Hook for staggering children elements when the parent enters the viewport.
 */
export function useAnimeStaggerReveal<T extends HTMLElement>(childSelector: string, props: UseAnimeRevealProps & { staggerDelay?: number } = {}) {
    const {
        threshold = 0.1,
        delay = 0,
        duration = 800,
        translateY = 50,
        easing = 'easeOutExpo',
        staggerDelay = 100,
        triggerOnce = true
    } = props;

    const ref = useRef<T>(null);

    useEffect(() => {
        const parent = ref.current;
        if (!parent) return;

        const children = parent.querySelectorAll(childSelector);

        // Initial hidden state for children
        children.forEach((child) => {
            (child as HTMLElement).style.opacity = '0';
            (child as HTMLElement).style.transform = `translateY(${typeof translateY === 'number' ? `${translateY}px` : translateY})`;
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: children,
                            opacity: [0, 1],
                            translateY: [translateY, 0],
                            duration,
                            delay: anime.stagger(staggerDelay, { start: delay }),
                            easing,
                        });

                        if (triggerOnce) {
                            observer.unobserve(parent);
                        }
                    } else if (!triggerOnce) {
                        children.forEach((child) => {
                            (child as HTMLElement).style.opacity = '0';
                            (child as HTMLElement).style.transform = `translateY(${typeof translateY === 'number' ? `${translateY}px` : translateY})`;
                        });
                    }
                });
            },
            { threshold }
        );

        observer.observe(parent);

        return () => {
            if (parent) observer.unobserve(parent);
        };
    }, [childSelector, threshold, delay, duration, translateY, easing, staggerDelay, triggerOnce]);

    return ref;
}

/**
 * Hook for hover animations (scale up, shadow, etc).
 */
export function useAnimeHover<T extends HTMLElement>(props: { scale?: number, duration?: number } = {}) {
    const { scale = 1.05, duration = 300 } = props;
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let hoverAnim: anime.AnimeInstance | null = null;
        let leaveAnim: anime.AnimeInstance | null = null;

        const onMouseEnter = () => {
            if (leaveAnim) leaveAnim.pause();
            hoverAnim = anime({
                targets: element,
                scale: scale,
                translateY: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration,
                easing: 'easeOutElastic(1, .8)',
            });
        };

        const onMouseLeave = () => {
            if (hoverAnim) hoverAnim.pause();
            leaveAnim = anime({
                targets: element,
                scale: 1,
                translateY: 0,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                duration,
                easing: 'easeOutQuad',
            });
        };

        element.addEventListener('mouseenter', onMouseEnter);
        element.addEventListener('mouseleave', onMouseLeave);

        return () => {
            element.removeEventListener('mouseenter', onMouseEnter);
            element.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [scale, duration]);

    return ref;
}
