import { useEffect } from 'react';

declare global {
  interface Window {
      gtag: any;
  }
}

interface Event {
  eventCategory?: string
  eventAction?: string
  eventLabel?: string,
}

export function trackEvent(event: Event) {
  window.gtag('send', {
    hitType: 'event',
    ...event,
  });
}

export function trackPageview() {
  window.gtag('send', 'pageview', window.location.pathname + window.location.search);
}

export function useGAPageView() {
  useEffect(() => {
    trackPageview();
  }, []);
}
