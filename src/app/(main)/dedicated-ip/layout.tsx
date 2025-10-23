import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.dedicatedIp);

export default function DedicatedIpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Dedicated IP | Mailerblend"
        url="https://www.mailerblend.com/dedicated-ip/"
        description="Own your reputation with a dedicated IP. Warm-up guidance, monitoring, and support to maximize inbox placement for 150k+ emails/month."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/dedicated-ip/' },
          { name: 'Dedicated IP', url: 'https://www.mailerblend.com/dedicated-ip/' },
        ]}
      />
      {children}
    </>
  );
}
