"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { Icon } from "@/components/ui/Icon";

export default function ReportingAnalyticsPage() {
  // Feature sections data
  const featureSections = [
    {
      title: "Monitor and maintain your deliverability",
      description:
        "View the total number of spam complaints, soft bounces, hard bounces, and unsubscribe rates for a specific domain or your whole account. Then take steps to reduce them and improve deliverability.",
      imageSrc: "/reporting/MailerSend.png",
      imageAlt: "Monitor and maintain your deliverability",
    },
    {
      title: "Access analytics via API",
      description:
        "Integrate MailerSend analytics with your apps or CRM. Display email metrics such as open rate, CTR, bounce rate, and other email data for a list of recipients, domain names or tags.",
      imageSrc: "/reporting/MailerSend (1).png",
      imageAlt: "Access analytics via API",
    },
    {
      title: "Discover how people read your emails",
      description:
        "See which email clients, like Gmail, Outlook and Yahoo, are most popular within your email list. Review subject lines and content for better email engagement across mobile, desktop, browsers, and email service providers.",
      imageSrc: "/reporting/MailerSend (4).png",
      imageAlt: "Discover how people read your emails",
    },
    {
      title: "Identify where your users are",
      description:
        "Email tracking tells you where your recipients are located and which countries have the highest engagement. Improve email performance by targeting specific regions or scheduling the best sending times.",
      imageSrc: "/reporting/MailerSend (3).png",
      imageAlt: "Identify where your users are",
    },
    {
      title: "Create & export custom email reports",
      description:
        "Create and export reports to effortlessly share email analytics data with all team members. Retrieve data by domains and timeframes, then apply tags or statuses to find exactly what you want.",
      imageSrc: "/reporting/MailerSend (12).png",
      imageAlt: "Create & export custom email reports",
    },
    {
      title: "Intuitive dashboard that makes it easy to find the right data",
      description:
        "Get a quick overview of the account or domain's metrics and see a detailed breakdown of email volume for each day. Switch between the visual graph or view the data in table format.",
      imageSrc: "/reporting/MailerSend (2).png",
      imageAlt: "Intuitive dashboard that makes it easy to find the right data",
    },
    {
      title: "Get unique insights with split testing",
      description:
        "Split test up to 5 variations of a template to find out which subject lines, email content and calls to action work. View the email templates' opens, clicks and unsubscribes to choose the best email and then keep optimizing.",
      imageSrc: "/reporting/MailerSend (10).png",
      imageAlt: "Get unique insights with split testing",
    },
  ];

  // More features to explore data
  const moreFeaturesSections = [
    {
      title: 'Send emails',
      features: [
        {
          iconName: `/reporting/svg/send.svg`,
          title: 'Email delivery',
          description: 'Enjoy the flexibility of sending a few emails or scaling quickly to send a few million.',
        },
        {
          iconName: `/reporting/svg/mail.svg`,
          title: 'Transactional emails',
          description: 'Intuitively-designed tools allow anyone to contribute, while an advanced infrastructure lets you scale fast.',
        },
        {
          iconName: `/reporting/svg/mail.svg`,
          title: 'SMTP relay',
          description: 'Use Simple Mail Transfer Protocol when you want to quickly send emails using a reliable Internet standard.',
        },
        {
          iconName: `/reporting/svg/box.svg`,
          title: 'Email API',
          description: 'Start sending and tracking your emails with our easy API integration process and clean documentation.',
        },
        {
          iconName: `/reporting/svg/smile.svg`,
          title: 'Dynamic email templates',
          description: 'Build one-to-one customer relationships on a mass scale using a single email template.',
        },
        {
          iconName: `/reporting/svg/check-circle.svg`,
          title: 'Email verification',
          description: 'Verify a single email address or upload an entire email list to verify in bulk.',
        },
        {
          iconName: `/reporting/svg/check-circle.svg`,
          title: 'Email address validation API',
          description: 'Keep your recipient list clean and maintain great deliverability by automatically verifying incoming email addresses with the email address validation API.',
        },
      ],
    },
    {
      title: 'Control your sendings',
      features: [
        {
          iconName: `/reporting/svg/webhook.svg`,
          title: 'Webhooks',
          description: 'Get notified as email events happen so your integration can automatically trigger reactions.',
        },
        {
          iconName: `/reporting/svg/map-pin.svg`,
          title: 'Advanced email tracking',
          description: 'Every email is a learning experience. Monitor your email performance to find what works best.',
        },
        {
          iconName: `/reporting/svg/toggle-right.svg`,
          title: 'Manage the unsubscribe page',
          description: 'Whether people are unsubscribing, give them a compelling reason to stay.',
        },
        {
          iconName: `/reporting/svg/shield-check.svg`,
          title: 'Email suppression list management',
          description: 'Protect your sending reputation by adding email addresses and domains that you should not send to.',
        },
        {
          iconName: `/reporting/svg/survey-fill.svg`,
          title: 'Activity and performance logs',
          description: 'Easy access to detailed API and SMTP activity data and template error logs.',
        },
      ],
    },
    {
      title: 'Track the results',
      features: [
        {
          iconName: `/reporting/svg/line-chart.svg`,
          title: 'Email activity',
          description: 'Search your activity feed to troubleshoot sending and understand the behavior of your recipients.',
        },
      ],
    },
    {
      title: 'Create emails',
      features: [
        {
          iconName: `/reporting/svg/grid.svg`,
          title: 'Custom HTML email builder',
          description: 'Interested in writing your own HTML code? Our HTML email template editor gives you the flexibility to build exactly what you want.',
        },
        {
          iconName: `/reporting/svg/darg-n-drop.svg`,
          title: 'Drag & drop email template builder',
          description: 'Our drag & drop email editor empowers you to create professionally-designed transactional emails.',
        },
        {
          iconName: `/reporting/svg/file-list.svg`,
          title: 'Rich-text email editor',
          description: 'Create plain text emails with the formatting capabilities of HTML. Add links, images, bullet points and style text with ease.',
        },
        {
          iconName: `/reporting/svg/wallet.svg`,
          title: 'Email split testing',
          description: 'Email split testing will improve engagement with your transactional emails by helping you learn what your customers want more.',
        },
        {
          iconName: `/reporting/svg/discuss.svg`,
          title: 'Send surveys',
          description: 'Understand your customers and users on a deeper level and gain valuable insights to help you improve your product and customer experience with surveys.',
        },
      ],
    },
    {
      title: 'Control your account',
      features: [
        {
          iconName: `/reporting/svg/users.svg`,
          title: 'User management',
          description: 'Invite your team members to collaborate on projects by assigning roles and granting permissions.',
        },
        {
          iconName: `/reporting/svg/folder.svg`,
          title: 'File manager',
          description: 'Streamline your workflow by organizing and keeping all your files in one place in the cloud.',
        },
        {
          iconName: `/reporting/svg/globe.svg`,
          title: 'Multiple domains',
          description: 'Use multiple domains to manage different brands or products with one MailerSend account.',
        },
        {
          iconName: `/reporting/svg/global-fill.svg`,
          title: 'Dedicated IP',
          description: 'Take control of your sending reputation with your own dedicated IP address and optimize your sendings for improved deliverability.',
        },
        {
          iconName: `/reporting/svg/ios-app.svg`,
          title: 'MailerSend iOS app',
          description: 'Access email activity, domain settings, and analytics on the go with MailerSend iOS app.',
        },
      ],
    },
    {
      title: 'Start conversations',
      features: [
        {
          iconName: `/reporting/svg/inbound-emails.svg`,
          title: 'Inbound email routing',
          description: 'Automatically parse incoming emails. Inbound email routes enable MailerSend to receive emails on your behalf, integrating them into your application.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            {/* Back to Features Link */}
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 sm:mb-8"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.21531 13.625L4.18687 12.7006L2.6025 11.1619H20V9.83031H2.65594L4.17781 8.35469L3.16563 7.375L0 10.4903L3.21531 13.625Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm font-medium uppercase tracking-wide">
                FEATURES
              </span>
            </Link>

            {/* Hero Content */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Email analytics
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl">
              {`Access a wide range of key metrics in MailerSend's email analytics dashboard to track deliverability and engagement and improve overall email performance.`}
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <Link href="pricing" className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                view pricing & plans
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative w-full mb-10">
              <Image
                src="/reporting/MailerSend user logos.png"
                alt="Email analytics dashboard"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Keep track of important KPIs */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Keep track of important KPIs
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
                Real-time analytics tools keep track of email open rates, bounce
                rates and click-through rates, so you can quickly gauge email
                performance and make adjustments.
              </p>
            </div>

            {/* Dashboard Image */}
            <div className="relative w-full">
              <Image
                src="/reporting/MailerSend (11).png"
                alt="MailerSend Analytics Dashboard showing KPIs and metrics"
                width={1200}
                height={700}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Sections - Dynamically rendered */}
      {featureSections.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          imagePosition={index % 2 === 0 ? "right" : "left"}
          background={index % 2 === 0 ? "white" : "gray"}
        />
      ))}

      {/* User Reviews Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Left Side - Title and G2 Badges */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 sm:mb-12">
                  {`Here's what our users have to say`}
                </h2>

                {/* G2 Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-lg">
                  {/* Badge 1 */}
                  <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                          fill="#FF492C"
                        />
                        <path
                          d="M17.1946 9.19213H15.1449C15.2001 8.87053 15.3994 8.69053 15.8026 8.48653L16.1793 8.29453C16.8537 7.94893 17.2137 7.55773 17.2137 6.91933C17.2137 6.51853 17.0577 6.20173 16.7481 5.97373C16.4385 5.74573 16.0738 5.63293 15.6466 5.63293C15.3161 5.62904 14.9916 5.72162 14.7129 5.89933C14.4321 6.07213 14.2234 6.29533 14.0938 6.57373L14.6865 7.16893C14.9169 6.70333 15.2506 6.47533 15.6898 6.47533C16.0618 6.47533 16.2897 6.66733 16.2897 6.93373C16.2897 7.15693 16.1794 7.34173 15.7522 7.55773L15.5098 7.67533C14.9842 7.94173 14.6194 8.24653 14.4082 8.59213C14.197 8.93773 14.0938 9.37213 14.0938 9.89773V10.0417H17.1946V9.19213Z"
                          fill="white"
                        />
                        <path
                          d="M16.9185 11.0205H13.5249L11.8281 13.9581H15.2217L16.9185 16.8981L18.6153 13.9581L16.9185 11.0205Z"
                          fill="white"
                        />
                        <path
                          d="M12.1224 15.9196C9.96243 15.9196 8.20322 14.1604 8.20322 12.0004C8.20322 9.84035 9.96243 8.08115 12.1224 8.08115L13.464 5.27555C13.0222 5.1877 12.5729 5.14355 12.1224 5.14355C8.33523 5.14355 5.26562 8.21316 5.26562 12.0004C5.26562 15.7876 8.33523 18.8572 12.1224 18.8572C13.5738 18.8599 14.988 18.3991 16.1592 17.542L14.676 14.9692C13.9664 15.5821 13.0601 15.9194 12.1224 15.9196Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-primary mb-1">
                      Easiest To Do Business With
                    </h3>
                    <p className="text-xs text-gray-800">Small Business</p>
                    <p className="text-xs text-gray-700 mt-2">Spring 2023</p>
                  </div>

                  {/* Badge 2 */}
                  <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                          fill="#FF492C"
                        />
                        <path
                          d="M17.1946 9.19213H15.1449C15.2001 8.87053 15.3994 8.69053 15.8026 8.48653L16.1793 8.29453C16.8537 7.94893 17.2137 7.55773 17.2137 6.91933C17.2137 6.51853 17.0577 6.20173 16.7481 5.97373C16.4385 5.74573 16.0738 5.63293 15.6466 5.63293C15.3161 5.62904 14.9916 5.72162 14.7129 5.89933C14.4321 6.07213 14.2234 6.29533 14.0938 6.57373L14.6865 7.16893C14.9169 6.70333 15.2506 6.47533 15.6898 6.47533C16.0618 6.47533 16.2897 6.66733 16.2897 6.93373C16.2897 7.15693 16.1794 7.34173 15.7522 7.55773L15.5098 7.67533C14.9842 7.94173 14.6194 8.24653 14.4082 8.59213C14.197 8.93773 14.0938 9.37213 14.0938 9.89773V10.0417H17.1946V9.19213Z"
                          fill="white"
                        />
                        <path
                          d="M16.9185 11.0205H13.5249L11.8281 13.9581H15.2217L16.9185 16.8981L18.6153 13.9581L16.9185 11.0205Z"
                          fill="white"
                        />
                        <path
                          d="M12.1224 15.9196C9.96243 15.9196 8.20322 14.1604 8.20322 12.0004C8.20322 9.84035 9.96243 8.08115 12.1224 8.08115L13.464 5.27555C13.0222 5.1877 12.5729 5.14355 12.1224 5.14355C8.33523 5.14355 5.26562 8.21316 5.26562 12.0004C5.26562 15.7876 8.33523 18.8572 12.1224 18.8572C13.5738 18.8599 14.988 18.3991 16.1592 17.542L14.676 14.9692C13.9664 15.5821 13.0601 15.9194 12.1224 15.9196Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-primary mb-1">
                      High Performer
                    </h3>
                    <p className="text-xs text-gray-700 mt-2">Spring 2023</p>
                  </div>

                  {/* Badge 3 */}
                  <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                          fill="#FF492C"
                        />
                        <path
                          d="M17.1946 9.19213H15.1449C15.2001 8.87053 15.3994 8.69053 15.8026 8.48653L16.1793 8.29453C16.8537 7.94893 17.2137 7.55773 17.2137 6.91933C17.2137 6.51853 17.0577 6.20173 16.7481 5.97373C16.4385 5.74573 16.0738 5.63293 15.6466 5.63293C15.3161 5.62904 14.9916 5.72162 14.7129 5.89933C14.4321 6.07213 14.2234 6.29533 14.0938 6.57373L14.6865 7.16893C14.9169 6.70333 15.2506 6.47533 15.6898 6.47533C16.0618 6.47533 16.2897 6.66733 16.2897 6.93373C16.2897 7.15693 16.1794 7.34173 15.7522 7.55773L15.5098 7.67533C14.9842 7.94173 14.6194 8.24653 14.4082 8.59213C14.197 8.93773 14.0938 9.37213 14.0938 9.89773V10.0417H17.1946V9.19213Z"
                          fill="white"
                        />
                        <path
                          d="M16.9185 11.0205H13.5249L11.8281 13.9581H15.2217L16.9185 16.8981L18.6153 13.9581L16.9185 11.0205Z"
                          fill="white"
                        />
                        <path
                          d="M12.1224 15.9196C9.96243 15.9196 8.20322 14.1604 8.20322 12.0004C8.20322 9.84035 9.96243 8.08115 12.1224 8.08115L13.464 5.27555C13.0222 5.1877 12.5729 5.14355 12.1224 5.14355C8.33523 5.14355 5.26562 8.21316 5.26562 12.0004C5.26562 15.7876 8.33523 18.8572 12.1224 18.8572C13.5738 18.8599 14.988 18.3991 16.1592 17.542L14.676 14.9692C13.9664 15.5821 13.0601 15.9194 12.1224 15.9196Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-primary mb-1">
                      High Performer
                    </h3>
                    <p className="text-xs text-gray-800 mb-1">Europe</p>
                    <p className="text-xs text-gray-700 mt-2">Spring 2023</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Testimonial */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 relative">
                {/* Quote Mark and Dots on Same Row */}
                <div className="flex items-start justify-between mb-4">
                  {/* Large Quote Mark */}
                  <div className="text-6xl text-gray-300 font-serif leading-none">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.11067 23.0947C4.73733 21.636 4 20 4 17.348C4 12.6813 7.276 8.49866 12.04 6.43066L13.2307 8.268C8.784 10.6733 7.91467 13.7947 7.568 15.7627C8.284 15.392 9.22133 15.2627 10.14 15.348C12.5453 15.5707 14.4413 17.5453 14.4413 20C14.4413 21.2377 13.9497 22.4247 13.0745 23.2998C12.1993 24.175 11.0123 24.6667 9.77467 24.6667C8.344 24.6667 6.976 24.0133 6.11067 23.0947ZM19.444 23.0947C18.0707 21.636 17.3333 20 17.3333 17.348C17.3333 12.6813 20.6093 8.49866 25.3733 6.43066L26.564 8.268C22.1173 10.6733 21.248 13.7947 20.9013 15.7627C21.6173 15.392 22.5547 15.2627 23.4733 15.348C25.8787 15.5707 27.7747 17.5453 27.7747 20C27.7747 21.2377 27.283 22.4247 26.4078 23.2998C25.5327 24.175 24.3457 24.6667 23.108 24.6667C21.6773 24.6667 20.3093 24.0133 19.444 23.0947Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  {/* Quote Icon Dots */}
                  <div className="flex gap-2">
                    <div className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8 leading-relaxed">
                  {`Great service, works flawlessly! MailerSend has a great dashboard with a vast amount of valuable data about the emails sent. It's very well organized and has powerful filter functions.`}
                </blockquote>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-sm flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_295_1855)">
                        <g clipPath="url(#clip1_295_1855)">
                          <g clipPath="url(#clip2_295_1855)">
                            <path
                              d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
                              fill="black"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_295_1855">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_295_1855">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                        <clipPath id="clip2_295_1855">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Steffen S.</p>
                    <p className="text-sm text-gray-600">Small Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Start Sending CTA Section */}
      <Section className="bg-[#A8DADC]">
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Start sending smarter emails now
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-900 mb-8 sm:mb-12 max-w-3xl mx-auto">
              {`Take control of your transactional sending strategy by utilizing detailed insights from MailerSend's advanced analytics and activity tools. Get started with 3,000 free emails per month!`}
            </p>

            {/* Steps */}
            <div className="flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-gray-700 gap-8 md:gap-12 mb-12 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1 md:px-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <p className="text-gray-900 font-medium text-center">
                  Sign up for a free account
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1 md:px-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <p className="text-gray-900 font-medium text-center">
                  Send an email from the trial domain
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1 md:px-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <p className="text-gray-900 font-medium text-center">
                  Try out the features & check your activity
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="signup" className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200 text-sm sm:text-base">
                Try for free
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* More features to explore Section */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                More features to explore
              </h2>
              <p className="text-lg text-gray-700">
                MailerSend is packed full of features that help you save time
                and grow your business.
              </p>
            </div>
            {/*More features to explore list*/}
            <div className="divide-y divide-gray-900">
              {/* Features Sections - Dynamically rendered */}
              {moreFeaturesSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start py-12 first:pt-0"
                >
                  {/* Left Column - Title (1/3 width) */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
                      {section.title}
                    </h3>
                  </div>

                  {/* Right Column - Features list in 2 columns (2/3 width) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {section.features.map((feature, featureIndex) => (
                      <FeatureItem
                        key={featureIndex}
                        iconName={feature.iconName}
                        title={feature.title}
                        description={feature.description}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// Helper component for feature items
function FeatureItem({ iconName, title, description }: { iconName: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center">
          <Icon name={iconName} className="[&_path]:stroke-white [&_line]:stroke-white [&_polyline]:stroke-white [&_circle]:stroke-white [&_rect]:stroke-white" size={20} />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-1">{title}</h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
