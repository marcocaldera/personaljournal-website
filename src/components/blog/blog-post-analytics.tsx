'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/components/providers/analytics-provider';
import type { BlogPost } from '@/types/post';

interface BlogPostAnalyticsProps {
  post: BlogPost;
}

export function BlogPostAnalytics({ post }: BlogPostAnalyticsProps) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    console.log('Tracking blog post view:', post);
    trackEvent({
      type: 'blog_post_view',
      title: post.title,
      slug: post._raw.flattenedPath.replace(/^posts\//, ''),
    });
  }, [post, trackEvent]);

  // This is an analytics wrapper component, so it doesn't render anything
  return null;
} 