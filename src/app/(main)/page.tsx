import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';

export const metadata: Metadata = generateMetadata(seoData.home);

import Image from "next/image";
import Link from "next/link";
import { Container, Section, Carousel } from "@/components/ui";
import { ArrowRight, Send, MailCheck, Globe, Lock, Target, Mail, User, Zap, BarChart3, Users, MailOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-x-hidden">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Reliable Event Based <span className="text-blue">Messaging</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                A dedicated platform for transactional and behavior-triggered emails & SMS.
                We help brands automate compliant, personalized messages while optimizing deliver ability.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base"
              >
                View pricing & plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative px-4 sm:px-0">
              <Image
                src="/hero-illustration.png"
                alt="Email & SMS Platform Illustration"
                width={575}
                height={575}
                priority
                className="w-full h-auto max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section className="bg-white ">
        <Container>
          <div className="text-center px-4 sm:px-0">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 sm:mb-8">
              More Than <span className="text-cyan">100+</span> Company Trusted Us
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-24 lg:gap-36">
              <Image src="/logo-1.png" alt="Company Logo" width={150} height={60} className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
              <Image src="/logo-2.png" alt="Company Logo" width={150} height={60} className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
              <Image src="/logo-3.png" alt="Company Logo" width={150} height={60} className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
              <Image src="/logo-4.png" alt="Company Logo" width={150} height={60} className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            </div>
          </div>
        </Container>
      </Section>

      {/* E-commerce Tools Section */}
      <Section className="bg-gray-300">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              All the tools you need to manage your e commerce
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {ecommerceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2 uppercase text-xs sm:text-sm tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transactional Emails Section */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Everything you need to send transactional emails
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
              Mailer send is a comprehensive tool for your everyday business: send invoices, delivery update, and forgotten password link insecond, without even thinking about it
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {transactionalFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-primary mb-2 sm:mb-3 text-base sm:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Link href="#" className="text-cyan text-xs sm:text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3-Step Guide Section */}
      <Section className="bg-gradient-to-br from-cyan/30 to-light-cyan/30">
        <Container>
          <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Send transactional emails in 5 minutes
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/50 items-center justify-center text-center backdrop-blur p-6 sm:p-8 rounded-xl">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-primary font-medium text-sm sm:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center px-4 sm:px-0">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base"
            >
              View pricing & plan
            </Link>
          </div>
        </Container>
      </Section>

      {/* Email Flows Section */}
      <Section className="bg-gray-100 max-w-full overflow-x-hidden">
        <Container>
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Common email flows for e commerce
            </h2>
          </div>
          <Carousel titles={emailFlows.map(flow => flow.title)}>
            {emailFlows.map((flow, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg p-6 sm:p-8 h-full flex flex-col items-center text-center justify-between bg-[#E0EBF1] min-w-[280px] sm:min-w-[336px]"
              >
                <div>
                  <h3 className="font-bold text-primary mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-2xl">{flow.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {flow.description}
                  </p>
                </div>
                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </Container>
      </Section>

      {/* Email Editor Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="px-4 sm:px-0 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Drag and drop email editor
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Prepare a professional newsletter based on one of our several templates.there is no need to learn HTML.Edit everything in a simple editor without writing a single line of code
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  </div>
                  <span className="text-primary font-medium text-sm sm:text-base">Personalize Content</span>
                </li>
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  </div>
                  <span className="text-primary font-medium text-sm sm:text-base">Structured Delivery</span>
                </li>
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  </div>
                  <span className="text-primary font-medium text-sm sm:text-base">Rich Campaign</span>
                </li>
              </ul>
            </div>
            <div className="relative px-4 sm:px-0">
              <Image
                src="/email-editor1.png"
                alt="Drag and Drop Email Editor"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Management Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative px-4 sm:px-0 order-2 lg:order-1">
              <Image
                src="/contact_management.png"
                alt="Contact Management System"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl max-w-md mx-auto lg:max-w-full"
              />
            </div>
            <div className="px-4 sm:px-0 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Contact Management
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Easily create a personalized SMS texts with user specific sub pages with
                unlimited subscribers. Manage information delivered and avoid spam or any
                deliverability issues.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  </div>
                  <span className="text-primary font-medium text-sm sm:text-base">Contact organization</span>
                </li>
                <li className="flex items-start gap-2 justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  </div>
                  <span className="text-primary font-medium text-sm sm:text-base">Contact Fields</span>
                </li>
              </ul>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base"
              >
                View Pricing & Plan
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Integration Section */}
      <Section className="bg-[#D9D9D9]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="px-4 sm:px-0 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Integration
              </h2>
              <p className="text-[#505050] text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
                Easy connect other web apps with mailer lite so they seamlessly work together to share information,automate workflows and enhance your customer
              </p>
              <Link
                href="email-marketing-integrations"
                className="inline-flex items-center gap-2 bg-[#D9D9D9] text-primary border-2 border-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 text-sm sm:text-base"
              >
                All integrations <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
              <Image src="/shopify.png" alt="Shopify" width={150} height={60} className="w-auto h-10 sm:h-12 object-contain" />
              <Image src="/zapier.png" alt="Zapier" width={150} height={60} className="w-auto h-10 sm:h-12 object-contain" />
              <Image src="/woocommerce.png" alt="WooCommerce" width={150} height={60} className="w-auto h-10 sm:h-12 object-contain" />
              <Image src="/pipedrive.png" alt="Pipedrive" width={150} height={60} className="w-auto h-10 sm:h-12 object-contain" />
              <Image src="/wordpress.png" alt="WordPress" width={150} height={60} className="w-auto h-10 sm:h-12 object-contain" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// Data
const ecommerceFeatures = [
  {
    icon: <Mail className="w-8 h-8 text-cyan" />,
    title: "Intuitive Template Builder",
    description: "Customize 200+ pre made template builder our no code email editor",
  },
  {
    icon: <User className="w-8 h-8 text-cyan" />,
    title: "Dynamic Segmentation",
    description: "Segment email list dynamically based  on users attributes and behaviors",
  },
  {
    icon: <MailCheck className="w-8 h-8 text-cyan" />,
    title: "20+ Amp email widget",
    description: "Make emails interactive awp email widgets and drive 2x conversions",
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan" />,
    title: "Automated drip sequences",
    description: "Engage, nurture, convert and retain your audience with email automation",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-cyan" />,
    title: "In-built email analytics",
    description: "Track your campaign's performance using our analytics dashboard",
  },
  {
    icon: <Users className="w-8 h-8 text-cyan" />,
    title: "Contact management",
    description: "import contacts via csv files,apis crms, and other integrations",
  },
];

const transactionalFeatures = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "SMTP Relay",
    description: "Plug &play with SMTP to instantly start sending emails from your app or website.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Multiple Domains",
    description: "Use multiple domains to manage different brands or products with one MailerSend account.",
  },
  {
    icon: <Send className="w-6 h-6 text-primary" />,
    title: "Email Delivery",
    description: "Enjoy the flexibility of sending a few emails or scaling quickly to send a few million.",
  },
  {
    icon: <MailOpen className="w-6 h-6 text-primary" />,
    title: "Inbound Routing",
    description: "Receive and integrate incomming emails into your application.",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "IP Allowlist",
    description: "Restrict API and SMTP requests to a predefined set of IP addresses.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Effortless Integration",
    description: "Choose among 7 SDKs and our email API to seamlessly intigrate MailerSend into your Stack.",
  },
];

const steps = [
  "Sign up for a free account",
  "Send an email from the trial domain",
  "Try out the features & check your activity",
];

const emailFlows = [
  {
    title: "Welcome Email",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing porta elit sed bibendum integer tincidunt volutpat a. Volutpat eget eget dignissim suscipit. Semper imperdiet quis turpis cras feugiat consectetur. Scelerisque lectus neque vitae blandit urna ridiculus habitant leo cras.",
  },
  {
    title: "Order Confirmation",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing porta elit sed bibendum integer tincidunt volutpat a. Volutpat eget eget dignissim suscipit. Semper imperdiet quis turpis cras feugiat consectetur. Scelerisque lectus neque vitae blandit urna ridiculus habitant leo cras.",
  },
  {
    title: "Cart Abandonment",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing porta elit sed bibendum integer tincidunt volutpat a. Volutpat eget eget dignissim suscipit. Semper imperdiet quis turpis cras feugiat consectetur. Scelerisque lectus neque vitae blandit urna ridiculus habitant leo cras.",
  },
  {
    title: "Product Updates",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing porta elit sed bibendum integer tincidunt volutpat a. Volutpat eget eget dignissim suscipit. Semper imperdiet quis turpis cras feugiat consectetur. Scelerisque lectus neque vitae blandit urna ridiculus habitant leo cras.",
  },
  {
    title: "Re-engagement",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing porta elit sed bibendum integer tincidunt volutpat a. Volutpat eget eget dignissim suscipit. Semper imperdiet quis turpis cras feugiat consectetur. Scelerisque lectus neque vitae blandit urna ridiculus habitant leo cras.",
  },
];