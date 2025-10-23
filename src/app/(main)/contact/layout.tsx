import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';
import { WebPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata(seoData.contact);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageSchema
        name="Contact | Mailerblend"
        url="https://www.mailerblend.com/contact/"
        description="Need help with campaigns, deliverability, or setup? Contact support or sales. Faster help when you sign in to your account."
        breadcrumb={[
          { name: 'Home', url: 'https://www.mailerblend.com/' },
          { name: 'Contact', url: 'https://www.mailerblend.com/contact/' },
        ]}
      />
      {children}
    </>
  );
}
