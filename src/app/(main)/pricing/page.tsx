'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');
  const [currency, setCurrency] = useState('USD');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sendingPlan, setSendingPlan] = useState(100);
  const [emailCredits, setEmailCredits] = useState(20000);

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

  // Function to convert and format price
  const formatPrice = (priceUSD: number): string => {
    const convertedPrice = priceUSD * currencyRates[currency];
    return `${currencySymbols[currency]}${Math.round(convertedPrice)}`;
  };

  const emailPricingTiers = [
    {
      name: 'Free',
      price: 0,
      period: 'month',
      description: 'For Businesses who are just started now',
      features: [
        'Email marketing',
        'Email template builder',
        'Third-party integration',
        'SMS templates',
        'Unlimited users'
      ]
    },
    {
      name: 'Stander',
      price: 39,
      period: 'month',
      description: 'Essential email tool for growing online business',
      features: [
        'Email marketing',
        'Email template builder',
        'Third-party integration',
        'Optimize hashtags',
        'Unlimited users'
      ]
    },
    {
      name: 'Premium',
      price: 99,
      period: 'month',
      highlighted: true,
      description: 'Advanced omnichannel features & premium support',
      features: [
        'All limited links',
        'Third-party integration',
        'Email marketing',
        'Optimize hashtags',
        'Unlimited users'
      ]
    },
    {
      name: 'Growth',
      price: 49,
      period: 'month',
      description: 'For large organizations and businessO',
      features: [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'What is MailerSend and why is it the best website builder?',
      answer: 'MailerSend is a comprehensive email and SMS marketing platform designed to help businesses create, send, and track campaigns with professional tools and features.'
    },
    {
      question: 'What are your favorite templates from MailerSend Template?',
      answer: 'Our most popular templates include modern business layouts, e-commerce designs, transactional email formats, and responsive newsletter templates.'
    },
    {
      question: 'How do you choose a MailerSend Template?',
      answer: 'You can browse our template library, filter by category and style, preview templates, and customize them to match your brand using our drag-and-drop editor.'
    },
    {
      question: 'Why is SMS Templates the best hosted agency?',
      answer: 'Our SMS templates are pre-optimized for deliverability, character limits, and compliance, making it easy to send professional SMS campaigns quickly.'
    }
  ];

  const comparisonTableData = [
    { name: 'Emails', free: 'Unlimited emails SMTP', starter: '12,000/mes', growth: '25,000/mes', premium: 'ilimitados' },
    { name: 'SMS', free: '0', starter: '1,000/mes', growth: '5,000/mes', premium: 'ilimitados' },
    { name: 'Teammates', free: '1', starter: '1', growth: '5', premium: 'ilimitados' },
    { name: 'Users (Contacts)', free: '500', starter: '2500', growth: '7500', premium: 'ilimitados' },
    { name: `Custom Template Design (${formatPrice(5)})`, free: '', starter: '', growth: '', premium: '' },
    { name: `Reviews available (${formatPrice(10)})`, free: '', starter: '', growth: '', premium: '' },
    { name: `Historical Data Migration (${formatPrice(4)})`, free: '', starter: '', growth: '', premium: '' },
    { name: `Partner Growth Manager (${formatPrice(23)})`, free: '', starter: '', growth: '', premium: '' },
    { name: `Dedicated-IP (${formatPrice(50)})`, free: '', starter: '', growth: '', premium: '' },
    { name: `Reputation Shield (Add-Ons ${formatPrice(19.90)})`, free: '', starter: '', growth: '', premium: '' },
  ];

  const comparisonFeatures = [
    { category: 'Campaigns', features: [
      { name: 'Emails', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
      { name: 'SMS', free: 'Unlimited', starter: '✓', growth: '-', premium: '✓' },
      { name: 'Teammates', free: 'Unlimited', starter: '-', growth: '✓', premium: '-' },
      { name: 'Custom template design', free: 'Unlimited', starter: '-', growth: '-', premium: '-' },
      { name: 'API integration', free: 'Unlimited', starter: '✓', growth: '-', premium: '-' },
      { name: 'Teammates', free: 'Unlimited', starter: '-', growth: '-', premium: '-' },
    ]},
    { category: 'Analytic & Reports', features: [
      { name: 'Email validation', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
      { name: 'SMS', free: 'Unlimited', starter: '✓', growth: '-', premium: '✓' },
      { name: 'Advanced user managements', free: 'Unlimited', starter: '✓', growth: '-', premium: '-' },
      { name: 'Custom template design', free: 'Unlimited', starter: '-', growth: '✓', premium: '-' },
      { name: 'API integration', free: 'Unlimited', starter: '✓', growth: '-', premium: '✓' },
      { name: 'Integration', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
    ]},
    { category: 'Email content', features: [
      { name: 'Email validation', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
      { name: 'Email template builders', free: 'Unlimited', starter: '-', growth: '-', premium: '✓' },
      { name: 'Email marketing', free: 'Unlimited', starter: '✓', growth: '✓', premium: '-' },
      { name: 'Custom template design', free: 'Unlimited', starter: '-', growth: '✓', premium: '-' },
      { name: 'Campaign statistics', free: 'Unlimited', starter: '✓', growth: '-', premium: '✓' },
      { name: 'Integration', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
    ]},
    { category: 'Platform & support', features: [
      { name: 'Support', free: 'Unlimited', starter: '✓', growth: '-', premium: '✓' },
      { name: 'Compliance (KYC)', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
      { name: 'Detailed reports', free: 'Unlimited', starter: '-', growth: '✓', premium: '✓' },
      { name: 'Custom template design', free: 'Unlimited', starter: '-', growth: '✓', premium: '-' },
      { name: 'Campaign statistics', free: 'Unlimited', starter: '-', growth: '-', premium: '✓' },
      { name: 'Detailed reports', free: 'Unlimited', starter: '✓', growth: '✓', premium: '✓' },
    ]},
  ];

  return (
    <div>
      {/* Hero Section with Pricing Cards */}
      <Section className="bg-[#E8F4F5]">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Badge and Header */}
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              {/* Billing Toggle and Currency Selector */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-gray-300 w-full sm:w-auto">
                  <button
                    onClick={() => setBillingPeriod('annual')}
                    className={`px-4 sm:px-6 py-2 sm:py-1.5 font-semibold transition-colors text-xs sm:text-sm ${
                      billingPeriod === 'annual'
                        ? 'bg-[#198DA7] text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    Get 30% off on Annual billing
                  </button>
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-4 sm:px-6 py-2 sm:py-1.5 font-semibold transition-colors text-xs sm:text-sm ${
                      billingPeriod === 'monthly'
                        ? 'bg-[#198DA7] text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    Monthly billing
                  </button>
                </div>

                {/* Currency Selector */}
                <div className="relative w-full sm:w-auto">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 sm:py-1.5 pr-10 font-semibold text-gray-900 cursor-pointer focus:outline-none focus:border-gray-900 text-xs sm:text-sm w-full sm:w-auto"
                  >
                    <option value="USD">$ USD</option>
                    <option value="EUR">€ Eur</option>
                    <option value="GBP">€ GBP</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-6">
                <p className="text-xs sm:text-sm font-bold text-[#198DA7] uppercase tracking-wide mb-3 sm:mb-4">
                  PRICING
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#198DA7] mb-3 sm:mb-4">
                  We cut prices, not features
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-900 max-w-3xl mx-auto px-4">
                  Simple, affordable pricing with no contracts, obligations or setup fees
                </p>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
              {emailPricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 sm:p-8 relative shadow-md ${
                    tier.highlighted
                      ? 'bg-[#3D4F6D] text-white transform lg:scale-105'
                      : 'bg-white'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3D4F6D] text-white px-4 py-1 rounded-full text-xs font-semibold uppercase">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="mb-2">
                      <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {formatPrice(tier.price)}
                      </span>
                      <span className={`text-sm ml-1 ${tier.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                        /{tier.period}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-[#8B5CF6]'}`} />
                        <span className={tier.highlighted ? 'text-white' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      tier.highlighted
                        ? 'bg-[#7DD3C0] text-[#3D4F6D] hover:bg-[#6CC3B0]'
                        : 'bg-[#F3E8FF] text-[#8B5CF6] hover:bg-[#E9D5FF]'
                    }`}
                  >
                    Choose plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left py-6 px-6 text-[#00BCD4] font-bold text-lg">Characteristics</th>
                  <th className="text-center py-6 px-6 text-[#00BCD4] font-bold text-lg">Free</th>
                  <th className="text-center py-6 px-6 text-[#00BCD4] font-bold text-lg">Starter</th>
                  <th className="text-center py-6 px-6 text-[#00BCD4] font-bold text-lg">Growth</th>
                  <th className="text-center py-6 px-6 text-[#00BCD4] font-bold text-lg">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTableData.map((row, index) => (
                  <tr key={index} className="border-b-2 border-gray-100">
                    <td className="py-6 px-6 text-gray-700">{row.name}</td>
                    <td className="py-6 px-6 text-center text-gray-700">{row.free}</td>
                    <td className="py-6 px-6 text-center text-gray-700">{row.starter}</td>
                    <td className="py-6 px-6 text-center text-gray-700">{row.growth}</td>
                    <td className="py-6 px-6 text-center text-gray-700">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Need a larger plan CTA */}
      <Section className="bg-[#3D4F6D] text-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-4 sm:px-0 text-center sm:text-left">
              <div>
                <h2 className="text-xl sm:text-2xl text-gray-200 font-bold mb-2">Need a larger plan ?</h2>
                <p className="text-sm sm:text-base text-white/90">
                  Not a problem. Sender scales with you as you grow.
                </p>
              </div>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#3D4F6D] whitespace-nowrap text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3">
                Check Our High-Volume Plans
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* SMS Pricing Calculator */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#198DA7] mb-4">
                Sms Pricing
              </h2>
            </div>

            {/* Calculator */}
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
              {/* Country Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
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

              {/* Get a Quote Section */}
              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-4">
                  {(() => {
                    const credits = sendingPlan === 0 ? 4000 : sendingPlan;
                    const messages = Math.floor(credits / 1.496); // 1.496 credits per message ≈ 3340 msgs per 5000 credits
                    const costPerCredit = 0.037752; // €188.76 / 5000 credits
                    const totalCost = credits * costPerCredit;
                    const costPerMessage = (totalCost / messages).toFixed(2); // Euro per message
                    const vatMultiplier = 1.23; // 23% VAT (EU example)
                    const totalInclVAT = (totalCost * vatMultiplier).toFixed(2);

                    return (
                      <>
                        If you buy <span className="font-semibold">{credits.toLocaleString()} Credits</span>, you'll be able to send roughly{' '}
                        <span className="font-semibold">{messages.toLocaleString()} Messages</span> at a cost of{' '}
                        <span className="font-semibold">€{totalInclVAT} Incl. VAT</span>. This means that each message is estimated to cost{' '}
                        <span className="font-semibold">{costPerMessage}c Excl. VAT</span>, network dependent.
                      </>
                    );
                  })()}
                </p>

                <Button size="lg" className="bg-[#3D4F6D] text-white hover:bg-[#2D3F5D] px-12">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Need help CTA 2 */}
      <Section className="bg-[#3D4F6D] text-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-4 sm:px-0 text-center sm:text-left">
              <div>
                <h2 className="text-xl sm:text-2xl text-gray-200 font-bold mb-2">Need a larger plan ?</h2>
                <p className="text-sm sm:text-base text-white/90">
                  Not a problem. Sender scales with you as you grow.
                </p>
              </div>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#3D4F6D] whitespace-nowrap text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3">
                Check Our High-Volume Plans
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Flexible Email Credits */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start px-4 sm:px-0">
              {/* Left - Content */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Flexible email credits for occasional sender
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Send emails on your schedule, with our pay as you go plan purchase credits when needed with no recurring payments-perfect for infrequent senders
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start justify-center md:justify-start">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B9D] flex-shrink-0 mt-2.5 mr-3"></div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">The same feature as the stander tier</span>
                  </li>
                  <li className="flex items-start justify-center md:justify-start">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B9D] flex-shrink-0 mt-2.5 mr-3"></div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">Up to 3 users per account .</span>
                  </li>
                </ul>
              </div>

              {/* Right - Price Card */}
              <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 sm:p-8">
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-gray-900 mb-1">{currencySymbols[currency]}{((emailCredits * 5 / 1000) * currencyRates[currency]).toFixed(0)}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-gray-700">Emails</label>
                    <span className="text-lg font-bold text-gray-900">{emailCredits}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={emailCredits}
                    onChange={(e) => setEmailCredits(Number(e.target.value))}
                    className="w-full h-2 bg-[#E6E6E6] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#3D4F6D] [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#3D4F6D] [&::-moz-range-thumb]:border-0"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{formatPrice(5)} per 1000 emails</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex flex-row justify-between items-center">
                  <button className="w-1/2 py-3 bg-[#3D4F6D] text-white rounded-lg font-semibold hover:bg-[#2D3F5D] transition-colors border-2 border-[#3D4F6D]">
                    Save Up to {formatPrice(146)}
                  </button>
                  <a href="#" className="w-1/2 block text-center text-sm text-[#198DA7] font-medium hover:underline">
                    Learn more
                  </a>
                </div>

                <Button size="lg" variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Compare plan & Feature Table */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#198DA7] mb-4">
              Compare plan & Feature
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
              Compare the full list of features to see exactly what is included in all pricing tier to see everything
              that MailerSend has to offer.
            </p>
          </div>

          {/* Feature Comparison Table */}
          <div className="overflow-x-auto px-4 sm:px-0">
            <table className="w-full">
              <tbody>
                {comparisonFeatures.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    {/* Category Header */}
                    <tr className="border-b border-gray-100">
                      <td className="pt-8 pb-3 px-6">
                        <h3 className="font-bold text-[#198DA7] text-lg">{category.category}</h3>
                      </td>
                      {['Free', 'Starter', 'Growth', 'Premium'].map((planName, idx) => (
                        <td key={idx} className="pt-8 pb-3 px-6 text-center">
                          <h3 className="font-bold text-[#198DA7] text-sm">{planName}</h3>
                        </td>
                      ))}
                    </tr>
                    {/* Features */}
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-gray-100">
                        <td className="py-4 px-6 text-gray-600 text-sm">{feature.name}</td>
                        <td className="py-4 px-6 text-center">
                          {feature.free === '✓' ? (
                            <Check className="w-4 h-4 text-[#198DA7] mx-auto" />
                          ) : feature.free === '-' ? (
                            <span className="text-gray-300">-</span>
                          ) : (
                            <span className="text-gray-600 text-xs">{feature.free}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.starter === '✓' ? (
                            <Check className="w-4 h-4 text-[#198DA7] mx-auto" />
                          ) : feature.starter === '-' ? (
                            <span className="text-gray-300">-</span>
                          ) : (
                            <span className="text-gray-600 text-xs">{feature.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.growth === '✓' ? (
                            <Check className="w-4 h-4 text-[#198DA7] mx-auto" />
                          ) : feature.growth === '-' ? (
                            <span className="text-gray-300">-</span>
                          ) : (
                            <span className="text-gray-600 text-xs">{feature.growth}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.premium === '✓' ? (
                            <Check className="w-4 h-4 text-[#198DA7] mx-auto" />
                          ) : feature.premium === '-' ? (
                            <span className="text-gray-300">-</span>
                          ) : (
                            <span className="text-gray-600 text-xs">{feature.premium}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {/* Get started buttons row after each category */}
                    <tr className="border-b border-gray-100">
                      <td className="py-6 px-6"></td>
                      {['Free', 'Starter', 'Growth', 'Premium'].map((_, idx) => (
                        <td key={idx} className="py-6 px-6 text-center">
                          <Button variant="outline" size="sm" className="border-2 border-[#198DA7] text-[#198DA7] rounded-full px-6 hover:bg-[#198DA7] hover:text-white">
                            Get started
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#198DA7] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border-2  transition-all cursor-pointer ${
                    openFaq === index
                      ? 'bg-[#E6F4F7] border-[#E6F4F7]'
                      : 'bg-white border-gray-100'
                  }`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between p-4 sm:p-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 flex-1 pr-3 sm:pr-4">
                      {item.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                      openFaq === index
                        ? 'bg-[#198DA7]'
                        : 'bg-white border-2 border-gray-100'
                    }`}>
                      {openFaq === index ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#198DA7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
