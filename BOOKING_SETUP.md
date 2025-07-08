# MariachiHub Booking Funnel Setup

## Overview
This booking funnel provides a premium, conversion-optimized experience for booking mariachi services with Stripe payment integration.

## Features
- **Multi-step booking process**: Date/time → Package selection → Payment
- **Stripe integration**: Secure payment processing with Elements
- **Responsive design**: Works on all devices
- **State management**: Persists booking data between steps
- **Validation**: Form validation at each step
- **Progress tracking**: Visual progress indicator

## Booking Flow
1. `/book/availability` - Select date, time, and city
2. `/book/details` - Choose package and enter event details
3. `/book/checkout` - Complete payment with Stripe
4. `/thank-you` - Confirmation page with booking summary

## Setup Instructions

### 1. Install Dependencies
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js react-datepicker date-fns stripe
```

### 2. Environment Variables
Create a `.env.local` file in your project root:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

### 3. Stripe Setup
1. Create a Stripe account at https://stripe.com
2. Get your test API keys from the Stripe Dashboard
3. Replace the placeholder keys in your `.env.local` file
4. For production, use live keys instead of test keys

### 4. Test the Booking Flow
1. Start your development server: `npm run dev`
2. Navigate to `/book` (redirects to `/book/availability`)
3. Complete the booking flow with test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`

## File Structure
```
src/
├── app/
│   ├── book/
│   │   ├── availability/page.tsx    # Step 1: Date/Time/City
│   │   ├── details/page.tsx         # Step 2: Package/Details
│   │   └── checkout/page.tsx        # Step 3: Payment
│   ├── api/
│   │   └── create-payment-intent/
│   │       └── route.ts             # Stripe API endpoint
│   └── thank-you/page.tsx           # Confirmation page
├── components/
│   ├── BookingSteps.tsx             # Progress indicator
│   └── StripeForm.tsx               # Payment form
└── lib/
    └── booking.ts                   # State management & utilities
```

## Customization

### Pricing
Update package prices in `src/lib/booking.ts`:
```typescript
export const groupSizes = [
  { id: '3', name: '3 Musicians', price: 299, description: '...' },
  { id: '4', name: '4 Musicians', price: 399, description: '...' },
  // Add more packages as needed
]
```

### Event Types
Add or modify event types:
```typescript
export const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: '💒' },
  { id: 'quinceanera', name: 'Quinceañera', icon: '👑' },
  // Add more event types
]
```

### Cities
Update available cities in `src/lib/cities.ts`:
```typescript
export const cities = [
  'tampa',
  'miami',
  'orlando',
  // Add more cities
]
```

## Security Considerations
- Never expose your Stripe secret key in client-side code
- Always validate payment amounts on the server
- Use HTTPS in production
- Implement proper error handling
- Consider adding rate limiting to the API endpoint

## Production Deployment
1. Set up production Stripe keys
2. Configure webhook endpoints for payment events
3. Set up email notifications for successful bookings
4. Implement proper logging and monitoring
5. Add analytics tracking for conversion optimization

## Future Enhancements
- Database integration (Supabase/PostgreSQL)
- Email confirmations (Resend/SendGrid)
- SMS notifications
- Calendar integration
- Customer dashboard
- Booking management system
- Analytics and reporting 