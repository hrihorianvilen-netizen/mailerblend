'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="auth-container flex flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-col text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="auth-title text-primary mb-2">Login</h1>
        <p className="auth-subtitle text-gray-700">Enter your login details</p>
      </div>
      <div className="auth-card bg-white px-4 sm:px-5 py-8 sm:py-10">
        {/* Header */}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Email Input */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="auth-icon text-primary" />
              <label className="auth-label text-primary">Email</label>
            </div>
            <input
              type="email"
              placeholder="max.mustermann@gmail.ch"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="auth-input bg-[#F5F5F5] border border-gray-500 text-foreground placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lock className="auth-icon text-primary" />
              <label className="auth-label text-primary">Password</label>
            </div>
            <input
              type="password"
              placeholder="••••••••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="auth-input bg-[#F5F5F5] border border-gray-500 text-foreground placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-2 focus:ring-primary cursor-pointer"
              />
              <span className="ml-2 text-foreground text-xs sm:text-[14px]">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-primary hover:text-navy transition-colors text-xs sm:text-[14px]"
            >
              Forget Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="auth-button bg-primary text-white hover:bg-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-medium w-full mt-6 sm:mt-8"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-8 sm:mt-12 text-foreground text-xs sm:text-[14px]">
          Don&apos;t Have An Account?{' '}
          <Link
            href="/signup"
            className="text-primary font-semibold hover:text-navy transition-colors"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
