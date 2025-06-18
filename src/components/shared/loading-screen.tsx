'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => onComplete?.(), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 150);

      return () => clearInterval(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-background fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative flex flex-col items-center space-y-8">
            {/* Logo Animation */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative"
            >
              <Zap className="text-primary h-16 w-16" />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 h-16 w-16"
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(59, 130, 246, 0)',
                    '0 0 40px rgba(59, 130, 246, 0.8)',
                    '0 0 0 rgba(59, 130, 246, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="from-primary bg-gradient-to-r to-purple-600 bg-clip-text text-4xl font-bold text-transparent"
            >
              Unimax
            </motion.h1>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground"
            >
              Crafting your digital experience...
            </motion.p>

            {/* Progress Bar */}
            <div className="bg-accent h-1 w-64 overflow-hidden rounded-full">
              <motion.div
                className="from-primary h-full bg-gradient-to-r to-purple-600"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span
              key={Math.floor(progress)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-muted-foreground font-mono text-sm"
            >
              {Math.floor(progress)}%
            </motion.span>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-primary/30 absolute h-2 w-2 rounded-full"
                animate={{
                  x: [0, Math.cos(i * 60) * 100, 0],
                  y: [0, Math.sin(i * 60) * 100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
