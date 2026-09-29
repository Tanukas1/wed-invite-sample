import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://saiyam-jenny.invitationmedia.in'),
  title: 'Saiyam & Jenny - Wedding Invitation',
  description: 'Saiyam & Jenny - Wedding Invitation · 7th July 2026',
  openGraph: {
    title: 'Saiyam & Jenny - Wedding Invitation',
    description: 'Saiyam & Jenny - Wedding Invitation · 7th July 2026',
    type: 'website',
    images: ['/social-og.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saiyam & Jenny - Wedding Invitation',
    description: 'Saiyam & Jenny - Wedding Invitation · 7th July 2026',
    images: ['/social-og.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Candlescript.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
