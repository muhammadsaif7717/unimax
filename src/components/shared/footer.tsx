// components/footer.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
  Heart,
  Zap,
  Send,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500', name: 'Facebook' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400', name: 'Twitter' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500', name: 'Instagram' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600', name: 'LinkedIn' },
    {
      icon: Github,
      href: '#',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      name: 'GitHub',
    },
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Blog', href: '/blog' },
      { name: 'Press Kit', href: '/press' },
    ],
    Services: [
      { name: 'Web Development', href: '/services/web' },
      { name: 'Mobile Apps', href: '/services/mobile' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Digital Marketing', href: '/services/marketing' },
      { name: 'Consulting', href: '/services/consulting' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Tutorials', href: '/tutorials' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-2xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute right-32 bottom-32 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 6,
          }}
          className="absolute top-1/2 left-1/2 h-24 w-24 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-b border-gray-200 py-16 dark:border-gray-800"
        >
          <motion.div variants={itemVariants} className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-500">
              <Zap className="h-8 w-8 text-white" />
            </div>

            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                Stay Ahead of the Curve
              </span>
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Join 10,000+ professionals who get our weekly insights on digital trends, exclusive
              resources, and early access to our latest projects.
            </p>

            <div className="mx-auto mb-6 flex max-w-lg flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-300 bg-white px-6 py-4 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-cyan-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg dark:from-cyan-500 dark:to-blue-500"
              >
                <span>Subscribe</span>
                <Send className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
            {/* Company Info - Takes 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-8 flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg dark:from-cyan-400 dark:to-blue-500">
                  <span className="text-xl font-bold text-white">U</span>
                </div>
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-gray-300">
                  UniMax
                </span>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Transforming ideas into exceptional digital experiences. We are passionate about
                creating innovative solutions that drive real business results and make a lasting
                impact.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@unimax.com"
                  whileHover={{ x: 5 }}
                  className="group flex items-center space-x-4 text-gray-600 transition-all duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                >
                  <div className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 group-hover:bg-blue-100 dark:bg-gray-800 dark:group-hover:bg-blue-900/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">hello@unimax.com</span>
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ x: 5 }}
                  className="group flex items-center space-x-4 text-gray-600 transition-all duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                >
                  <div className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 group-hover:bg-blue-100 dark:bg-gray-800 dark:group-hover:bg-blue-900/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium">+1 (555) 123-4567</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400"
                >
                  <div className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 dark:bg-gray-800">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-medium">San Francisco, CA 94105</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer Links - Each takes 1 column */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants} className="lg:col-span-1">
                <h3 className="relative mb-6 text-lg font-bold text-gray-900 dark:text-white">
                  {category}
                  <div className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400"></div>
                </h3>
                <ul className="space-y-4">
                  {links.map(link => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="group flex items-center font-medium text-gray-600 transition-all duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                      >
                        <span>{link.name}</span>
                        <ArrowUp className="ml-1 h-3 w-3 rotate-45 transform opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-200 py-8 dark:border-gray-800"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="flex items-center text-center text-gray-600 lg:text-left dark:text-gray-400"
            >
              <span className="flex items-center">
                © 2025 UniMax. Made with
                <Heart className="mx-2 h-4 w-4 animate-pulse fill-current text-red-500" />
                in Bangladesh
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              {socialLinks.map(social => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-xl bg-gray-100 p-3 text-gray-600 dark:bg-gray-800 dark:text-gray-400 ${social.color} group relative overflow-hidden transition-all duration-200 hover:shadow-lg`}
                  title={social.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-200 group-hover:opacity-10"></div>
                  <social.icon className="relative z-10 h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-xl dark:from-cyan-500 dark:to-blue-500"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* Extra Bottom Info */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-100 py-6 dark:border-gray-800"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row dark:text-gray-400">
            <div className="flex items-center space-x-6">
              <span>🌍 Available Worldwide</span>
              <span>⚡ 99.9% Uptime</span>
              <span>🔒 Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/sitemap"
                className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                Sitemap
              </a>
              <span>•</span>
              <a
                href="/rss"
                className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                RSS Feed
              </a>
              <span>•</span>
              <a
                href="/status"
                className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                Status Page
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
