import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
//metadata friendly seo
import { Metadata } from 'next';
//how to build a site map in next js
export const metadata: Metadata = {
  title: {
    default: 'CTenvios - International Shipping to Cuba',
    template: '%s | CTenvios',
  },
  description:
    'CTenvios, envios internacionales a Cuba con mas de 20 años de experiencia, agencia de envios a Cuba.',
  keywords: [
    'shipping',
    'Cuba',
    'logistics',
    'international',
    'cargo',
    'maritime',
    'air',
    'shipping',
    'envios',
    'Cuba',
    'envios maritimos',
    'agencia de envios a cuba',
    'paquetes a cuba',
    'paqueteria a cuba',
    'agencia de envios a cuba en hialeah',
  ],
  authors: [{ name: 'CTenvios' }],
  creator: 'yleecruz@gmail.com',
  publisher: 'yleecruz@gmail.com',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CTenvios - Envios Internacionales a Cuba',
    description:
      'Envios internacionales a Cuba con mas de 20 años de experiencia, agencia de envios a Cuba.',
    url: 'https://www.ctenvios.com',
    siteName: 'CTenvios',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CTenvios Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTenvios - International Shipping to Cuba',
    description:
      'Reliable and efficient shipping services to Cuba with over 20 years of experience.',
    images: ['/og-image.png'],
    creator: '@ctenvios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      bing: 'your-bing-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full ">
      <title>CTEnvios - International Shipping to Cuba</title>
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
