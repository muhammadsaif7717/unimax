'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Code2,
  Smartphone,
  Palette,
  MessageCircle,
  ArrowRight,
  Check,
  Zap,
  Globe,
  Users,
  Lightbulb,
} from 'lucide-react';

const ServicesComponent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      id: 'web-development',
      icon: Code2,
      title: 'Web Development',
      description:
        'Full-stack web applications with modern technologies and scalable architecture.',
      features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development'],
      gradient: 'from-blue-500 to-cyan-500',
      darkGradient: 'from-blue-400 to-cyan-400',
      price: 'Starting at $2,999',
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deploy'],
      gradient: 'from-purple-500 to-pink-500',
      darkGradient: 'from-purple-400 to-pink-400',
      price: 'Starting at $4,999',
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'User-centered design solutions that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      gradient: 'from-orange-500 to-red-500',
      darkGradient: 'from-orange-400 to-red-400',
      price: 'Starting at $1,999',
    },
    {
      id: 'consulting',
      icon: MessageCircle,
      title: 'Consulting',
      description: 'Strategic technology consulting to optimize your digital transformation.',
      features: ['Tech Strategy', 'Code Review', 'Performance Audit', 'Team Training'],
      gradient: 'from-green-500 to-emerald-500',
      darkGradient: 'from-green-400 to-emerald-400',
      price: 'Starting at $299/hr',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const hoverVariants: Variants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 opacity-30">
          <div
            className={`absolute top-20 left-20 h-72 w-72 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/10'
            }`}
          />
          <div
            className={`absolute right-20 bottom-20 h-96 w-96 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-500/10'
            }`}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2"
            >
              <Zap className="h-4 w-4 text-blue-500" />
              <span
                className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Premium Digital Solutions
              </span>
            </motion.div>

            <h1
              className={`mb-6 text-5xl font-bold md:text-7xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p
              className={`mb-12 text-xl md:text-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
          >
            {services.map(service => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={hoverVariants}
                    className={`relative rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 ${
                      theme === 'dark'
                        ? 'border-slate-700/50 bg-slate-800/50 hover:border-slate-600'
                        : 'border-gray-200/50 bg-white/70 shadow-lg hover:border-gray-300 hover:shadow-xl'
                    }`}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-10 ${
                        theme === 'dark' ? service.darkGradient : service.gradient
                      }`}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${
                        theme === 'dark' ? service.darkGradient : service.gradient
                      }`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3
                      className={`mb-4 text-2xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mb-6 text-lg ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-8 space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <Check
                            className={`h-5 w-5 ${
                              theme === 'dark' ? 'text-green-400' : 'text-green-500'
                            }`}
                          />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {service.price}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        }`}
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                        theme === 'dark' ? 'shadow-2xl shadow-blue-500/10' : 'shadow-xl'
                      }`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 ${
              theme === 'dark'
                ? 'border border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50'
                : 'border border-gray-200 bg-gradient-to-r from-white to-gray-50 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
              {[
                { icon: Globe, number: '100+', label: 'Projects Completed' },
                { icon: Users, number: '50+', label: 'Happy Clients' },
                { icon: Code2, number: '5+', label: 'Years Experience' },
                { icon: Lightbulb, number: '24/7', label: 'Support Available' },
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <StatIcon
                      className={`mx-auto mb-4 h-12 w-12 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    />
                    <h3
                      className={`mb-2 text-4xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {stat.number}
                    </h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2
              className={`mb-6 text-4xl font-bold md:text-5xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>

            <p className={`mb-8 text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Lets discuss how we can bring your vision to life with our expertise
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-blue-500/25'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25'
              }`}
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComponent;
