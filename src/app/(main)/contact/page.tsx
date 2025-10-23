"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero + Quick Actions */}
      <section className="bg-[#6088A0] text-white pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-36 md:pb-48 relative">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">Contact US</h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Our support team is here and ready to assist you with any issue you
            might experience with your email campaigns, sending, deliverability,
            and much more.
          </p>
        </div>
      </section>

      {/* Overlapping Cards */}
      <div className="-mt-12 sm:-mt-16 md:-mt-20 relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
            <div className="flex items-start space-x-3">
              <div className="rounded-lg">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13 10C11.6739 10 10.4021 10.5268 9.46447 11.4645C8.52678 12.4021 8 13.6739 8 15V33C8 34.3261 8.52678 35.5979 9.46447 36.5355C10.4021 37.4732 11.6739 38 13 38H35C36.3261 38 37.5979 37.4732 38.5355 36.5355C39.4732 35.5979 40 34.3261 40 33V15C40 13.6739 39.4732 12.4021 38.5355 11.4645C37.5979 10.5268 36.3261 10 35 10H13ZM15 15C15 15.5304 14.7893 16.0391 14.4142 16.4142C14.0391 16.7893 13.5304 17 13 17C12.4696 17 11.9609 16.7893 11.5858 16.4142C11.2107 16.0391 11 15.5304 11 15C11 14.4696 11.2107 13.9609 11.5858 13.5858C11.9609 13.2107 12.4696 13 13 13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15ZM19 17C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13C18.4696 13 17.9609 13.2107 17.5858 13.5858C17.2107 13.9609 17 14.4696 17 15C17 15.5304 17.2107 16.0391 17.5858 16.4142C17.9609 16.7893 18.4696 17 19 17ZM25 17C25.5304 17 26.0391 16.7893 26.4142 16.4142C26.7893 16.0391 27 15.5304 27 15C27 14.4696 26.7893 13.9609 26.4142 13.5858C26.0391 13.2107 25.5304 13 25 13C24.4696 13 23.9609 13.2107 23.5858 13.5858C23.2107 13.9609 23 14.4696 23 15C23 15.5304 23.2107 16.0391 23.5858 16.4142C23.9609 16.7893 24.4696 17 25 17Z" fill="#090E12"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  Have a Mailjet account?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Sign in and our Support team will be able to assist more
                  quickly.
                </p>
                <button className="bg-[#1D2440] hover:bg-[#29325b] text-white text-sm px-5 py-2 rounded-lg transition">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
            <div className="flex items-start space-x-3">
              <div className="rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 40C20.6522 40 23.1957 38.9464 25.0711 37.0711C26.9464 35.1957 28 32.6522 28 30C28 27.3478 26.9464 24.8043 25.0711 22.9289C23.1957 21.0536 20.6522 20 18 20C15.3478 20 12.8043 21.0536 10.9289 22.9289C9.05357 24.8043 8 27.3478 8 30C8 32.6522 9.05357 35.1957 10.9289 37.0711C12.8043 38.9464 15.3478 40 18 40ZM18 34C19.0609 34 20.0783 33.5786 20.8284 32.8284C21.5786 32.0783 22 31.0609 22 30C22 28.9391 21.5786 27.9217 20.8284 27.1716C20.0783 26.4214 19.0609 26 18 26C16.9391 26 15.9217 26.4214 15.1716 27.1716C14.4214 27.9217 14 28.9391 14 30C14 31.0609 14.4214 32.0783 15.1716 32.8284C15.9217 33.5786 16.9391 34 18 34Z"
                    fill="#090E12"
                  />
                  <path
                    d="M32.4097 8.59L19.4097 21.59C19.0372 21.9647 18.8281 22.4716 18.8281 23C18.8281 23.5284 19.0372 24.0353 19.4097 24.41L23.5897 28.59C23.9644 28.9625 24.4713 29.1716 24.9997 29.1716C25.5281 29.1716 26.035 28.9625 26.4097 28.59L31.4097 23.59C31.5969 23.4039 31.7454 23.1827 31.8466 22.939C31.9479 22.6953 31.9999 22.4339 31.9997 22.17V21C31.9997 19.9 32.8997 19 33.9997 19H35.1697C35.4336 19.0002 35.695 18.9482 35.9387 18.8469C36.1824 18.7457 36.4037 18.5972 36.5897 18.41L39.4097 15.59C39.5969 15.4039 39.7454 15.1827 39.8466 14.939C39.9479 14.6953 39.9999 14.4339 39.9997 14.17V10C39.9997 9.46957 39.789 8.96086 39.4139 8.58579C39.0389 8.21071 38.5301 8 37.9997 8H33.8297C33.5658 7.99979 33.3045 8.05182 33.0607 8.15308C32.817 8.25434 32.5958 8.40283 32.4097 8.59Z"
                    fill="#090E12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  Reset password
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Use the recover password form and we&apos;ll contact you
                  shortly.
                </p>
                <button className="bg-[#1D2440] hover:bg-[#29325b] text-white text-sm px-5 py-2 rounded-lg transition">
                  Recover Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <Section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Card className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2440] mb-2">
                Not using yet? Or unable to access your account?
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Send us your technical question so we can get you started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="First name*"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
                <Input
                  type="text"
                  label="Last name*"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Company & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="Company*"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  label="Email*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#1D2440] mb-2">
                  Your message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1D2440] focus:border-transparent transition-all duration-200"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Newsletter */}
              <Checkbox
                label="I'd love to get the latest Mailjet blog in my inbox every week"
                checked={formData.newsletter}
                onChange={(e) =>
                  setFormData({ ...formData, newsletter: e.target.checked })
                }
              />

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="bg-[#1D2440] hover:bg-[#29325b] text-white"
              >
                Submit
              </Button>

              {/* Privacy Notice */}
              <p className="text-sm text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link
                  href="/privacy"
                  className="text-[#1D2440] hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-[#1D2440] hover:underline">
                  Terms of Service
                </Link>{" "}
                apply.
              </p>
            </form>
          </Card>
        </div>
      </Section>
    </div>
  );
}
