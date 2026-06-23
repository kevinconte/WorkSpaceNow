import { useEffect, useRef } from 'react';

/**
 * Adds the class "revealed" to each child matching `selector`
 * as it enters the viewport while scrolling.
 */
export function useReveal<T extends HTMLElement>(selector: string) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const targets = container.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector]);

    return ref;
}
