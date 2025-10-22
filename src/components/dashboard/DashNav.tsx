'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Menu, User, LogOut, Settings, UserCircle2 } from 'lucide-react';
import { ThemeToggle } from '../shared/theme-toggle';

export default function DashboardNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left: Brand + Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
          >
            <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>

          <Link
            href="/dashboard"
            className="text-2xl font-semibold text-blue-600 dark:text-blue-400"
          >
            Unimax
          </Link>
        </div>

        {/* Right: Notifications, Theme, User Menu */}
        <div className="flex items-center gap-4">
          {/* Notification Button */}
          <button className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition hover:ring-2 hover:ring-blue-500 dark:bg-gray-800"
            >
              <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <UserCircle2 className="h-4 w-4" /> My Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <Settings className="h-4 w-4" /> Settings
                  </Link>
                  <hr className="my-1 border-gray-200 dark:border-gray-700" />
                  <button
                    onClick={() => alert('Logged out')}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white px-4 pb-3 md:hidden dark:border-gray-700 dark:bg-gray-900"
          >
            <Link
              href="/dashboard"
              className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/profile"
              className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200"
            >
              My Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200"
            >
              Settings
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
