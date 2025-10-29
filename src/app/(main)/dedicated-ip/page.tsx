'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function DedicatedIpPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-[#A8DADC]">
        <Container>
          <div className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              A dedicated IP address with Mailjet
            </h1>
            <p className="text-lg text-gray-900 mb-8 max-w-3xl">
              For high-volume senders, a dedicated IP address will allow you to have full control of emails sent from your own
              IP and optimize your IP reputation to help deliver your emails land in the inbox.
            </p>

            <div className="flex gap-4">
              <Link href="signup" className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                Get Started
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* What is a dedicated IP address? */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  What is a dedicated IP address?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  {`Еvery inbox provider is monitoring the IP address of incoming traffic and tracks a reputation score for those IPs. Having a dedicated IP means that you are the only one responsible for its reputation. This is important because one of the major factors in determining what emails land in the inbox, without being blocked or filtered, is the reputation of the IP address sending it. The minimal required volume from most of the ISPs is 150,000 emails per month, and 5,000 emails per day. This is because lower volume senders will not be sending frequently enough for ISPs to consider your dedicated IP to have a good reputation. In contrast, a shared IP address is one that is pooled among many different senders. This means the email behavior of one sender can affect others. Shared IPs are sometimes necessary because not every sender has enough email volume to support a dedicated IP.`}
                </p>
              </div>

              {/* Right - Chart */}
              <div>
                <Image
                  src="/dedicated/An IP reputation card for a company..png"
                  alt="Email placement chart"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why a dedicated IP address? */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Image */}
              <div>
                <Image
                  src="/dedicated/Where you land in the inbox..png"
                  alt="IP reputation and email volume"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Why a dedicated IP address?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  A properly maintained IP with an excellent reputation will be one of the best assets you can have as a sender. The better your reputation, the greater the likelihood of your emails reaching the inbox. A dedicated IP will make it easier to troubleshoot the root cause of deliverability issues and request the whitelisting of your own IP from some external postmasters. Depending on your volume and sending practices, you can have multiple dedicated IPs to manage your email traffic in the best way. Mailjet can spread out and manage your volume for each IP to ensure the best inbox placement. Multiple dedicated IP add-ons are available with a custom plan
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Can I monitor my IP reputation? */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Can I monitor my IP reputation?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  Once the IP is set up and running, we will continue to work with you along the way. Our support teams and Technical Account Managers (TAMs) are here to help you monitor your reputation, avoid blacklists, resolve any deliverability issues, and optimize your sending.
                </p>
              </div>

              {/* Right - Dashboard */}
              <div>
                <Image
                  src="/dedicated/A graph and score of the sender in correlation with their IP reputation..png"
                  alt="IP reputation dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How can I get a dedicated IP address? */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  How can I get a dedicated IP address?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  {`If you are sending more than 150,000 emails per month, you can apply for a dedicated IP address through our Customer Support team. Simply request more information from an agent in our online ticket system and, if applicable, we’ll work with you to obtain and warm up your IP.`}
                </p>

                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </div>

              {/* Right - Illustration */}
              <div>
                <Image
                  src="/dedicated/Illustration of a customer support representative..png"
                  alt="Customer support"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How to start with my IP? */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Image */}
              <div>
                <Image
                  src="/dedicated/A graph of email volume increasing with better IP reputation..png"
                  alt="IP reputation card"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  How to start with my IP?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  To begin, Mailjet will provide you an IP with a neutral reputation, and we will work with you to warm it up by gradually sending more emails with your new IP and establish a good reputation. Our support team is here to help you in this process by creating a customized warm-up plan for you and your needs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-[#A8DADC]">
        <Container>
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Join us today
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8">
              40K+ companies use Mailjet daily. You too can send better emails.
            </p>

            <div className="flex gap-4 justify-center">
              <Link href="contact" className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 hover:text-gray-50 border border-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
