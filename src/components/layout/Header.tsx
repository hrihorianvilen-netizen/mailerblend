'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';

const featuresLinks = [
  { label: 'Email Marketing Automation', href: '/email-marketing-automation' },
  { label: 'Reporting & Analytics', href: '/email-analytics-reporting' },
  { label: 'Email Security & Deliverability', href: '/email-security-deliverability' },
  { label: 'Email Marketing Integrations', href: '/email-marketing-integrations' },
  { label: 'SMTP Relay', href: '/smtp-relay' },
  { label: 'Transactional SMS API', href: '/transactional-sms-api' },
  { label: 'Dedicated IP', href: '/dedicated-ip' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    };

    if (featuresOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [featuresOpen]);

  return (
    <header className="bg-header-bg border-gray-400 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Mailerblend Logo" width={120} height={40} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <div className="relative" ref={featuresRef}>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Features
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {featuresLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-400">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Features Dropdown */}
              <div>
                <button
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Features
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileFeaturesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {featuresLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-gray-700 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-400 flex flex-col space-y-3">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
