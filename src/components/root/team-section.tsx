'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Card } from '../ui/card';
import { useIsMounted } from '@/hooks/useIsMounted';

const TeamSection = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  const team = [
    {
      name: 'Alex Chen',
      role: 'Creative Director',
      bio: 'Visionary designer with 8+ years crafting digital experiences that captivate and convert.',
      image: '👨‍💻',
    },
    {
      name: 'Sarah Williams',
      role: 'Tech Lead',
      bio: 'Full-stack architect passionate about building scalable, performant applications.',
      image: '👩‍💻',
    },
    {
      name: 'Marcus Johnson',
      role: 'Strategy Director',
      bio: 'Business strategist who bridges the gap between technology and market success.',
      image: '👨‍💼',
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
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
            Meet Our Team
          </h2>
          <p
            className={`mx-auto max-w-2xl text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            The creative minds and technical experts who bring your digital visions to life.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group text-center">
                <motion.div
                  className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full text-4xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-slate-800 to-slate-700'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.image}
                </motion.div>
                <h3
                  className={`mb-2 text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`mb-4 font-medium ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                  }`}
                >
                  {member.role}
                </p>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
