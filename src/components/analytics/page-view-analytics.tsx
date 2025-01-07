'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analyticsService } from '@/lib/analytics/analytics-service';

export function PageViewAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view when pathname or search params change
    analyticsService.trackEvent({
      type: 'page_view',
      path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
    });
  }, [pathname, searchParams]);

  return null;
} 