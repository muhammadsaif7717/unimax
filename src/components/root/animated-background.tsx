'use client';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useIsMounted } from '@/hooks/useIsMounted';

const AnimatedBackground = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
        }`}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-2 w-2 rounded-full ${
            theme === 'dark' ? 'bg-cyan-500/20' : 'bg-blue-500/20'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
