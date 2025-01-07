'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/components/providers/analytics-provider';
import { usePathname } from 'next/navigation';

export function LinkAnalytics() {
  const { trackEvent } = useAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;

      const href = link.href;
      const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
      
      if (isExternal) {
        trackEvent({
          type: 'external_link_click',
          url: href,
          text: link.textContent || '',
          location: pathname,
        });
      } else if (href !== window.location.href) {
        trackEvent({
          type: 'navigation',
          from: pathname,
          to: href,
          via: 'link',
        });
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname, trackEvent]);

  // Also track browser navigation
  useEffect(() => {
    const handlePopState = () => {
      trackEvent({
        type: 'navigation',
        from: pathname,
        to: window.location.pathname,
        via: 'browser',
      });
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname, trackEvent]);

  return null;
} 