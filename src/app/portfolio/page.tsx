'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Code,
  Palette,
  Smartphone,
  Globe,
} from 'lucide-react';
import type { Variants } from 'framer-motion';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Work', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description:
        'Full-stack e-commerce solution with advanced analytics and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      date: '2024',
      links: {
        live: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'AI-Powered Dashboard',
      category: 'web',
      description:
        'Machine learning dashboard with predictive analytics and beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      date: '2024',
      links: {
        live: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app with social features and gamification elements.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      date: '2023',
      links: {
        live: '#',
        github: '#',
      },
      featured: false,
    },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'design',
      description:
        'Complete brand identity including logo, color palette, and design system documentation.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tech: ['Figma', 'Adobe CC', 'Framer', 'Webflow'],
      date: '2023',
      links: {
        live: '#',
      },
      featured: false,
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'web',
      description:
        'Property listing platform with virtual tours and mortgage calculator integration.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Three.js'],
      date: '2023',
      links: {
        live: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'On-demand food delivery with real-time tracking and payment integration.',
      image:
        'https://plus.unsplash.com/premium_photo-1748027751473-0c4893392110?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
      date: '2023',
      links: {
        live: '#',
      },
      featured: false,
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h1
            className="mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-5xl font-bold text-transparent md:text-7xl dark:from-white dark:via-cyan-300 dark:to-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A collection of projects that showcase creativity, technical expertise, and attention to
            detail
          </motion.p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 flex flex-wrap justify-center gap-4"
        >
          {filters.map(filter => {
            const IconComponent = filter.icon;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`group relative rounded-2xl px-6 py-3 font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25'
                    : 'bg-white/80 text-slate-700 shadow-sm hover:bg-white hover:shadow-md dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700'
                } border border-slate-200/50 backdrop-blur-sm dark:border-slate-700/50`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent size={18} />
                  <span>{filter.label}</span>
                </div>
                {selectedFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-800/80 ${
                  project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-3 py-1 text-sm font-medium text-white">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-56"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute right-4 bottom-4 left-4 flex gap-3">
                      {project.links.live && (
                        <motion.button
                          className="flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 font-medium text-slate-900 backdrop-blur-sm dark:bg-slate-800/90 dark:text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={16} />
                          View
                        </motion.button>
                      )}
                      {project.links.github && (
                        <motion.button
                          className="flex items-center gap-2 rounded-xl bg-slate-900/90 px-4 py-2 font-medium text-white backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Calendar size={16} className="text-slate-500 dark:text-slate-400" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 transition-all duration-500 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:to-cyan-500/10" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            Have a project in mind?
          </h3>
          <p className="mx-auto mb-8 max-w-md text-slate-600 dark:text-slate-300">
            Lets collaborate and bring your vision to life with cutting-edge technology and creative
            design.
          </p>
          <motion.button
            className="group relative rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 dark:shadow-cyan-500/25 dark:hover:shadow-cyan-500/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ExternalLink
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
