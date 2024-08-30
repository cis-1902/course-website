import { Metadata } from 'next';

export const TITLE_BASE = 'CIS-1902';

export function makeTitle(pageName: string) {
  return `${pageName} | ${TITLE_BASE}`;
}

export const DEFAULT_METADATA = {
  metadataBase: new URL('https://pythonclass.org/'),
  title: TITLE_BASE,
  description:
    'Python Minicourse at UPenn for the Fall 2024 semester.',
  openGraph: {
    type: 'website',
    title: 'CIS-1902: Python',
    // images: ['/images/meta/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
} satisfies Metadata;
