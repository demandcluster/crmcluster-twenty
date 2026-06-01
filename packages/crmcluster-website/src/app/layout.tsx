import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_TITLE = 'CRM Cluster — EU-hosted CRM, powered by Twenty';
const SITE_DESCRIPTION =
  'CRM Cluster builds custom AI-driven CRM solutions on top of Twenty, hosted in a private European cloud. Part of Demandcluster, based in the Netherlands.';

export const metadata: Metadata = {
  metadataBase: new URL('https://crmcluster.com'),
  title: { default: SITE_TITLE, template: '%s | CRM Cluster' },
  description: SITE_DESCRIPTION,
  applicationName: 'CRM Cluster',
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: 'CRM Cluster',
    type: 'website',
    locale: 'en_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

type RootLayoutProps = { children: ReactNode };

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={inter.variable}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
