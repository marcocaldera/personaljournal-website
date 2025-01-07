import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { initFirebase } from '../firebase/firebase';
import { AnalyticsConfig, AnalyticsEvent, CookieConsentEvent } from './types';

const COOKIE_CONSENT_KEY = 'cookie-consent';

/**
 * Analytics Service
 * 
 * Core service for handling analytics events in the application.
 * Provides a type-safe, centralized way to track user interactions
 * and behavior using Firebase Analytics.
 * 
 * Features:
 * - Type-safe event tracking
 * - Development mode debugging
 * - Automatic error handling
 * - Environment-aware configuration
 * - Cookie consent compliance
 */
class AnalyticsService {
  private analytics: Analytics | null = null;
  private config: AnalyticsConfig = {
    enabled: process.env.NODE_ENV === 'production',
    // enabled: true,
    debug: process.env.NODE_ENV === 'development',
  };

  /**
   * Initializes the analytics service by setting up Firebase Analytics.
   * Should be called once at application startup.
   * 
   * @returns Promise<void>
   * @throws Error if Firebase initialization fails
   */
  async initialize(): Promise<void> {
    try {
      // Check if cookies are accepted before initializing
      const cookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (cookieConsent !== 'accepted') {
        if (this.config.debug) {
          console.log('Analytics not initialized: cookies not accepted');
        }
        return;
      }

      const { analytics } = await initFirebase();
      this.analytics = analytics;
      
      if (this.config.debug) {
        console.log('Analytics initialized:', !!this.analytics);
      }
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  /**
   * Maps internal event types to Firebase Analytics compatible event names.
   * Ensures event names follow Firebase naming conventions.
   * 
   * @param type - The internal event type
   * @returns Firebase-compatible event name
   */
  private mapEventTypeToFirebase(type: AnalyticsEvent['type']): string {
    const eventMap: Record<AnalyticsEvent['type'], string> = {
      page_view: 'page_view',
      blog_post_view: 'blog_post_view',
      theme_change: 'theme_change',
      navigation: 'navigation',
      external_link_click: 'external_link_click',
      content_scroll: 'content_scroll',
      reading_time: 'reading_time',
      cookie_consent: 'cookie_consent',
    };

    return eventMap[type];
  }

  /**
   * Tracks an analytics event with the provided data.
   * Automatically handles error cases and adds common metadata.
   * 
   * @param event - The event to track
   * @returns Promise<void>
   * 
   * @example
   * ```typescript
   * await analyticsService.trackEvent({
   *   type: 'page_view',
   *   path: '/blog'
   * });
   * ```
   */
  async trackEvent(event: AnalyticsEvent): Promise<void> {
    // Always allow cookie_consent events, regardless of analytics state
    const isCookieConsentEvent = event.type === 'cookie_consent';
    
    // Skip if analytics is disabled (except for cookie consent events)
    if (!isCookieConsentEvent && (!this.config.enabled || !this.analytics)) {
      if (this.config.debug) {
        console.log('Analytics disabled or not initialized. Event:', event);
      }
      return;
    }

    try {
      const { type, ...eventData } = event;
      const firebaseEventName = this.mapEventTypeToFirebase(type);
      
      // If it's a cookie consent event and cookies were accepted, initialize analytics
      if (isCookieConsentEvent && (event as CookieConsentEvent).status === 'accepted' && !this.analytics) {
        await this.initialize();
      }

      // Only proceed if analytics is available
      if (this.analytics) {
        await logEvent(this.analytics, firebaseEventName, {
          ...eventData,
          event_type: type,
          timestamp: Date.now(),
          environment: process.env.NODE_ENV,
        });

        if (this.config.debug) {
          console.log('Event tracked:', {
            type,
            firebase_event: firebaseEventName,
            ...eventData,
            timestamp: new Date().toISOString(),
          });
        }
      }
    } catch (error) {
      if (this.config.debug) {
        console.error('Failed to track event:', {
          event,
          error,
        });
      }
    }
  }

  /**
   * Enables or disables analytics tracking.
   * Useful for implementing user preferences or consent management.
   * 
   * @param enabled - Whether analytics should be enabled
   */
  setEnabled(enabled: boolean): void {
    this.config.enabled = enabled;
    
    // If analytics is being disabled, clear the instance
    if (!enabled && this.analytics) {
      this.analytics = null;
    }
  }
}

// Export a singleton instance
export const analyticsService = new AnalyticsService(); 