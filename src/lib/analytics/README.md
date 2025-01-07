# Analytics System Documentation

## Overview

The analytics system is designed to track user interactions and behavior in a privacy-focused, performant, and maintainable way. It uses Firebase Analytics as the backend and implements various tracking patterns for different user interactions.

## Architecture

The system follows a modular architecture with these key components:

```
src/lib/analytics/
├── analytics-service.ts    # Core analytics service
├── types.ts               # Type definitions
└── components/
    ├── page-view-analytics.tsx     # Page view tracking
    ├── link-analytics.tsx          # Navigation tracking
    └── reading-progress-analytics.tsx # Content consumption tracking
```

## Event Types

### Page Views
- **Type**: `page_view`
- **Tracked**: On route changes
- **Data**: Path and search parameters
- **Component**: `PageViewAnalytics`
- **Implementation**: Automatic tracking in root layout

### Blog Post Views
- **Type**: `blog_post_view`
- **Tracked**: When a blog post is loaded
- **Data**: Post title and slug
- **Component**: `BlogPostAnalytics`
- **Implementation**: Added to blog post pages

### Reading Progress
- **Type**: `content_scroll` & `reading_time`
- **Tracked**: During content consumption
- **Data**: 
  - Scroll percentage (25% intervals)
  - Reading duration
  - Completion status
- **Component**: `ReadingProgressAnalytics`
- **Implementation**: Debounced scroll tracking

### Navigation
- **Type**: `navigation` & `external_link_click`
- **Tracked**: User navigation patterns
- **Data**: Source, destination, navigation type
- **Component**: `LinkAnalytics`
- **Implementation**: Global click delegation

### Theme Changes
- **Type**: `theme_change`
- **Tracked**: Theme preference changes
- **Data**: Selected theme
- **Component**: Integrated in ThemeProvider
- **Implementation**: MutationObserver based

### Cookie Consent
- **Type**: `cookie_consent`
- **Tracked**: When user accepts/rejects cookies
- **Data**: Consent status
- **Component**: Integrated in CookieNotice
- **Implementation**: User interaction based

## Usage Examples

### Adding Page View Tracking
```tsx
// In root layout
import { PageViewAnalytics } from '@/components/analytics/page-view-analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsProvider>
      <PageViewAnalytics />
      {children}
    </AnalyticsProvider>
  );
}
```

### Tracking Custom Events
```tsx
import { useAnalytics } from '@/components/providers/analytics-provider';

function MyComponent() {
  const { trackEvent } = useAnalytics();

  const handleAction = () => {
    trackEvent({
      type: 'custom_event',
      // ... event data
    });
  };
}
```

## Best Practices

1. **Performance**
   - Use debouncing for frequent events (scroll, resize)
   - Implement passive event listeners
   - Clean up event listeners on unmount

2. **Privacy**
   - Only track necessary data
   - No personal information
   - Respect user preferences
   - Honor cookie consent

3. **Maintainability**
   - Keep analytics components separate
   - Use TypeScript for type safety
   - Document new event types

4. **Error Handling**
   - Graceful degradation
   - Debug logging in development
   - Silent failures in production

## Adding New Events

1. Add event type to `types.ts`:
```typescript
export type NewEventType = {
  type: 'new_event';
  // ... event properties
};

export type AnalyticsEvent = 
  | ExistingEvent
  | NewEventType;
```

2. Create tracking component if needed:
```typescript
export function NewEventAnalytics() {
  const { trackEvent } = useAnalytics();
  // ... implementation
}
```

3. Add to appropriate location in component tree

## Debugging

In development mode (`NODE_ENV === 'development'`):
- Event tracking is logged to console
- Initialization status is visible
- Errors are detailed

## Common Patterns

1. **Content Consumption**
   - Track initial view
   - Monitor progress
   - Record completion

2. **User Navigation**
   - Track entry points
   - Monitor flow
   - Record exit points

3. **Interaction Depth**
   - Progressive engagement
   - Feature usage
   - Session duration 