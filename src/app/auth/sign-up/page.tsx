'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building,
  Phone,
  ArrowRight,
  Zap,
  Shield,
  Star,
  Rocket,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import getURL from '@/lib/getURL';
import { useRouter } from 'next/navigation';

// --- Types ---
type AccountType = 'individual' | 'company';
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  password: string;
  confirmPassword: string;
  accountType: AccountType;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
};

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

type ConstellationStar = {
  id: number;
  x: number;
  y: number;
  connections: number;
};

type Feature = {
  icon: React.ElementType;
  text: string;
  color: string;
};

// --- Component ---
const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    accountType: 'individual',
    agreeToTerms: false,
    subscribeNewsletter: true,
  });

  const [particles, setParticles] = useState<Particle[]>([]);
  const [constellation, setConstellation] = useState<ConstellationStar[]>([]);

  const router = useRouter();

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);

    const newConstellation: ConstellationStar[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      connections: Math.floor(Math.random() * 3) + 1,
    }));
    setConstellation(newConstellation);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      const url = await getURL();
      // Here you would typically send the data to your backend
      const response = await axios.post(`${url}/users/post`, formData);

      // Optionally, handle the response (e.g., show a success message)
      if (response.status == 200) {
        alert('user created');
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        password: '',
        confirmPassword: '',
        accountType: 'individual',
        agreeToTerms: false,
        subscribeNewsletter: true,
      });
      setCurrentStep(1);
      setFocusedField('');
      setIsLoading(false);
      router.push('/');
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Validation
  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email);
      case 2:
        return (
          !!formData.password &&
          !!formData.confirmPassword &&
          formData.password === formData.confirmPassword
        );
      case 3:
        return formData.agreeToTerms;
      default:
        return false;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const stepVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  const particleVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.8, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  // Feature list for branding section
  const features: Feature[] = [
    { icon: Users, text: 'Join 50,000+ developers worldwide', color: '#00D9FF' },
    { icon: Shield, text: 'Bank-level security & encryption', color: '#FF8C42' },
    { icon: Star, text: 'Premium support & resources', color: '#FF1CF7' },
    { icon: Zap, text: 'Lightning-fast deployment tools', color: '#06B6D4' },
  ];

  return (
    <div className="min-h-screen transition-all duration-500 dark:bg-gradient-to-br dark:from-[#0A0A0F] dark:via-[#0F172A] dark:to-[#1A1B23]">
      {/* Advanced Background Effects for Dark Mode */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Floating Particles */}
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
        {/* Constellation Network */}
        {constellation.map((star, index) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute h-2 w-2 rounded-full bg-[#FF8C42]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        ))}
      </div>
      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Left Side - Enhanced Branding */}
        <motion.div
          className="relative hidden flex-col justify-center overflow-hidden p-12 lg:flex lg:w-2/5 dark:bg-[#0A0A0F]/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <>
              <motion.div
                className="absolute top-16 left-16 h-40 w-40 rounded-full border-2 border-[#00D9FF]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-32 left-32 h-20 w-20 rounded-full border border-[#FF8C42]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute right-24 bottom-24 h-32 w-32 rounded-full border border-[#FF1CF7]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: 360,
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                }}
              />
            </>
          </div>
          <motion.div variants={itemVariants} className="relative z-10">
            <motion.div className="mb-12 flex items-center" whileHover={{ scale: 1.05 }}>
              <div className="mr-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#06B6D4] p-4 shadow-[0_0_30px_rgba(0,217,255,0.4)]">
                <Rocket className="text-white" size={28} />
              </div>
              <div>
                <span className="block text-3xl font-bold dark:text-white">Unimax Digital</span>
                <span className="text-sm dark:text-[#00D9FF]">Digital Agency</span>
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mb-8 bg-gradient-to-r from-[#00D9FF] via-[#FF8C42] to-[#FF1CF7] bg-clip-text text-4xl leading-tight font-bold text-transparent lg:text-6xl"
            >
              Join the Digital Revolution
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mb-12 text-xl leading-relaxed dark:text-[#E2E8F0]"
            >
              Create your account and unlock access to cutting-edge web development tools, premium
              templates, and exclusive resources.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map(feature => (
                <motion.div
                  key={feature.text}
                  className="flex items-center"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="mr-4 rounded-lg p-2"
                    style={{ backgroundColor: `${feature.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {React.createElement(feature.icon, {
                      style: { color: feature.color },
                      size: 20,
                    })}
                  </motion.div>
                  <span className="dark:text-[#E2E8F0]">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Right Side - Multi-Step Sign Up Form */}
        <motion.div
          className="flex w-full items-center justify-center p-8 lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="w-full max-w-lg rounded-3xl border p-10 shadow-[0_0_50px_rgba(0,217,255,0.15)] backdrop-blur-sm dark:border-[#00D9FF]/20 dark:bg-[#1A1B23]/90"
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Progress Bar */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                {[1, 2, 3].map(step => (
                  <motion.div
                    key={step}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      currentStep >= step
                        ? 'bg-gradient-to-r from-[#00D9FF] to-[#06B6D4] text-[#0A0A0F]'
                        : 'bg-[#334155] text-[#64748B]'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={
                      currentStep === step
                        ? {
                            boxShadow: '0 0 20px rgba(0,217,255,0.5)',
                          }
                        : {}
                    }
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
              <div className="h-2 rounded-full bg-[#334155]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#06B6D4]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentStep / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
            <motion.form
              variants={containerVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
              autoComplete="off"
            >
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="mb-8 text-center">
                      <h2 className="mb-2 text-3xl font-bold dark:text-white">
                        Personal Information
                      </h2>
                      <p className="dark:text-[#E2E8F0]">Let{`'`}s start with the basics</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                        >
                          First Name
                        </label>
                        <div className="relative">
                          <User
                            className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                              focusedField === 'firstName' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                            }`}
                            size={18}
                          />
                          <motion.input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={e => handleInputChange('firstName', e.target.value)}
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField('')}
                            className="w-full rounded-xl border py-3 pr-4 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                          />
                        </div>
                      </div>
                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                        >
                          Last Name
                        </label>
                        <div className="relative">
                          <User
                            className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                              focusedField === 'lastName' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                            }`}
                            size={18}
                          />
                          <motion.input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={e => handleInputChange('lastName', e.target.value)}
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField('')}
                            className="w-full rounded-xl border py-3 pr-4 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                            focusedField === 'email' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                          }`}
                          size={18}
                        />
                        <motion.input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className="w-full rounded-xl border py-3 pr-4 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Step 2: Account Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="mb-8 text-center">
                      <h2 className="mb-2 text-3xl font-bold dark:text-white">Account Details</h2>
                      <p className="dark:text-[#E2E8F0]">Secure your account</p>
                    </div>
                    {/* Password */}
                    <div>
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Lock
                          className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                            focusedField === 'password' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                          }`}
                          size={18}
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          className="absolute top-1/2 right-3 -translate-y-1/2 transform text-[#64748B] hover:text-[#00D9FF] focus:outline-none"
                          onClick={() => setShowPassword(prev => !prev)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        <motion.input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={e => handleInputChange('password', e.target.value)}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField('')}
                          className="w-full rounded-xl border py-3 pr-10 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                        />
                      </div>
                    </div>
                    {/* Confirm Password */}
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock
                          className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                            focusedField === 'confirmPassword' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                          }`}
                          size={18}
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          className="absolute top-1/2 right-3 -translate-y-1/2 transform text-[#64748B] hover:text-[#00D9FF] focus:outline-none"
                          onClick={() => setShowConfirmPassword(prev => !prev)}
                          aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        <motion.input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={e => handleInputChange('confirmPassword', e.target.value)}
                          onFocus={() => setFocusedField('confirmPassword')}
                          onBlur={() => setFocusedField('')}
                          className="w-full rounded-xl border py-3 pr-10 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Step 3: Company & Preferences */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="mb-8 text-center">
                      <h2 className="mb-2 text-3xl font-bold dark:text-white">
                        Company & Preferences
                      </h2>
                      <p className="dark:text-[#E2E8F0]">Tell us more about you</p>
                    </div>
                    {/* Account Type */}
                    <div>
                      <label className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]">
                        Account Type
                      </label>
                      <div className="flex gap-4">
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="radio"
                            name="accountType"
                            value="individual"
                            checked={formData.accountType === 'individual'}
                            onChange={() => handleInputChange('accountType', 'individual')}
                            className="accent-[#00D9FF]"
                          />
                          Individual
                        </label>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="radio"
                            name="accountType"
                            value="company"
                            checked={formData.accountType === 'company'}
                            onChange={() => handleInputChange('accountType', 'company')}
                            className="accent-[#00D9FF]"
                          />
                          Company
                        </label>
                      </div>
                    </div>
                    {/* Company Name & Phone */}
                    {formData.accountType === 'company' && (
                      <>
                        <div>
                          <label
                            htmlFor="company"
                            className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                          >
                            Company Name
                          </label>
                          <div className="relative">
                            <Building
                              className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                                focusedField === 'company' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                              }`}
                              size={18}
                            />
                            <motion.input
                              id="company"
                              type="text"
                              value={formData.company}
                              onChange={e => handleInputChange('company', e.target.value)}
                              onFocus={() => setFocusedField('company')}
                              onBlur={() => setFocusedField('')}
                              className="w-full rounded-xl border py-3 pr-4 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium dark:text-[#E2E8F0]"
                          >
                            Phone
                          </label>
                          <div className="relative">
                            <Phone
                              className={`absolute top-1/2 left-3 -translate-y-1/2 transform ${
                                focusedField === 'phone' ? 'text-[#00D9FF]' : 'text-[#64748B]'
                              }`}
                              size={18}
                            />
                            <motion.input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={e => handleInputChange('phone', e.target.value)}
                              onFocus={() => setFocusedField('phone')}
                              onBlur={() => setFocusedField('')}
                              className="w-full rounded-xl border py-3 pr-4 pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#00D9FF] dark:border-[#334155] dark:bg-[#0A0A0F]/50 dark:text-white"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    {/* Preferences */}
                    <div className="flex flex-col gap-3">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={e => handleInputChange('agreeToTerms', e.target.checked)}
                          className="accent-[#00D9FF]"
                          required
                        />
                        <span>
                          I agree to the{' '}
                          <a href="#" className="text-[#00D9FF] underline" tabIndex={-1}>
                            Terms & Conditions
                          </a>
                        </span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.subscribeNewsletter}
                          onChange={e => handleInputChange('subscribeNewsletter', e.target.checked)}
                          className="accent-[#00D9FF]"
                        />
                        <span>Subscribe to our newsletter</span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="rounded-xl bg-[#334155] px-6 py-3 font-bold transition-all duration-300 hover:bg-[#1E293B] dark:text-white"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className={`flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#06B6D4] px-6 py-3 font-bold text-white transition-all duration-300 ${
                      !isStepValid(currentStep)
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:from-[#06B6D4] hover:to-[#00D9FF]'
                    }`}
                  >
                    Next <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading || !isStepValid(currentStep)}
                    className={`flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8C42] to-[#FF1CF7] px-6 py-3 font-bold text-white transition-all duration-300 ${
                      isLoading || !isStepValid(currentStep)
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:from-[#FF1CF7] hover:to-[#FF8C42]'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Creating...
                      </span>
                    ) : (
                      <>
                        Create Account <Rocket size={18} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.form>
            <div className="mt-6 text-center">
              <span className="text-sm text-[#64748B] dark:text-[#E2E8F0]">
                Already have an account? {/* If using Next.js: */}
                <Link href="/auth/sign-in" className="font-semibold text-[#00D9FF] hover:underline">
                  Sign in
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

export default SignUpPage;
