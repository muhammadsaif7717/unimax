'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Zap, Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>('');
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Always generate particles for dark mode (they'll only show when dark mode is active)
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] transition-all duration-500 dark:from-[#0A0A0F] dark:via-[#0F172A] dark:to-[#1A1B23]">
      {/* Animated Background Particles for Dark Mode */}
      <div className="pointer-events-none fixed inset-0 hidden overflow-hidden dark:block">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-[#00D9FF]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: particle.delay,
              duration: particle.duration,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Left Side - Branding */}
        <motion.div
          className="relative hidden flex-col justify-center overflow-hidden bg-white/50 p-12 lg:flex lg:w-1/2 dark:bg-[#0A0A0F]/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Light mode shapes */}
            <motion.div
              className="absolute top-20 left-20 h-32 w-32 rounded-full bg-[#3B82F6]/5 dark:hidden"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute right-32 bottom-32 h-24 w-24 rounded-full bg-[#F97316]/5 dark:hidden"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Dark mode shapes */}
            <motion.div
              className="absolute top-20 left-20 hidden h-32 w-32 rounded-full border border-[#00D9FF]/20 dark:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute right-32 bottom-32 hidden h-24 w-24 rounded-full border border-[#FF8C42]/20 dark:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <motion.div variants={itemVariants} className="relative z-10">
            <motion.div className="mb-8 flex items-center" whileHover={{ scale: 1.05 }}>
              <div className="mr-4 rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] p-3 shadow-lg dark:from-[#00D9FF] dark:to-[#06B6D4] dark:shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-[#1F2937] dark:text-white">
                Unimax Digital
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 bg-gradient-to-r from-[#1E40AF] to-[#F97316] bg-clip-text text-4xl font-bold text-transparent lg:text-5xl dark:from-[#00D9FF] dark:to-[#FF8C42]"
            >
              Welcome Back to the Future
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg text-[#64748B] dark:text-[#E2E8F0]"
            >
              Access your digital command center and continue building tomorrow{`'`}s web
              experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: Shield, text: 'Enterprise-grade security' },
                { icon: Zap, text: 'Lightning-fast performance' },
                { icon: CheckCircle2, text: '99.9% uptime guarantee' },
              ].map((feature, index) => (
                <motion.div key={index} className="flex items-center" whileHover={{ x: 5 }}>
                  <feature.icon className="mr-3 text-[#3B82F6] dark:text-[#00D9FF]" size={20} />
                  <span className="text-[#64748B] dark:text-[#E2E8F0]">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Sign In Form */}
        <motion.div
          className="flex w-full items-center justify-center p-8 lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-[#00D9FF]/20 dark:bg-[#1A1B23]/80 dark:shadow-[0_0_40px_rgba(0,217,255,0.1)]"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div variants={itemVariants} className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold text-[#1F2937] dark:text-white">Sign In</h2>
              <p className="text-[#64748B] dark:text-[#E2E8F0]">
                Enter your credentials to access your account
              </p>
            </motion.div>

            <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="mb-2 block text-sm font-medium text-[#1F2937] dark:text-[#E2E8F0]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                      focusedField === 'email'
                        ? 'text-[#3B82F6] dark:text-[#00D9FF]'
                        : 'text-[#9CA3AF] dark:text-[#64748B]'
                    }`}
                    size={20}
                  />
                  <motion.input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pr-4 pl-12 text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-300 focus:border-[#3B82F6] focus:shadow-lg focus:outline-none dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white dark:placeholder-[#64748B] dark:focus:border-[#00D9FF] dark:focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div variants={itemVariants}>
                <label className="mb-2 block text-sm font-medium text-[#1F2937] dark:text-[#E2E8F0]">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                      focusedField === 'password'
                        ? 'text-[#3B82F6] dark:text-[#00D9FF]'
                        : 'text-[#9CA3AF] dark:text-[#64748B]'
                    }`}
                    size={20}
                  />
                  <motion.input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pr-12 pl-12 text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-300 focus:border-[#3B82F6] focus:shadow-lg focus:outline-none dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white dark:placeholder-[#64748B] dark:focus:border-[#00D9FF] dark:focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
                    placeholder="Enter your password"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform text-[#9CA3AF] transition-colors hover:text-[#3B82F6] dark:text-[#64748B] dark:hover:text-[#00D9FF]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div variants={itemVariants} className="flex items-center justify-between">
                <label className="flex items-center">
                  <motion.input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 bg-white text-[#3B82F6] focus:ring-[#3B82F6] dark:border-[#334155] dark:bg-[#0A0A0F] dark:text-[#00D9FF] dark:focus:ring-[#00D9FF]"
                    whileHover={{ scale: 1.1 }}
                  />
                  <span className="text-sm text-[#64748B] dark:text-[#E2E8F0]">Remember me</span>
                </label>
                <motion.a
                  href="#"
                  className="text-sm text-[#3B82F6] transition-colors hover:text-[#1E40AF] dark:text-[#00D9FF] dark:hover:text-[#06B6D4]"
                  whileHover={{ scale: 1.05 }}
                >
                  Forgot password?
                </motion.a>
              </motion.div>

              {/* Sign In Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] px-4 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 dark:from-[#00D9FF] dark:to-[#06B6D4] dark:text-[#0A0A0F] dark:hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
                variants={itemVariants}
                whileHover={{ scale: isLoading ? 1 : 1.05, y: isLoading ? 0 : -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <svg className="mr-2 h-5 w-5 animate-spin text-current" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Signing In...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="signin"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      Sign In
                      <ArrowRight className="ml-2" size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
            <div className="mt-6 text-center">
              <span className="text-sm text-[#64748B] dark:text-[#E2E8F0]">
                Not registered? {/* If using Next.js: */}
                <Link href="/auth/sign-up" className="font-semibold text-[#00D9FF] hover:underline">
                  Sign up
                </Link>
                {/* If not using Next.js, use: */}
                {/* <a href="/auth/sign-in" className="text-[#00D9FF] font-semibold hover:underline">Sign in</a> */}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;
