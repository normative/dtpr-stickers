import { useEffect } from 'react';

declare global {
  interface Window {
      gtag: any;
  }
}

interface Event {
  category?: string
  action?: string
  label?: string,
  value?: string,
}

export function trackEvent({
  category, action, label, value,
}: Event) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackPageview() {
  window.gtag('event', 'page_view', {
    page_location: window.location.pathname + window.location.search,
  });
}

export function useGAPageView() {
  useEffect(() => {
    trackPageview();
  }, []);
}
