import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'PrivateParty | RSVP privately', description: 'Privacy-preserving RSVPs powered by Midnight.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}