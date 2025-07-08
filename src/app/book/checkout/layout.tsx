import { ReactNode } from 'react'

export const metadata = {
  title: 'Checkout | MariachiHub Booking Step 3',
  description:
    'Finalize your mariachi band booking with secure Stripe payments. Review your details and reserve your date with confidence.',
}

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
