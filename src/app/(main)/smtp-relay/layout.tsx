import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.smtpRelay);

export default function SmtpRelayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="SMTP Relay | Mailerblend"
        url="https://www.mailerblend.com/smtp-relay/"
        description="Connect in minutes via SMTP or API. TLS/SSL ports, SPF/DKIM/DMARC, real-time analytics, and 24/7 support for high deliverability."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/smtp-relay/' },
          { name: 'SMTP Relay', url: 'https://www.mailerblend.com/smtp-relay/' },
        ]}
      />
      {children}
    </>
  );
}
