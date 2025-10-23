import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.reportingAnalytics);

export default function ReportingAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Reporting & Analytics | Mailerblend"
        url="https://www.mailerblend.com/email-analytics-reporting/"
        description="Real-time dashboards for open/click rates, bounces, geos, devices. Export reports, access analytics via API, and optimize with split testing."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/email-analytics-reporting/' },
          { name: 'Reporting & Analytics', url: 'https://www.mailerblend.com/email-analytics-reporting/' },
        ]}
      />
      {children}
    </>
  );
}
