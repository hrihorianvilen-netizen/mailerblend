import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.security);

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Email Security & Deliverability | Mailerblend"
        url="https://www.mailerblend.com/email-security-deliverability/"
        description="AWS-backed infrastructure, regular pen tests, 2FA, data ownership, anti-spam, and GDPR resources to safeguard your data and reputation."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/email-security-deliverability/' },
          { name: 'Email Security & Deliverability', url: 'https://www.mailerblend.com/email-security-deliverability/' },
        ]}
      />
      {children}
    </>
  );
}
