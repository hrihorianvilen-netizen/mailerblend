import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.integrations);

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Email Marketing Integrations | Mailerblend"
        url="https://www.mailerblend.com/email-marketing-integrations/"
        description="Connect WooCommerce, Shopify, WordPress, Laravel, Zapier/Make, Slack, and more. Trigger emails/SMS from any app—no heavy lifting."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/email-marketing-integrations/' },
          { name: 'Email Marketing Integrations', url: 'https://www.mailerblend.com/email-marketing-integrations/' },
        ]}
      />
      {children}
    </>
  );
}
