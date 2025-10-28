'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function SmtpRelayPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-[#A8DADC]">
        <Container>
          <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Free SMTP server to power your emails
            </h1>
            <p className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8 max-w-3xl">
              {`As one of the world's leading email service providers, Mailjet's robust delivery infrastructure routes billions of  emails to the inbox every month. Easily set up our free SMTP server in minutes and discover how our platform will help you send your emails faster.`}
            </p>

            <div className="flex gap-4">
              <Link href='/pricing' className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                view pricing & plans
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Configure your SMTP relay in minutes */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Configure your SMTP relay in minutes
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  {`Mailjet's free SMTP server integrates easily with any system. You can update your configuration using our SMTP server, one of the supported ports, and simply authenticate with your credentials (like an API key or secret key).`}
                </p>
                <Link href='/pricing' className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                  Get Started
                </Link>
              </div>

              {/* Right - Code Block */}
              <div>
                <Image
                  src="/smtp/SMTP configuration..png"
                  alt="SMTP configuration"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefit from a variety of ports */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Code Terminal */}
              <div>
                <Image
                  src="/smtp/Inbox being filtered by SPF, DKIM, and DMARC..png"
                  alt="Inbox being filtered by SPF, DKIM, and DMARC..png"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Benefit from a variety of ports
                </h2>
                <p className="text-lg text-gray-700">
                  Mailjet supports a variety of ports with our SMTP relay, offering you greater flexibility. You can choose the port that is most suitable for you depending on your email client or ISP and have access to either TLS or SSL encryption to ensure your emails are secure.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Improve your inbox placement */}
      <Section className="bg-white"> 
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Improve your inbox placement
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  With our SMTP relay, you will not only increase your chance of landing in the inbox, but your emails will get there faster. Easily set up SPF, DMARC, and DKIM records to authenticate your domain and start sending. Our deliverability support team will be there every step of the way to help get you set up, monitor, and maintain high deliverability rates.
                </p>

                <Link href='/pricing' className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Right - Image */}
              <div>
                <Image
                  src="/smtp/Container.png"
                  alt="Container"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Use the MTA and framework you prefer */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Use the MTA and framework you prefer
                </h2>
                <p className="text-lg text-gray-700 mb-16 max-w-4xl mx-auto">
                  Use your preferred Message Deliverability Agent or Message Transfer Agent (MTA) such as Postfix, Exim, or Exchange to send via Mailjet’s SMTP relay. You can also use PHP, Java, or any other frameworks or languages you prefer, making it easier for you to start sending immediately.             
                </p>
              </div>

              {/* Framework Screenshots Grid */}
              <div>
                <Image
                  src="/smtp/Deliverability statistics for a Mailjet email campaign..png"
                  alt="Deliverability statistics for a Mailjet email campaign"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left - Stats */}
              <div>
                <Image
                  src="/smtp/Statistics from Mailjet that allow for continuous improvement..png"
                  alt="Statistics from Mailjet that allow for continuous improvement"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Monitor your email performance
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {`Mailjet’s real-time dashboard makes it easy for you to browse, filter and troubleshoot key performance indicators like opens, clicks, bounces, and unsubscribes, and more. You can also easily integrate in your systems to receive each event notification in real time thanks to webhooks.`}
                </p>

                <Link href='/pricing' className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Personalize your emails */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Personalize your emails
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  Our advanced templating language allows you to add more detailed personalization and dynamic content to your emails. Send the right content to each of your recipients to achieve even higher engagement rates.
                </p>

                <Link href='/pricing' className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Right - Image */}
              <div>
                <Image
                  src="/smtp/Dynamic sections create increased personalization..png"
                  alt="Personalize emails"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Rely on our robust and scalable infrastructure */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Code with Chat Bubbles */}
              <div className="relative">
                <Image
                  src="/smtp/Parse API code..png"
                  alt="Parse API code"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Rely on our robust and scalable infrastructure
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {`Mailjet's robust delivery infrastructure routes billions of emails to the inbox every month. Our auto-scaling mechanism adapts to your volume needs to ensure your emails are sent even in high volume moments. We have more than 720 servers worldwide to guarantee you an uptime of 99.9%.`}
                </p>

                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Get the help you need */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Get the help you need
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  Our multi-lingual support teams are here to help you 24/7 in English, French, Spanish and German. Get answers to all of your questions to quickly solve any technical issues or improve your deliverability. 
                </p>

                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Support
                </Button>
              </div>

              {/* Right - Image */}
              <div>
                <Image
                  src="/smtp/Mailjet's support experts help with deliverability..png"
                  alt="Get help"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-[#A8DADC]">
        <Container>
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              With billions of emails being sent monthly,
            </h2>

            <div className="flex gap-4 justify-center">
              <Link href='/pricing' className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                view pricing & plans
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}