import { Metadata } from 'next';

export interface SEOData {
  title: string;
  description: string;
  canonicalUrl: string;
  robots?: string;
  ogImage?: string;
}

export function generateMetadata(data: SEOData): Metadata {
  const { title, description, canonicalUrl, robots = 'index, follow', ogImage } = data;

  return {
    title,
    description,
    robots,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      siteName: 'Mailerblend',
      title,
      description,
      url: canonicalUrl,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Mailerblend',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
