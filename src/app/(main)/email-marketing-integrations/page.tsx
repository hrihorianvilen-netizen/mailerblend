"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui";

export default function IntegrationPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    { name: "All Categories", count: 12 },
    { name: "Automation", count: 6 },
    { name: "E-Commerce", count: 6 },
    { name: "Devtools", count: 6 },
    { name: "Shopify", count: 6 },
    { name: "Prestashop", count: 6 },
  ];

  const integrations = [
    {
      icon: "/intergration/zapeir.png",
      name: "Zapier",
      description: "Deliver a seamless customer journey by automating your business workflows",
      category: "Automation",
    },
    {
      icon: "/intergration/supabase.png",
      name: "Supabase",
      description: "Send and track emails from Supabase / PostgreSQL using MailerSend",
      category: "Automation",
    },
    {
      icon: "/intergration/firebase.png",
      name: "Firebase",
      description: "Send emails from Cloud Firestore collections documents using MailerSend",
      category: "Devtools",
    },
    {
      icon: "/intergration/symfony.png",
      name: "Symfony",
      description: "Use the Mailer component in Symfony with MailerSend to send emails",
      category: "Devtools",
    },
    {
      icon: "/intergration/slack.png",
      name: "Slack",
      description: "Received email notification in your slack workshop",
      category: "Automation",
    },
    {
      icon: "/intergration/laravel.png",
      name: "Laravel",
      description: "Use the MailerSend mailer driver in Laravel to send emails",
      category: "Devtools",
    },
    {
      icon: "/intergration/knock.png",
      name: "Knock",
      description: "Build powerful notifications workflows for your Email and SMS channels using Knock and MailerSend",
      category: "Automation",
    },
    {
      icon: "/intergration/make.png",
      name: "Make",
      description: "Connect your web apps and add transactional emailing to the rest of your tech stack",
      category: "Automation",
    },
    {
      icon: "/intergration/pipedream.png",
      name: "Pipedream",
      description: "Build and run workflows using the Mailersend API. Use 1000s of source-available triggers and actions. Or write custom code to integrate any app or API in seconds",
      category: "Devtools",
    },
    {
      icon: "/intergration/partnero.png",
      name: "Partnero",
      description: "Create affiliate and referral programs with Partnero, send emails with MailerSend",
      category: "Automation",
    },
    {
      icon: "/intergration/woocommerce.png",
      name: "WooCommerce",
      description: "Ensure that WooCommerce transactional emails get delivered to the inbox",
      category: "E-Commerce",
    },
    {
      icon: "/intergration/wordpress.png",
      name: "WordPress",
      description: "Improve the deliverability and security of emails sent from your WordPress website with MailerSend's SMTP email plugin for WordPress",
      category: "E-Commerce",
    },
  ];

  const filteredIntegrations =
    selectedCategory === "All Categories"
      ? integrations
      : integrations.filter((item) => item.category === selectedCategory);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center py-10 px-4 sm:px-0">
            <div>
              <div className="inline-flex items-center gap-2 text-primary mb-4 sm:mb-6">
                <Image src="/arrow.png" alt="Arrow" width={24} height={24} className="w-6 h-6" />
                <span className="font-semibold">All Integration</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Make your life easy by integrating your favorite tools with help wise
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Interact with data from your CRM, Project Management App or
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Even your own custom app with a few simple clicks.
              </p>
              <Link
                href="pricing"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200"
              >
                View Pricing & Plans
              </Link>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src="/integration.png"
                alt="Integration Platform"
                width={700}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Categories and Integrations Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="py-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Categories</h2>
            <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-4 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center ${
                        selectedCategory === category.name
                          ? "bg-light-cyan text-black font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="text-sm sm:text-md text-gray-900">{category.name}</span>
                      <span className="text-xs sm:text-sm text-gray-900">{category.count}</span>
                    </button>
                  ))}
                  <button className="w-full bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-navy transition-all duration-200 mt-4">
                    Suggest an Integration
                  </button>
                </div>
              </div>

              {/* Feature Interaction Grid */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">Feature Interaction</h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {filteredIntegrations.map((integration, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-light-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                          <Image
                            src={integration.icon}
                            alt={integration.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                            {integration.name}
                          </h3>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA Section */}
      <Section className="bg-light-cyan/50">
        <Container>
          <div className="py-16 sm:py-20 text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
              {`Can't find the integration you're looking for?`}
            </h2>
            <p className="text-base sm:text-lg text-black mb-6 sm:mb-8 max-w-2xl mx-auto">
              Place a request for a new app that fits your needs or build your own in a matter
              of couple of hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-all duration-200"
              >
                Contact Us
              </Link>
              {/* <Link
                href="#"
                className="bg-white text-primary  px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                Open an Email
              </Link> */}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
