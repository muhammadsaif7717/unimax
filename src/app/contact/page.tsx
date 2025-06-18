'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Sparkles,
} from 'lucide-react';

const ContactComponent = () => {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', company: '', message: '' });
      setErrors({});
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@unimax.agency',
      href: 'mailto:hello@unimax.agency',
    },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  const themeClasses = {
    bg: isDark
      ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
      : 'bg-gradient-to-br from-white via-slate-50 to-gray-100',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-slate-300' : 'text-gray-600',
    card: isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white/80 border-gray-200',
    input: isDark
      ? 'bg-slate-800 border-slate-600 text-white focus:border-cyan-400'
      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500',
    button: isDark
      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-orange-500 hover:to-purple-500'
      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-orange-500 hover:to-pink-500',
    iconBg: isDark ? 'bg-slate-800 text-cyan-400' : 'bg-blue-100 text-blue-600',
    socialHover: isDark ? 'bg-slate-800 hover:text-cyan-400' : 'bg-gray-100 hover:text-blue-600',
  };

  return (
    <div className={`min-h-screen px-4 py-20 transition-all duration-500 ${themeClasses.bg}`}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-opacity-20 mb-6 rounded-full bg-white p-2 backdrop-blur-sm"
          >
            <Sparkles
              className={`h-12 w-12 ${isDark ? 'text-cyan-400' : 'text-blue-600'} transition-colors`}
            />
          </button>

          <h2 className={`mb-6 text-5xl font-bold md:text-6xl ${themeClasses.text}`}>
            Lets Create
            <span
              className={`block bg-gradient-to-r ${
                isDark
                  ? 'from-cyan-400 via-blue-500 to-purple-600'
                  : 'from-blue-600 via-purple-600 to-orange-500'
              } bg-clip-text text-transparent`}
            >
              Something Amazing
            </span>
          </h2>

          <p className={`mx-auto max-w-2xl text-xl ${themeClasses.textSecondary}`}>
            Ready to transform your digital presence? Lets discuss your project and bring your
            vision to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            className={`rounded-2xl border p-8 backdrop-blur-sm ${themeClasses.card} transition-all duration-300 hover:shadow-2xl`}
          >
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className={`mb-3 block text-sm font-semibold ${themeClasses.text}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 transition-all duration-300 ${themeClasses.input} ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className={`mb-3 block text-sm font-semibold ${themeClasses.text}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 transition-all duration-300 ${themeClasses.input} ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className={`mb-3 block text-sm font-semibold ${themeClasses.text}`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border-2 px-4 py-3 transition-all duration-300 ${themeClasses.input}`}
                  placeholder="Your company (optional)"
                />
              </div>

              {/* Message */}
              <div>
                <label className={`mb-3 block text-sm font-semibold ${themeClasses.text}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full resize-none rounded-lg border-2 px-4 py-3 transition-all duration-300 ${themeClasses.input} ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                disabled={status === 'loading' || status === 'success'}
                onClick={handleSubmit}
                className={`flex w-full transform items-center justify-center gap-3 rounded-lg px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 ${themeClasses.button} disabled:opacity-50`}
              >
                {status === 'loading' && (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              className={`rounded-2xl border p-8 backdrop-blur-sm ${themeClasses.card} transition-all duration-300 hover:shadow-2xl`}
            >
              <h3 className={`mb-6 text-2xl font-bold ${themeClasses.text}`}>Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-4 rounded-lg p-4 transition-all duration-300 hover:translate-x-2 ${themeClasses.textSecondary} hover:bg-opacity-10 hover:bg-white`}
                  >
                    <div className={`rounded-lg p-3 ${themeClasses.iconBg}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={`font-semibold ${themeClasses.text}`}>{item.label}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`rounded-2xl border p-8 backdrop-blur-sm ${themeClasses.card} transition-all duration-300 hover:shadow-2xl`}
            >
              <h3 className={`mb-6 text-2xl font-bold ${themeClasses.text}`}>Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform rounded-lg p-4 transition-all duration-300 hover:scale-110 hover:rotate-3 ${themeClasses.socialHover} ${themeClasses.textSecondary}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`rounded-2xl border p-8 backdrop-blur-sm ${themeClasses.card} transition-all duration-300 hover:shadow-2xl`}
            >
              <h3 className={`mb-3 text-xl font-bold ${themeClasses.text}`}>Ready to Start?</h3>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                We typically respond within 24 hours. Lets discuss your project and see how we can
                help bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
