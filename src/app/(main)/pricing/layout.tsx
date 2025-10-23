import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.pricing);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Pricing | Mailerblend"
        url="https://www.mailerblend.com/pricing/"
        description="See simple pricing plans for Mailerblend — the all-in-one email and SMS automation platform for SMBs."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Pricing', url: 'https://www.mailerblend.com/pricing/' },
        ]}
      />
      {children}
    </>
  );
}
