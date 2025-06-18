// components/hero-banner.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Globe, Cpu } from 'lucide-react';

const HeroBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Floating elements animation
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-3xl dark:from-cyan-400/20 dark:to-blue-600/20"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 blur-3xl dark:from-purple-400/20 dark:to-cyan-400/20"
        />

        {/* Floating Icons */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-32 right-20 text-blue-400/30 dark:text-cyan-400/30"
        >
          <Zap className="h-8 w-8" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute bottom-40 left-20 text-purple-400/30 dark:text-blue-400/30"
        >
          <Globe className="h-10 w-10" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '3s' }}
          className="absolute top-1/2 left-32 text-orange-400/30 dark:text-orange-400/30"
        >
          <Cpu className="h-6 w-6" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={childVariants}
            className="mb-8 inline-flex items-center rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-700/50 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
          >
            <Star className="mr-2 h-4 w-4 text-yellow-500" />
            <span>Trusted by 500+ Companies Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={childVariants}
            className="mb-8 text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-cyan-300 dark:to-blue-300">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">
              Digital Vision
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={childVariants}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl dark:text-gray-300"
          >
            We create stunning digital experiences that captivate your audience and drive measurable
            results. From concept to launch, we are your trusted partner in digital excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:from-cyan-500 dark:to-blue-500"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 rounded-full border border-gray-300 bg-white/10 px-8 py-4 font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 dark:border-gray-600 dark:bg-black/20 dark:text-gray-300 dark:hover:bg-black/30"
            >
              <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={childVariants}
            className="mx-auto grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Team Members' },
              { number: '24/7', label: 'Support Available' },
            ].map(stat => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:border-gray-700/50 dark:bg-black/20 dark:hover:bg-black/30"
              >
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-400 dark:to-blue-400">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          className="h-20 w-full text-white dark:text-slate-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
