import { ReactNode } from 'react';

export const metadata = {
  title: "Contact Us | MariachiHub",
  description:
    "Have questions or need a custom quote? Contact MariachiHub’s friendly team for fast support, booking inquiries, or partnership opportunities.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
