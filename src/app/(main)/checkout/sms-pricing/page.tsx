'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Shield, Lock, CheckCircle2, ArrowLeft, AlertCircle, Server, Users, Star, Database, Palette } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Company Information
    companyName: '',
    vatNumber: '',

    // Billing Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United Kingdom',

    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',

    // Preferences
    saveCard: false,
    agreeTerms: false,
    marketingEmails: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  // Get pricing details from URL params or default
  const [pricingDetails, setPricingDetails] = useState({
    credits: 5000,
    messages: 3340,
    costPerCredit: 0.037752,
    vatRate: 0.23,
    currency: 'EUR',
    currencySymbol: '€',
  });

  // Currency conversion rates and symbols
  // const currencyRates: { [key: string]: number } = {
  //   USD: 1,
  //   EUR: 0.92,
  //   GBP: 0.79,
  // };

  const currencySymbols: { [key: string]: string } = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  // Add-ons available for purchase
  const addonsData = [
    {
      id: 'dedicated-ip',
      name: 'Dedicated-IP',
      price: 50,
      icon: Server,
      description: 'Improve deliverability with your own IP address',
      badge: 'Popular',
    },
    {
      id: 'reputation-shield',
      name: 'Reputation Shield',
      price: 19.90,
      icon: Shield,
      description: 'Monitor and protect your sender reputation',
      badge: 'Recommended',
    },
    {
      id: 'custom-template',
      name: 'Custom Template Design',
      price: 5,
      icon: Palette,
      description: 'Professional custom template design service',
      badge: null,
    },
    {
      id: 'reviews-available',
      name: 'Reviews Available',
      price: 10,
      icon: Star,
      description: 'Enable customer reviews and feedback collection',
      badge: null,
    },
    {
      id: 'historical-data',
      name: 'Historical Data Migration',
      price: 4,
      icon: Database,
      description: 'Migrate your existing data and campaign history',
      badge: null,
    },
    {
      id: 'partner-manager',
      name: 'Partner Growth Manager',
      price: 23,
      icon: Users,
      description: 'Dedicated account manager for your growth',
      badge: null,
    },
  ];

  // Pre-select all add-ons by default
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    addonsData.map(addon => addon.id)
  );

  // Load pricing from URL parameters
  useEffect(() => {
    const credits = parseInt(searchParams.get('credits') || '5000');
    const currency = searchParams.get('currency') || 'EUR';
    const messages = Math.floor(credits / 1.496); // 1.496 credits per message

    setPricingDetails({
      credits,
      messages,
      costPerCredit: 0.037752,
      vatRate: 0.23,
      currency,
      currencySymbol: currencySymbols[currency] || '€',
    });
  }, [searchParams]);


  // Calculate addon total
  const addonsTotal = selectedAddons.reduce((total, addonId) => {
    const addon = addonsData.find(a => a.id === addonId);
    return total + (addon ? addon.price : 0);
  }, 0);

  const subtotal = pricingDetails.credits * pricingDetails.costPerCredit;
  const subtotalWithAddons = subtotal + addonsTotal;
  const discountAmount = subtotalWithAddons * discount;
  const afterDiscount = subtotalWithAddons - discountAmount;
  const vat = afterDiscount * pricingDetails.vatRate;
  const total = afterDiscount + vat;

  // Handle addon toggle
  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setFormData(prev => ({ ...prev, cardNumber: value }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({ ...prev, expiryDate: value }));
  };

  const applyCoupon = () => {
    // Simulate coupon validation
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon(couponCode);
      setDiscount(0.10);
    } else if (couponCode.toUpperCase() === 'SAVE20') {
      setAppliedCoupon(couponCode);
      setDiscount(0.20);
    } else {
      setErrors(prev => ({ ...prev, coupon: 'Invalid coupon code' }));
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
    setCouponCode('');
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
    }

    if (step === 2) {
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
      if (!formData.country) newErrors.country = 'Country is required';
    }

    if (step === 3) {
      // Step 3 is Add-ons - no validation required, it's optional
    }

    if (step === 4) {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Process payment
      console.log('Processing payment...', formData, pricingDetails, selectedAddons);
      // Redirect to success page or show success message
    }
  };

  const steps = [
    { number: 1, title: 'Contact Info', description: 'Your details' },
    { number: 2, title: 'Billing Address', description: 'Where to bill' },
    { number: 3, title: 'Add-ons', description: 'Enhance package' },
    { number: 4, title: 'Payment', description: 'Complete order' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <a href="/pricing" className="flex items-center text-[#198DA7] hover:text-[#156b7f] transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Pricing</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </Container>
      </div>

      <Section className="py-8 md:py-12">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center justify-between max-w-2xl mx-auto">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                        currentStep >= step.number
                          ? 'bg-[#198DA7] text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {currentStep > step.number ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <div className="mt-2 text-center hidden sm:block">
                        <p className={`text-sm font-semibold ${
                          currentStep >= step.number ? 'text-[#198DA7]' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 md:mx-4 transition-all ${
                        currentStep > step.number ? 'bg-[#198DA7]' : 'bg-gray-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Contact Information */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                            <p className="text-gray-600">{`We'll use this to send you order confirmations and updates`}</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <Input
                              label="First Name *"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              error={errors.firstName}
                              placeholder="John"
                            />
                            <Input
                              label="Last Name *"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              error={errors.lastName}
                              placeholder="Doe"
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <Input
                              label="Email Address *"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              error={errors.email}
                              placeholder="john.doe@example.com"
                            />
                            <Input
                              label="Phone Number *"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              error={errors.phone}
                              placeholder="+44 20 1234 5678"
                            />
                          </div>

                          <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information (Optional)</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Input
                                label="Company Name"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder="Acme Inc."
                              />
                              <Input
                                label="VAT Number"
                                name="vatNumber"
                                value={formData.vatNumber}
                                onChange={handleInputChange}
                                placeholder="GB123456789"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Billing Address */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Billing Address</h2>
                            <p className="text-gray-600">Enter the address associated with your payment method</p>
                          </div>

                          <Input
                            label="Street Address *"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            error={errors.address}
                            placeholder="123 Main Street, Apt 4B"
                          />

                          <div className="grid md:grid-cols-2 gap-4">
                            <Input
                              label="City *"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              error={errors.city}
                              placeholder="London"
                            />
                            <Input
                              label="State / Province"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              placeholder="England"
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <Input
                              label="ZIP / Postal Code *"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              error={errors.zipCode}
                              placeholder="SW1A 1AA"
                            />
                            <div className="w-full">
                              <label className="block text-sm font-medium text-primary mb-2">
                                Country *
                              </label>
                              <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-gray-300 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                              >
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Spain">Spain</option>
                                <option value="Italy">Italy</option>
                                <option value="Netherlands">Netherlands</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Add-ons */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enhance Your Package</h2>
                            <p className="text-gray-600">{`All add-ons are pre-selected. Uncheck any you don't want to include.`}</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            {addonsData.map((addon) => {
                              const IconComponent = addon.icon;
                              const isSelected = selectedAddons.includes(addon.id);

                              return (
                                <div
                                  key={addon.id}
                                  onClick={() => toggleAddon(addon.id)}
                                  className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                    isSelected
                                      ? 'border-[#198DA7] bg-[#E6F4F7]'
                                      : 'border-gray-300 hover:border-gray-400 bg-white'
                                  }`}
                                >
                                  {addon.badge && (
                                    <div className="absolute -top-2 -right-2 bg-[#198DA7] text-white px-2 py-1 rounded-full text-xs font-semibold">
                                      {addon.badge}
                                    </div>
                                  )}

                                  <div className="flex items-start gap-3">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                                      isSelected ? 'bg-[#198DA7]' : 'bg-gray-100'
                                    }`}>
                                      <IconComponent className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2 mb-1">
                                        <h4 className="font-semibold text-gray-900 text-sm">{addon.name}</h4>
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-[#198DA7] text-sm whitespace-nowrap">
                                            +{pricingDetails.currencySymbol}{addon.price}
                                          </span>
                                          <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => {}}
                                            className="w-4 h-4 text-[#198DA7] border-gray-300 rounded focus:ring-[#198DA7]"
                                          />
                                        </div>
                                      </div>
                                      <p className="text-xs text-gray-600 leading-relaxed">{addon.description}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-blue-900">
                              <p className="font-semibold mb-1">
                                {selectedAddons.length} of {addonsData.length} add-ons selected
                              </p>
                              <p>You can continue without add-ons or customize your selection above.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Payment */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Information</h2>
                            <p className="text-gray-600">All transactions are secure and encrypted</p>
                          </div>

                          {/* Card Payment Form */}
                          <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <Input
                              label="Card Number *"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleCardNumberChange}
                              error={errors.cardNumber}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                            />
                            <Input
                              label="Cardholder Name *"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              error={errors.cardName}
                              placeholder="John Doe"
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <Input
                                label="Expiry Date *"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleExpiryChange}
                                error={errors.expiryDate}
                                placeholder="MM/YY"
                                maxLength={5}
                              />
                              <Input
                                label="CVV *"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                error={errors.cvv}
                                placeholder="123"
                                maxLength={4}
                              />
                            </div>
                            <div className="flex items-start gap-2 mt-4">
                              <input
                                type="checkbox"
                                id="saveCard"
                                name="saveCard"
                                checked={formData.saveCard}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 text-[#198DA7] border-gray-300 rounded focus:ring-[#198DA7]"
                              />
                              <label htmlFor="saveCard" className="text-sm text-gray-700">
                                Save this card for future purchases
                              </label>
                            </div>
                          </div>

                          {/* Terms and Conditions */}
                          <div className="border-t border-gray-200 pt-6 space-y-4">
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 text-[#198DA7] border-gray-300 rounded focus:ring-[#198DA7]"
                              />
                              <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                                I agree to the <a href="/terms" className="text-[#198DA7] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#198DA7] hover:underline">Privacy Policy</a> *
                              </label>
                            </div>
                            {errors.agreeTerms && (
                              <p className="text-sm text-red-500 ml-7">{errors.agreeTerms}</p>
                            )}

                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                id="marketingEmails"
                                name="marketingEmails"
                                checked={formData.marketingEmails}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 text-[#198DA7] border-gray-300 rounded focus:ring-[#198DA7]"
                              />
                              <label htmlFor="marketingEmails" className="text-sm text-gray-700">
                                Send me promotional emails about new features and special offers
                              </label>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                        {currentStep > 1 && (
                          <Button
                            type="button"
                            onClick={handleBack}
                            variant="outline"
                            className="flex-1"
                          >
                            Back
                          </Button>
                        )}
                        {currentStep < 4 ? (
                          <Button
                            type="button"
                            onClick={handleNext}
                            className="flex-1 bg-[#198DA7] hover:bg-[#156b7f]"
                          >
                            Continue
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="flex-1 bg-[#198DA7] hover:bg-[#156b7f]"
                          >
                            <Lock className="w-4 h-4 mr-2" />
                            Complete Order
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Security Badges */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    <span>PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>

                      {/* Package Details */}
                      <div className="bg-[#E6F4F7] rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">SMS Credits Package</h4>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p><span className="font-medium">{pricingDetails.credits.toLocaleString()}</span> Credits</p>
                          <p>~<span className="font-medium">{pricingDetails.messages.toLocaleString()}</span> Messages</p>
                          <p className="text-xs text-gray-600 mt-2">Network dependent</p>
                        </div>
                      </div>

                      {/* Selected Add-ons */}
                      {selectedAddons.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Add-ons</h4>
                          <div className="space-y-2">
                            {selectedAddons.map((addonId) => {
                              const addon = addonsData.find(a => a.id === addonId);
                              if (!addon) return null;

                              return (
                                <div key={addonId} className="flex items-center justify-between text-sm bg-gray-50 rounded-lg p-2">
                                  <span className="text-gray-700 flex items-center gap-2">
                                    <CheckCircle2 className="w-3 h-3 text-[#198DA7]" />
                                    {addon.name}
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    +{pricingDetails.currencySymbol}{addon.price}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Coupon Code */}
                      {!appliedCoupon ? (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Coupon Code
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              placeholder="Enter code"
                              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#198DA7]"
                            />
                            <Button
                              type="button"
                              onClick={applyCoupon}
                              size="sm"
                              variant="outline"
                              className="whitespace-nowrap"
                            >
                              Apply
                            </Button>
                          </div>
                          {errors.coupon && (
                            <p className="text-xs text-red-500 mt-1">{errors.coupon}</p>
                          )}
                        </div>
                      ) : (
                        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-900">
                              {appliedCoupon} applied
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={removeCoupon}
                            className="text-xs text-red-600 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      )}

                      {/* Price Breakdown */}
                      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">SMS Credits</span>
                          <span className="font-medium text-gray-900">
                            {pricingDetails.currencySymbol}{subtotal.toFixed(2)}
                          </span>
                        </div>
                        {addonsTotal > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Add-ons Total</span>
                            <span className="font-medium text-gray-900">
                              {pricingDetails.currencySymbol}{addonsTotal.toFixed(2)}
                            </span>
                          </div>
                        )}
                        {discount > 0 && (
                          <div className="flex justify-between text-sm text-green-600">
                            <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                            <span>-{pricingDetails.currencySymbol}{discountAmount.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            VAT ({(pricingDetails.vatRate * 100).toFixed(0)}%)
                          </span>
                          <span className="font-medium text-gray-900">
                            {pricingDetails.currencySymbol}{vat.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-[#198DA7]">
                          {pricingDetails.currencySymbol}{total.toFixed(2)}
                        </span>
                      </div>

                      {/* What's Included */}
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">{`What's Included`}:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#198DA7] flex-shrink-0 mt-0.5" />
                            <span>Instant credit activation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#198DA7] flex-shrink-0 mt-0.5" />
                            <span>No expiration date</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#198DA7] flex-shrink-0 mt-0.5" />
                            <span>24/7 customer support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#198DA7] flex-shrink-0 mt-0.5" />
                            <span>API access included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#198DA7] flex-shrink-0 mt-0.5" />
                            <span>Detailed analytics dashboard</span>
                          </li>
                        </ul>
                      </div>

                      {/* Help */}
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-2">Need help?</p>
                        <a href="/contact" className="text-sm text-[#198DA7] hover:underline font-medium">
                          Contact our sales team
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Trust Indicators */}
                  <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-xs">
                        <strong className="text-gray-900">30-day money-back guarantee.</strong> {`If you're not satisfied, we'll refund your purchase.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default function SMSCheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#198DA7]"></div>
          <p className="mt-4 text-gray-600">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
