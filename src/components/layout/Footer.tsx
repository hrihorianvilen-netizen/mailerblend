import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const footerLinks = {
  column1: [
    { label: 'About us', href: '/about' },
    { label: 'Sign up', href: '/signup' },
    { label: 'Why us', href: '/why-us' },
  ],
  column2: [
    { label: 'Integrations', href: '/email-marketing-integrations' },
    { label: 'Security', href: '/email-security-deliverability' },
    { label: 'Complain', href: '/complain' },
  ],
  column3: [
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Contact us', href: '/contact' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-12 md:py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image src="/logo-dark.png" alt="Logo" width={120} height={40} className="h-8 w-auto" />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Customer communications tool for growing teams. Easily reply to customer conversations and manage workload in a smart & automated way.
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Let&apos;s keep in touch</h3>
              <p className="text-gray-300 text-sm mb-4">
                Sign up for our monthly newsletter and mailer update
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg bg-navy text-white placeholder:text-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-cyan"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
