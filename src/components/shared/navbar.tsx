'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  // All hooks must be called before any conditional return
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathName = usePathname();

  const isDashboard = pathName.startsWith('/dashboard');
  const isAuth = pathName.startsWith('/auth');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Conditional return must come after all hooks
  if (isAuth || isDashboard) {
    return null;
  }

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'],
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200/20 bg-white/80 shadow-xl backdrop-blur-xl dark:border-gray-800/20 dark:bg-slate-900/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              router.push('/');
            }}
            className="flex items-center space-x-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-cyan-400 dark:to-blue-500">
              <span className="text-lg font-bold text-white">U</span>
            </div>
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-xl font-bold text-transparent dark:from-white dark:to-gray-300">
              UniMax
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navItems.map(item => (
              <div key={item.name} className="group relative">
                <motion.a
                  href={item.href}
                  className="flex items-center space-x-1 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
                  whileHover={{ y: -2 }}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-slate-800"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map(dropdownItem => (
                          <motion.a
                            key={dropdownItem}
                            href={`${item.href}#${dropdownItem.toLowerCase().replace(' ', '-')}`}
                            className="block px-4 py-3 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-cyan-400"
                            whileHover={{ x: 4 }}
                          >
                            {dropdownItem}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/sign-in"
                className="hidden items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl sm:flex dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-400"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg bg-gray-100 p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 lg:hidden dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gray-200 bg-white backdrop-blur-xl lg:hidden dark:border-gray-800 dark:bg-slate-900"
            >
              <div className="space-y-4 px-4 py-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block py-2 font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.dropdown.map(dropdownItem => (
                          <a
                            key={dropdownItem}
                            href={`${item.href}#${dropdownItem.toLowerCase().replace(' ', '-')}`}
                            className="block py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg dark:from-cyan-500 dark:to-blue-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    href="/auth/sign-in"
                    className="flex w-full items-center justify-center text-center"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
