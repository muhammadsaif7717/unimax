'use client';
import { Award, Heart, Rocket, Star } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useIsMounted } from '@/hooks/useIsMounted';

const StatsSection = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  const stats = [
    { number: '150+', label: 'Projects Delivered', icon: Rocket },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Success Rate', icon: Star },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="h-full">
                <motion.div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400'
                      : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-600'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon size={24} />
                </motion.div>
                <motion.h3
                  className={`mb-2 text-3xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
