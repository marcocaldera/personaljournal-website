/**
 * Page view event tracking
 * Triggered when a user visits a new page
 */
export type PageViewEvent = {
  type: 'page_view';
  path: string;
};

/**
 * Blog post view event tracking
 * Triggered when a user views a blog post
 */
export type BlogPostViewEvent = {
  type: 'blog_post_view';
  title: string;
  slug: string;
};

/**
 * Theme change event tracking
 * Triggered when a user changes their theme preference
 */
export type ThemeChangeEvent = {
  type: 'theme_change';
  theme: 'light' | 'dark' | 'system';
};

/**
 * Navigation event tracking
 * Triggered when a user navigates between pages
 */
export type NavigationEvent = {
  type: 'navigation';
  from: string;
  to: string;
  via: 'link' | 'browser' | 'menu';
};

/**
 * External link click event tracking
 * Triggered when a user clicks a link to an external site
 */
export type ExternalLinkClickEvent = {
  type: 'external_link_click';
  url: string;
  text: string;
  location: string;
};

/**
 * Content scroll event tracking
 * Triggered when a user scrolls through content
 * Tracks progress in 25% intervals
 */
export type ContentScrollEvent = {
  type: 'content_scroll';
  percentage: number;
  path: string;
};

/**
 * Reading time event tracking
 * Triggered when a user reads content
 * Tracks duration and completion status
 */
export type ReadingTimeEvent = {
  type: 'reading_time';
  duration: number; // in seconds
  slug: string;
  title: string;
  completed: boolean;
};

/**
 * Cookie consent event tracking
 * Triggered when a user accepts or rejects cookies
 */
export type CookieConsentEvent = {
  type: 'cookie_consent';
  status: 'accepted' | 'rejected';
};

/**
 * Union type of all possible analytics events
 * Add new event types here to make them available throughout the application
 */
export type AnalyticsEvent = 
  | PageViewEvent 
  | BlogPostViewEvent 
  | ThemeChangeEvent
  | NavigationEvent
  | ExternalLinkClickEvent
  | ContentScrollEvent
  | ReadingTimeEvent
  | CookieConsentEvent;

/**
 * Analytics service configuration
 * Controls the behavior of the analytics system
 */
export interface AnalyticsConfig {
  /** Whether analytics tracking is enabled */
  enabled: boolean;
  /** Whether to show debug information in console */
  debug?: boolean;
} 