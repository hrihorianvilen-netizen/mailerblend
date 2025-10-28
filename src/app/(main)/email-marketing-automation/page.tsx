'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Plus, Minus, Check, Zap, Users } from 'lucide-react';

export default function MarketingAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Easiest email automation tool to drive conversions
            </h1>
            <p className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Send automated emails at the right moment, with the right message, to boost engagement and drive more sales across the customer lifecycle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="signup" className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">Create an account</Link>
              {/* <Link href="#" className='inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base'>
                Talk to Sales
              </Link> */}
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/marketing/Header_2.png"
                alt="Email automation workflow"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Email automation with traditional platforms can feel overwhelming */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Email automation with traditional platforms can feel overwhelming
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {/* Card 1 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                  <Image
                    src="/marketing/Iocn_17_0bc277b6c9.png"
                    alt="Heavy reliance icon"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Heavy reliance on developers
              </h3>
              <p className="text-gray-750">
                Traditional email platforms require extensive developer support for setup and maintenance
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                  <Image
                    src="/marketing/Iocn_32_1b71a4b6a1.png"
                    alt="Lack of ideas icon"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Lack of ideas</h3>
              <p className="text-gray-750">
                Unsure where to begin or what automation workflows to create for your business
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                  <Image
                    src="/marketing/Iocn_34_2d17ba226c.png"
                    alt="Personalized value icon"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Personalized value efforts
              </h3>
              <p className="text-gray-750">
                Creating personalized experiences requires significant time and technical expertise
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mailmodo makes email automation quick and easy */}
      <Section className="bg-gray-300">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Mailmodo makes email automation quick and easy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/marketing/Frame_1686551866_245d5d5d7c.png"
                  alt="Quick setup, no coding required"
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Quick setup, no coding required
              </h3>
              <p className="text-gray-700 mb-4">
                Set up automation workflows in minutes with our intuitive drag-and-drop builder
              </p>
              <Link href="#" className="text-cyan font-medium hover:underline">
                Know more →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/marketing/Frame_1686551867_c499a86cb9.png"
                  alt="Ready-to-use automation templates"
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Ready-to-use automation templates
              </h3>
              <p className="text-gray-700 mb-4">
                Choose from 50+ pre-built templates designed for various customer journeys
              </p>
              <Link href="#" className="text-cyan font-medium hover:underline">
                Know more →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/marketing/Frame_1686551868_1bb4d9136b.png"
                  alt="AI-powered that do one click"
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                AI-powered that do one click
              </h3>
              <p className="text-gray-700 mb-4">
                Leverage AI to personalize content and optimize send times automatically
              </p>
              <Link href="#" className="text-cyan font-medium hover:underline">
                Know more →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">Try Mailmodo for free</Button>
          </div>
        </Container>
      </Section>

      {/* Access 50+ professionally designed ready-to-use email automation templates */}
      <Section className="bg-light-cyan">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Access 50+ professionally designed ready-to-use email automation templates
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get started quickly with our library of proven automation workflows. Each template is customizable to match your brand and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {/* Template 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Image
                src="/marketing/image.png"
                alt="Welcome series template"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-primary">Welcome series</h3>
            </div>

            {/* Template 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Image
                src="/marketing/image (1).png"
                alt="Cart abandonment template"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-primary">Cart abandonment</h3>
            </div>

            {/* Template 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Image
                src="/marketing/image (2).png"
                alt="Re-engagement template"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-primary">Re-engagement</h3>
            </div>
          </div>
        </Container>
      </Section>

      {/* Start automating your customer journeys in 3,2,1 */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Start automating your customer journeys in 3,2,1
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
            {/* Left Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Step 1: Pick from our built-in templates or start from scratch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Go live in seconds with segment-ready templates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Customize templates to match your brand and messaging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Build custom flows tailored without writing code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Test and preview your automation before launching
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/marketing/Automate_customer_journeys_5b8c648cdf.png"
                alt="Automation templates"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/marketing/Personalize_every_interaction_86ef79dd1d.png"
                alt="Set conversion goals"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Step 2: Set conversion goals, measure and optimize your journey
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Define clear goals and KPIs for each automation workflow
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Track performance with real-time analytics and reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Identify bottlenecks and drop-off points in customer journeys
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Make data-driven decisions to improve conversion rates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto px-4 sm:px-0">
            {/* Left Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Step 3: Sit back and watch the magic happen as you trigger across every touch-point
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Trigger the right emails based on user behavior and actions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Segment audiences dynamically for personalized experiences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Automatically adjust send times based on user engagement patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Scale your campaigns without additional manual effort
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/marketing/Run_data_driven_automations_7d51dd06d7.png"
                alt="Trigger automation"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Plus, start sending high-performing emails */}
      <Section className="bg-gray-300">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Plus, start sending high-performing emails without any additional cost
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {/* Card 1 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Image
                    src="/marketing/Iocn_6_1c6eb28426.png"
                    alt="Build stunning icon"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Build stunning emails with 100% email automation
              </h3>
              <p className="text-gray-700">
                Create beautiful, responsive emails using our drag-and-drop editor without any coding
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Image
                    src="/marketing/Iocn_22_002bf148ef.png"
                    alt="Grow conversions icon"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Grow 3X conversions with AMP emails
              </h3>
              <p className="text-gray-700">
                Send interactive AMP emails that let users take action directly within the email
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Image
                    src="/marketing/Iocn_28_a0eb9599e3.png"
                    alt="Get best email icon"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Get best email delivery you can trust on
              </h3>
              <p className="text-gray-700">
                Ensure your emails reach the inbox with our industry-leading deliverability rates
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Everyone's favorite tool automatically! */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Everyone&apos;s favorite tool automatically!
            </h2>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-0">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/marketing/Ike Baldwin.png"
                alt="Ike Baldwin"
                width={80}
                height={80}
                className="rounded-lg flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-primary text-base sm:text-lg">Ike Baldwin</p>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Easiest to use email marketing software in 2025 */}
      <Section className="bg-gray-300">
        <Container>
          <div className="text-center mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8">
              Easiest to use email marketing software in 2025
            </h2>

            {/* Ratings */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Image
                  src="/marketing/Clip path group1.png"
                  alt="G2 Rating"
                  width={750}
                  height={750}
                  className="w-48 h-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/marketing/Clip path group.png"
                  alt="Capterra Rating"
                  width={750}
                  height={750}
                  className="w-48 h-auto"
                />
              </div>
            </div>

            {/* Awards */}
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <Image
                  src="/marketing/badges_winter_2025_2b363eaaa4.svg fill.png"
                  alt="G2 Badge"
                  width={750}
                  height={750}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="text-center mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 px-4 sm:px-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-400 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-300 transition-colors"
                >
                  <span className="font-semibold text-primary">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA Section */}
      <Section className="bg-gradient-to-br from-blue/20 to-light-cyan overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto px-4 sm:px-0">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Trigger the right emails at the right time
              </h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-primary">2x conversions with interactive emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-primary">Save time with AI-powered email creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-primary">Automate marketing ops with pre-built journeys</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-md">
                  Try FREE for 21 days
                  <Zap className="w-5 h-5" />
                </button>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-md">
                  Talk to a Human
                  <Users className="w-5 h-5" />
                </button>
              </div>

              {/* Company Logos Section */}
              <div>
                <p className="text-sm text-primary mb-4 font-medium">
                  1000+ businesses grew with Mailmodo, including
                </p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-60">
                  <span className="text-xl sm:text-2xl font-bold text-primary">abb</span>
                  <span className="text-lg sm:text-xl font-semibold text-primary">cleartax</span>
                  <span className="text-base sm:text-lg font-medium text-primary">bigbasket</span>
                  <span className="text-base sm:text-lg font-medium text-primary">Bluesky</span>
                  <span className="text-base sm:text-lg font-medium text-primary">FactoryQuotes</span>
                </div>
              </div>
            </div>

            {/* Right Image - Stacked with absolute positioning */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Bottom Image */}
              <div className="absolute bottom-0 right-0 w-full">
                <Image
                  src="/marketing/Frame_1110166263_72a7a41d30.svg.png"
                  alt="Email automation dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              {/* Top Image - Centered and overlapping */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] z-10">
                <Image
                  src="/marketing/Frame_1110165681_3_b26b1a7573.png"
                  alt="Mailmodo AI Features"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// FAQ Data
const faqs = [
  {
    question: 'What are the key benefits of email automation software?',
    answer:
      'Email automation software helps you save time, increase engagement, and drive more conversions by sending targeted messages at the perfect moment. It allows you to nurture leads, onboard new customers, re-engage inactive users, and much more—all on autopilot.',
  },
  {
    question: 'Do I need technical or coding skills to use Mailmodo?',
    answer:
      'No! Mailmodo is designed to be user-friendly with no coding required. Our drag-and-drop builder and pre-built templates make it easy for anyone to create and launch email automation workflows in minutes.',
  },
  {
    question: 'What is the best email automation workflow?',
    answer:
      'The best workflow depends on your business goals. Common high-performing workflows include welcome series for new subscribers, cart abandonment for e-commerce, re-engagement campaigns for inactive users, and post-purchase follow-ups. Mailmodo provides templates for all of these and more.',
  },
  {
    question: 'How long does it take to set up email automation?',
    answer:
      'With Mailmodo, you can set up your first automation workflow in as little as 5-10 minutes using our pre-built templates. Custom workflows may take longer depending on complexity, but our intuitive interface makes the process quick and straightforward.',
  },
  {
    question: 'Can I personalize automated emails?',
    answer:
      'Absolutely! Mailmodo offers advanced personalization options including dynamic content, merge tags, behavioral triggers, and AI-powered recommendations. You can tailor every aspect of your emails to individual users for maximum engagement.',
  },
  {
    question: 'How do I measure success?',
    answer:
      'Mailmodo provides comprehensive analytics and reporting for all your automation workflows. Track key metrics like open rates, click rates, conversions, and revenue generated. Use these insights to continuously optimize your campaigns for better results.',
  },
];
