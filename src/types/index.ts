// Common Types

export interface PricingTier {
  name: string;
  price: number | "Free";
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface FeatureCard {
  icon: string | React.ReactNode;
  title: string;
  description: string;
}

export interface IntegrationCard {
  name: string;
  logo: string | React.ReactNode;
  description: string;
  category: string;
  link?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  newsletter?: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
