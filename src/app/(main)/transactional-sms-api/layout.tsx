import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.smsApi);

export default function SmsApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Transactional SMS API | Mailerblend"
        url="https://www.mailerblend.com/transactional-sms-api/"
        description="Send high-deliverability transactional SMS at scale. OTP/2FA, alerts, reminders, replies, webhooks, templates & personalization."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Features', url: 'https://www.mailerblend.com/transactional-sms-api/' },
          { name: 'Transactional SMS API', url: 'https://www.mailerblend.com/transactional-sms-api/' },
        ]}
      />
      {children}
    </>
  );
}
