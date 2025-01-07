# Analytics Documentation

## Usage

To track analytics events in your components, use the `useAnalytics` hook from the analytics provider:

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

## Event Types

See `src/lib/analytics/types.ts` for all available event types.

## Privacy and Cookie Consent

Analytics tracking respects user privacy preferences:
- Events are only tracked if the user has accepted cookies
- Cookie consent status is persisted in localStorage
- Essential functionality works without analytics consent

## Development Mode

In development mode:
- Event tracking is logged to console
- Initialization status is visible
- Errors are detailed

For more detailed documentation, see `src/lib/analytics/README.md`.