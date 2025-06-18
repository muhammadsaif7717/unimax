'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useIsMounted } from '@/hooks/useIsMounted';

const CTASection = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Card
          className={`relative overflow-hidden text-center ${
            theme === 'dark'
              ? 'border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800'
              : 'border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50'
          }`}
        >
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`mb-6 text-4xl font-bold md:text-5xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Ready to Transform Your Vision?
            </h2>
            <p
              className={`mx-auto mb-8 max-w-2xl text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Lets collaborate to create something extraordinary. Your next digital breakthrough
              starts with a conversation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          {/* Background Animation */}
          <motion.div
            className={`absolute inset-0 opacity-20 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
            }`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
