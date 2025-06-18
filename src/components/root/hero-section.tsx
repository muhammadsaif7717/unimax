'use client';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useIsMounted } from '@/hooks/useIsMounted';

const HeroSection = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
              theme === 'dark'
                ? 'border border-cyan-500/20 bg-cyan-500/10 text-cyan-400'
                : 'border border-blue-500/20 bg-blue-500/10 text-blue-600'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Zap size={16} />
            Digital Innovation Agency
          </motion.div>

          <motion.h1
            className={`mb-6 text-6xl font-bold md:text-8xl ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About{' '}
            <span
              className={`bg-gradient-to-r ${
                theme === 'dark' ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}
            >
              UniMax
            </span>
          </motion.h1>

          <motion.p
            className={`mx-auto mb-8 max-w-3xl text-xl md:text-2xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We are not just another agency. We are digital architects, crafting tomorrows
            experiences today with cutting-edge technology and boundless creativity.
          </motion.p>

          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button size="lg" className="group">
              Our Story
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Button>
            <Button variant="secondary" size="lg" className="group">
              <Play className="mr-2 transition-transform group-hover:scale-110" size={20} />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
