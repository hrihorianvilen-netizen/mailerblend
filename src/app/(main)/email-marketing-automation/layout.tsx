import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.marketingAutomation);

export default function MarketingAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Email Marketing Automation | Mailerblend"
        url="https://www.mailerblend.com/email-marketing-automation/"
        description="Build customer journeys in minutes. 50+ templates, real-time triggers, segmentation, and goal tracking. No code required."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/email-marketing-automation/' },
          { name: 'Email Marketing Automation', url: 'https://www.mailerblend.com/email-marketing-automation/' },
        ]}
      />
      {children}
    </>
  );
}
