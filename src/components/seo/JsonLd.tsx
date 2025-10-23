import React from 'react';

interface WebSiteSchemaProps {
  searchUrl?: string;
}

export function WebSiteSchema({ searchUrl = 'https://www.mailerblend.com/search?q={search_term_string}' }: WebSiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mailerblend',
    url: 'https://www.mailerblend.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: searchUrl,
      'query-input': 'required name=search_term_string',
    },
    sameAs: [
      'https://www.facebook.com/mailerblend',
      'https://www.linkedin.com/company/mailerblend',
      'https://twitter.com/mailerblend',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  name: string;
  url: string;
  description: string;
  breadcrumb?: BreadcrumbItem[];
}

interface SchemaOrg {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  breadcrumb?: {
    '@type': string;
    itemListElement: Array<{
      '@type': string;
      position: number;
      name: string;
      item: string;
    }>;
  };
}

export function WebPageSchema({ name, url, description, breadcrumb }: WebPageSchemaProps) {
  const schema: SchemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    url,
    description,
  };

  // Add breadcrumb if provided
  if (breadcrumb && breadcrumb.length > 0) {
    schema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
