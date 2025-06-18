'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useIsMounted } from '@/hooks/useIsMounted';

const ValuesSection = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description:
        'We transform ambitious ideas into digital realities that drive real business impact and user engagement.',
      color: theme === 'dark' ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-blue-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'We stay ahead of the curve, adopting cutting-edge technologies and methodologies to deliver exceptional results.',
      color: theme === 'dark' ? 'from-orange-500 to-red-500' : 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description:
        'We believe in true collaboration, working as an extension of your team to achieve shared success.',
      color: theme === 'dark' ? 'from-purple-500 to-pink-500' : 'from-purple-500 to-pink-600',
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
            Our Core Values
          </h2>
          <p
            className={`mx-auto max-w-2xl text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            The principles that guide everything we do and shape how we create exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <motion.div
                  className={`mx-auto mb-6 h-20 w-20 rounded-3xl bg-gradient-to-br ${value.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon size={32} className="text-white" />
                </motion.div>
                <h3
                  className={`mb-4 text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {value.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
