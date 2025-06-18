'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Calendar,
  Clock,
  MessageSquare,
} from 'lucide-react';
import type { Variants } from 'framer-motion';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate random success/error for demo
    const isSuccess = Math.random() > 0.2;
    setStatus(isSuccess ? 'success' : 'error');

    if (isSuccess) {
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
      }, 3000);
    } else {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@unimax.agency',
      href: 'mailto:hello@unimax.agency',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'San Francisco, CA',
      href: '#',
      description: 'Come say hello at our HQ',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-sky-500 dark:hover:text-sky-400',
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Globe,
      href: '#',
      label: 'Website',
      color: 'hover:text-emerald-600 dark:hover:text-emerald-400',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg dark:from-cyan-400 dark:to-blue-500"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold md:text-7xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-slate-900 dark:text-white">Lets Create</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
              Something Amazing
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to transform your digital presence? Lets discuss your project and bring your
            vision to life with cutting-edge technology.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-slate-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-800/80"
          >
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name Field */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-white">
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-slate-900 transition-all duration-300 focus:outline-none dark:bg-slate-700 dark:text-white ${
                        errors.name
                          ? 'border-red-500'
                          : focusedField === 'name'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/25 dark:border-cyan-400 dark:shadow-cyan-400/25'
                            : 'border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500'
                      }`}
                      placeholder="Your name"
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 dark:bg-cyan-400"
                      />
                    )}
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="mt-2 flex items-center gap-1 text-sm text-red-500"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email Field */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-white">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-slate-900 transition-all duration-300 focus:outline-none dark:bg-slate-700 dark:text-white ${
                        errors.email
                          ? 'border-red-500'
                          : focusedField === 'email'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/25 dark:border-cyan-400 dark:shadow-cyan-400/25'
                            : 'border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {focusedField === 'email' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 dark:bg-cyan-400"
                      />
                    )}
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="mt-2 flex items-center gap-1 text-sm text-red-500"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Company Field */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-white">
                  Company
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-slate-900 transition-all duration-300 focus:outline-none dark:bg-slate-700 dark:text-white ${
                      focusedField === 'company'
                        ? 'border-blue-500 shadow-lg shadow-blue-500/25 dark:border-cyan-400 dark:shadow-cyan-400/25'
                        : 'border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500'
                    }`}
                    placeholder="Your company (optional)"
                  />
                  {focusedField === 'company' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 dark:bg-cyan-400"
                    />
                  )}
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-white">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`w-full resize-none rounded-xl border-2 bg-white px-4 py-3 text-slate-900 transition-all duration-300 focus:outline-none dark:bg-slate-700 dark:text-white ${
                      errors.message
                        ? 'border-red-500'
                        : focusedField === 'message'
                          ? 'border-blue-500 shadow-lg shadow-blue-500/25 dark:border-cyan-400 dark:shadow-cyan-400/25'
                          : 'border-slate-300 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 dark:bg-cyan-400"
                    />
                  )}
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="mt-2 flex items-center gap-1 text-sm text-red-500"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="button"
                disabled={status === 'loading'}
                onClick={handleSubmit}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative w-full overflow-hidden rounded-xl px-6 py-4 text-lg font-semibold text-white transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : status === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-orange-500 hover:to-pink-500 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-orange-500 dark:hover:to-purple-500'
                } shadow-lg hover:shadow-xl disabled:opacity-50`}
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending Message...
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5" />
                      Message Sent Successfully!
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <AlertCircle className="h-5 w-5" />
                      Failed to Send. Try Again
                    </motion.div>
                  )}
                  {status === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-slate-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-800/80"
            >
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-cyan-400" />
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map(item => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group flex items-center gap-4 rounded-xl bg-slate-50/50 p-4 transition-all duration-300 hover:bg-slate-100/80 dark:bg-slate-700/50 dark:hover:bg-slate-600/80"
                  >
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-cyan-900/50 dark:text-cyan-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.label}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{item.value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-slate-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-800/80"
            >
              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, rotateZ: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center gap-3 rounded-xl bg-slate-50/50 p-4 text-slate-600 hover:bg-white dark:bg-slate-700/50 dark:text-slate-300 dark:hover:bg-slate-600 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 text-center backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80"
              >
                <Clock className="mx-auto mb-3 h-8 w-8 text-blue-600 dark:text-cyan-400" />
                <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  Quick Response
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Within 24 hours</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 text-center backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80"
              >
                <Calendar className="mx-auto mb-3 h-8 w-8 text-purple-600 dark:text-purple-400" />
                <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  Free Consultation
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">30-min strategy call</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactComponent;
