'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export default function SmsApiPage() {
  const [sendingPlan, setSendingPlan] = useState(100);
  const currency = 'USD';

  // Currency conversion rates (USD as base)
  const currencyRates: { [key: string]: number } = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
  };

  // Currency symbols
  const currencySymbols: { [key: string]: string } = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left - Hero Content */}
              <div>
                {/* Label */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-900">
                    TRANSACTIONAL SMS
                  </span>
                </div>

                {/* Hero Content */}
                <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
                  Transactional SMS API
                </h1>
                <p className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8 max-w-3xl">
                  {`Enjoy the over 98% open rate of transactional SMS with MailerSend's SMS API*. Enhance the customer experience by sending high-volume, toll-free text messages using a unique and recognizable phone number.`}
                </p>

                {/* CTA Button */}
                <div className="">
                  <Link href='signup' className="bg-primary hover:bg-primary/90 py-2.5 sm:py-3 px-4 sm:px-5 text-white rounded-md text-base sm:text-lg font-medium inline-block">
                    Sign up free
                  </Link>
                </div>
              </div>

              {/* Right - SMS Pricing Calculator */}
              <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#198DA7] mb-4">
                    SMS Pricing
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    {`If you're on a Standard plan, or you're sending more texts than usual, you'll need to buy SMS credits. How much you spend depends on the destination country. Estimate the cost below.`}
                  </p>
                </div>

                {/* Country Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">Sending From</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white">
                      <option>United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">Sending To</label>
                    <div className="relative">
                      <Image
                        src="/uk.png"
                        alt="UK Flag"
                        width={24}
                        height={24}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
                      />
                      <select className="w-full border border-gray-300 rounded-lg pl-14 pr-4 py-3 text-gray-700 bg-white appearance-none">
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Slider */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={sendingPlan}
                      onChange={(e) => setSendingPlan(Number(e.target.value))}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#198DA7] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#198DA7] [&::-moz-range-thumb]:border-0"
                      style={{
                        background: `linear-gradient(to right, #198DA7 0%, #198DA7 ${(sendingPlan / 10000) * 100}%, #e5e7eb ${(sendingPlan / 10000) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    {/* Credits Label */}
                    <div
                      className="absolute -top-12 bg-[#4A7C8C] text-white px-4 py-2 rounded text-sm font-semibold whitespace-nowrap"
                      style={{
                        left: `${(sendingPlan / 10000) * 100}%`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {sendingPlan === 0 ? '4000' : sendingPlan}
                      <div className="text-xs font-normal">Credits</div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#4A7C8C]"></div>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-[#9DD4CF] rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 text-center divide-x divide-white/30">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">No. of emails</p>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{sendingPlan === 0 ? '400' : Math.floor(sendingPlan / 10)}</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">Cost per email</p>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{currencySymbols[currency]}{(0.21 * currencyRates[currency]).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">Total cost</p>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{currencySymbols[currency]}{(sendingPlan === 0 ? 84 : Math.floor(sendingPlan / 10 * 0.21) * currencyRates[currency]).toFixed(0)}</p>
                    </div>
                  </div>
                </div>

                {/* Get a Quote Button */}
                <div className="text-center">
                  <Button size="lg" className="bg-[#3D4F6D] text-white hover:bg-[#2D3F5D] px-12">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Deliver all types of transactional SMS messages */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 sm:mb-12 md:mb-16">
              Deliver all types of transactional SMS messages
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              <SMSTypeCard
                icon="time"
                title="Appointment reminders"
                description="Remind clients and patients about upcoming appointments and improve late and no-show rates."
              />
              <SMSTypeCard
                icon="shopping-bag"
                title="Order confirmations"
                description="Reassure customers that their order has been received with an order confirmation SMS."
              />
              <SMSTypeCard
                icon="shield-check"
                title="OTPs and 2FA"
                description="Make your app more secure with one-time password and 2-factor authentication text messages."
                showLearnMore={true}
              />
              <SMSTypeCard
                icon="dollar-sign"
                title="Payment and billing notifications"
                description="Keep customers in the know about payment and billing activity with a quick, convenient SMS."
              />
              <SMSTypeCard
                icon="eye"
                title="Security alerts"
                description="Let customers know immediately about potential security breaches or unauthorized use of their accounts."
              />
              <SMSTypeCard
                icon="box"
                title="Shipping & delivery notifications"
                description="Keep customers updated about the status of their order by telling them when its shipped, out for delivery and delivered."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Reach more customers with transactional messaging */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <Image
                  src="/sms/MailerSend (6).png"
                  alt="Reach more customers"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Reach more customers with transactional messaging
                </h2>
                <p className="text-md text-gray-900 mb-12">
                  {`Improve the customer journey with an additional communication channel and send timely SMS messages directly to recipients' phone numbers.`}
                </p>

                <div className="divide-y-2 divide-gray-900">
                  <FeatureLine
                    icon="integrations"
                    title="Built for scalability"
                  />
                  <FeatureLine
                    icon="globe"
                    title="International network"
                    badge="COMING SOON"
                  />
                  <FeatureLine
                    icon="code"
                    title="You write, we encode"
                  />
                  <FeatureLine
                    icon="send"
                    title="Smart delivery"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Multiple sending configurations */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-start mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Multiple sending configurations
              </h2>
              <p className="text-lg text-gray-900 max-w-4xl">
                Send qualified SMS text messages to opt-in recipients, triggered by their actions or your email flow. Automatically stop sending when they opt out.
              </p>
            </div>

            {/* Image */}
            <div className="mb-16 w-full ">
              <Image
                src="/sms/MailerSend (7).png"
                alt="Multiple sending configurations"
                width={1000}
                height={500}
                className="w-full h-auto max-w-full"
              />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              <div className="divide-y-2 divide-gray-900">
                <ConfigFeature
                  icon="webhook"
                  title="Webhooks"
                />
                <ConfigFeature
                  icon="smartphone"
                  title="Bulk SMS"
                />
              </div>
              <div className="divide-y-2 divide-gray-900">
                <ConfigFeature
                  icon="shield"
                  title="Suppression management"
                />
                <ConfigFeature
                  icon="mail"
                  title="Interoperability with email"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Customize messages to fit your brand */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Content */}
              <div className="order-1 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Customize messages to fit your brand
                </h2>
                <p className="text-lg text-gray-700 mb-12">
                  Your brand is your most valuable asset—make it shine while increasing customer engagement with pre-made templates, GIFs and images.
                </p>

                <div className="divide-y-2 divide-gray-900">
                  <FeatureLine
                    icon="user"
                    title="Personalization"
                  />
                  <FeatureLine
                    icon="grid"
                    title="SMS Templates"
                  />
                  <FeatureLine
                    icon="image"
                    title="Media attachments"
                  />
                  <FeatureLine
                    icon="map-pin"
                    title="Sender locality"
                  />
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-2 lg:order-2">
                <Image
                  src="/sms/MailerSend (8).png"
                  alt="Customize messages"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Developer-friendly resources */}
      <Section className="bg-gray-900 text-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Code Block */}
              <CodeTabs />

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-6 leading-tight">
                  Developer-friendly resources
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Start to send and receive SMS in minutes with our regularly updated SDK libraries, low-code/no-code integrations and comprehensive SMS API documentation.
                </p>

                <div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
                  >
                    Read our API docs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Spark conversations */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left - Content */}
              <div className="order-1 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Spark conversations
                </h2>
                <p className="text-lg text-gray-900 mb-12">
                  Take customer support to the next level by allowing recipients to reply and engage in conversations via SMS.
                </p>

                <div className="divide-y divide-gray-200">
                  <FeatureLine
                    icon="inbound-emails"
                    title="Inbound SMS routing"
                  />
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-2 lg:order-2">
                <Image
                  src="/sms/MailerSend (13).png"
                  alt="Spark conversations"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Easily scale sendings with bulk transactional SMS */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <Image
                  src="/sms/MailerSend (9).png"
                  alt="Bulk SMS"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                  Easily scale sendings with bulk transactional SMS
                </h2>
                <p className="text-lg text-gray-700">
                  Optimize your sendings and preserve your API quota by scheduling transactional text messages with the bulk SMS endpoint.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Transactional SMS integrations */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Transactional SMS integrations
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl">
              Easily connect other web apps with MailerSend so they seamlessly work together to share information, automate workflows and enhance your customer experience.
            </p>

            <div className="flex gap-6 ">
              <IntegrationCard name="Zapier" logo="/sms/svg/zapier.svg" />
              <IntegrationCard name="Make" logo="/sms/svg/make.svg" />
              <IntegrationCard name="All integrations" isViewAll={true} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Plus, the same great MailerSend features */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-16">
              Plus, the same great MailerSend features:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
              <FeatureCard
                icon="smartphone"
                title="Easy management"
                description="Manage multiple phone numbers from your API, keeping suppressions and templates separate."
              />
              <FeatureCard
                icon="line-chart"
                title="Activity & Analytics"
                description="View your activity in real-time to gain insights about SMS delivery and recipient activity and make adjustments when needed."
              />
              <FeatureCard
                icon="user"
                title="Account management"
                description="Effortlessly manage each user and their level of access to your emails, SMS activity or individual phone numbers."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              <div className="divide-y-2 divide-gray-900">
                <FAQItem
                  question="*Where is SMS coverage available?"
                  answer="Our SMS API is available globally with coverage in over 190 countries. You can send SMS messages to virtually any mobile number worldwide."
                />
                <FAQItem
                  question="What types of SMS can I send?"
                  answer="You can send transactional SMS for order confirmations, shipping updates, appointment reminders, OTPs, security alerts, and other time-sensitive notifications."
                />
                <FAQItem
                  question="How do I receive SMS replies?"
                  answer="You can receive SMS replies through our inbound SMS routing feature, which allows you to configure webhooks to receive and process incoming messages."
                />
                <FAQItem
                  question="Does this work for OTP's and 2FA texts?"
                  answer="Yes, our SMS API is perfect for sending one-time passwords (OTPs) and two-factor authentication (2FA) messages to enhance your application's security."
                />
              </div>
              <div className="divide-y-2 divide-gray-900">
                <FAQItem
                  question="How can I purchase a phone number?"
                  answer="You can purchase a phone number through your MailerSend dashboard. Navigate to the SMS section and follow the phone number setup process."
                />
                <FAQItem
                  question="Do I need consent for transactional SMS?"
                  answer="While transactional SMS generally doesn't require explicit opt-in consent, it's best practice to inform users they may receive transactional messages during signup."
                />
                <FAQItem
                  question="What phone number can I use?"
                  answer="You can use toll-free numbers, short codes, or long codes depending on your needs and the countries you're sending to. We'll help you choose the best option."
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-[#A8DADC]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Enrich your customer communication with SMS notifications
            </h2>
            <p className="text-lg text-gray-900 mb-12 max-w-3xl mx-auto">
              Get started with real-time SMS service for appointment reminders, two-factor authentication, time-sensitive notifications, service alerts, booking/order confirmation, and more using our REST API.
            </p>

            <div className="flex justify-center">
              <Link href='signup' className="bg-primary hover:bg-primary/90 py-2.5 sm:py-3 px-4 sm:px-5 text-white rounded-md text-base sm:text-lg font-medium inline-block">
                Sign up free
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// Code Tabs Component
function CodeTabs() {
  const [activeTab, setActiveTab] = useState('curl');

  const codeExamples = {
    curl: `curl -X POST \\
https://api.mailersend.com/v1/sms \\
-H 'Content-Type: application/json' \\
-H 'X-Requested-With: XMLHttpRequest' \\
-H 'Authorization: Bearer {place your token here without brackets}' \\
-d '{
  "from": "+18332552485",
  "to": [
    "+12345678900"
  ],
  "text": "This is just a friendly hello"
}'`,
    nodejs: `const MailerSend = require("mailersend").default;
const mailerSend = new MailerSend({
  apiKey: "your-api-key",
});

const sms = {
  from: "+18332552485",
  to: ["+12345678900"],
  text: "This is just a friendly hello"
};

mailerSend.sms.send(sms);`,
    php: `<?php
use MailerSend\\MailerSend;
use MailerSend\\Helpers\\Builder\\SmsParams;

$mailersend = new MailerSend(['api_key' => 'your-api-key']);

$smsParams = (new SmsParams())
    ->setFrom('+18332552485')
    ->setTo(['+12345678900'])
    ->setText('This is just a friendly hello');

$mailersend->sms->send($smsParams);`,
    python: `from mailersend import sms

api_key = "your-api-key"
mailer = sms.NewSms(api_key)

mailer.set_sms_from("+18332552485")
mailer.set_sms_to(["+12345678900"])
mailer.set_sms_text("This is just a friendly hello")

mailer.send()`,
    ruby: `require 'mailersend-ruby'

ms_sms = Mailersend::SMS.new
ms_sms.api_token = 'your-api-key'

ms_sms.add_from('+18332552485')
ms_sms.add_to('+12345678900')
ms_sms.add_text('This is just a friendly hello')

ms_sms.send`,
    go: `package main

import (
    "github.com/mailersend/mailersend-go"
)

func main() {
    ms := mailersend.NewMailersend("your-api-key")

    message := &mailersend.Sms{
        From: "+18332552485",
        To:   []string{"+12345678900"},
        Text: "This is just a friendly hello",
    }

    ms.Sms.Send(message)
}`,
    java: `import com.mailersend.sdk.MailerSend;
import com.mailersend.sdk.sms.Sms;

public class SendSms {
    public static void main(String[] args) {
        MailerSend ms = new MailerSend();
        ms.setToken("your-api-key");

        Sms sms = new Sms();
        sms.setFrom("+18332552485");
        sms.addRecipient("+12345678900");
        sms.setText("This is just a friendly hello");

        ms.sms().send(sms);
    }
}`
  };

  const tabs = [
    { id: 'curl', label: 'cURL' },
    { id: 'nodejs', label: 'Node.js' },
    { id: 'php', label: 'PHP' },
    { id: 'python', label: 'Python' },
    { id: 'ruby', label: 'Ruby' },
    { id: 'go', label: 'Go' },
    { id: 'java', label: 'Java' }
  ];

  return (
    <div className="order-2 lg:order-1">
      {/* Language Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Block */}
      <div className="bg-[#1a1a1a] rounded-lg p-6 h-[400px] overflow-auto">
        <pre className="text-sm text-gray-300">
          <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
        </pre>
      </div>
    </div>
  );
}

// SMS Type Card Component
function SMSTypeCard({ icon, title, description, showLearnMore }: { icon: string; title: string; description: string; showLearnMore?: boolean }) {
  return (
    <div>
      <div className="flex items-start gap-4 mb-3">
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <Image src={`/sms/svg/${icon}.svg`} alt={title} width={16} height={16} className="" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        </div>
      </div>
      <p className="text-gray-900 leading-relaxed">{description}</p>
      {showLearnMore && (
        <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all">
          Learn more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
}

// Feature Line Component
function FeatureLine({ icon, title, badge }: { icon: string; title: string; badge?: string }) {
  return (
    <div className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
        <Image src={`/sms/svg/${icon}.svg`} alt={title} width={24} height={24} />
      </div>
      <div className="flex items-center justify-between text-center gap-3 flex-1">
        <span className="text-lg font-medium text-gray-900">{title}</span>
        {badge && (
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

// Config Feature Component
function ConfigFeature({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-4 py-6 first:pt-0 last:pb-0">
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        <Image src={`/sms/svg/${icon}.svg`} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

// Integration Card Component
function IntegrationCard({ name, logo, isViewAll }: { name: string; logo?: string; isViewAll?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 rounded-lg ${isViewAll ? 'border-2 border-gray-300' : 'bg-gray-50'} min-w-[180px]`}>
      {isViewAll ? (
        <>
          <div className="w-12 h-12 mb-3 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-900">{name}</span>
        </>
      ) : (
        <>
          <div className="">
            {logo ? (
              <Image src={logo} alt={name} width={50} height={30} className="object-contain" />
            ) : (
              <span className="text-2xl font-bold text-gray-700">{name}</span>
            )}
          </div>
          <span className="text-sm text-gray-900">{name}</span>
        </>
      )}
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div>
      <div className="flex items-center text-center gap-3 mb-3">
        <div className="w-6 h-6 flex items-center justify-center text-center flex-shrink-0">
          <Image src={`/sms/svg/${icon}.svg`} alt={title} width={24} height={24} />
        </div>
        <div className='items-center text-center'>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        </div>
      </div>
      <p className="text-gray-900">{description}</p>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-normal text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-900 flex-shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
