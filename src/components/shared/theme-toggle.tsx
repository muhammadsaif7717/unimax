// components/theme-toggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative rounded-full border border-gray-200 bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-gray-800 dark:bg-black/20 dark:hover:bg-black/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative h-5 w-5"
      >
        <Sun className="absolute inset-0 h-5 w-5 text-orange-500 opacity-100 transition-opacity duration-300 dark:opacity-0" />
        <Moon className="absolute inset-0 h-5 w-5 text-blue-400 opacity-0 transition-opacity duration-300 dark:opacity-100" />
      </motion.div>
    </motion.button>
  );
}
