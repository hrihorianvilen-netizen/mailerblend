'use client';

import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    console.log('Signup:', formData);
  };

  return (
    <div className="auth-container flex flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-col text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="auth-title text-primary mb-2">Create Account</h1>
        <p className="auth-subtitle text-gray-700">Enter your details to register</p>
      </div>
      <div className="auth-card bg-white px-4 sm:px-5 py-8 sm:py-10">
        {/* Header */}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Full Name Input */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <User className="auth-icon text-primary" />
              <label className="auth-label text-primary">Full Name</label>
            </div>
            <input
              type="text"
              placeholder="Max Mustermann"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="auth-input bg-[#F5F5F5] border border-gray-500 text-foreground placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email Input */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="auth-icon text-primary" />
              <label className="auth-label text-primary">Email</label>
            </div>
            <input
              type="email"
              placeholder="max.mustermann@gmail.com"
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
              <label className="auth-label text-primary">Create Password</label>
            </div>
            <input
              type="password"
              placeholder="••••••••••••••"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                setErrors({ confirmPassword: '' });
              }}
              required
              className="auth-input bg-[#F5F5F5] border border-gray-500 text-foreground placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lock className="auth-icon text-primary" />
              <label className="auth-label text-primary">Re-inter Password</label>
            </div>
            <input
              type="password"
              placeholder="••••••••••••••"
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value });
                setErrors({ confirmPassword: '' });
              }}
              required
              className={`auth-input bg-[#F5F5F5] border text-foreground placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-500 focus:ring-primary'
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-red-500 text-[12px]">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="auth-button bg-primary text-white hover:bg-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-medium w-full mt-6 sm:mt-8"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
