'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Card } from '../ui/card';
import { useIsMounted } from '@/hooks/useIsMounted';
import Image from 'next/image';

const TeamSection = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  const team = [
    {
      name: 'MD. Nahidul Islam',
      role: 'Founder & CEO',
      bio: 'Local SEO expert with a passion for helping businesses grow through innovative digital strategies.',
      image: 'https://i.ibb.co/6c52sgtP/1000283255-01.jpg',
    },
    {
      name: 'MD. Saif Islam',
      role: 'Founder & CEO',
      bio: 'Full-stack developer specializing in building scalable web applications with a focus on user experience.',
      image: 'https://i.ibb.co/Cp0cjmx7/509427353-701051856128245-8502555237454319155-n.jpg',
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

        <div className="grid gap-8 md:grid-cols-2">
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
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
