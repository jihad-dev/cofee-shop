import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { clsx } from 'clsx';
import PageTransition from '../components/shared/PageTransition';

const About = () => {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className={clsx(
        'min-h-screen pt-24 pb-12',
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-serif mb-6">Our Story</h1>
              <div className={clsx(
                'space-y-4',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                <p>
                  Founded in 2010, Brew Haven began as a small coffee cart in the heart of the city.
                  Our passion for exceptional coffee and genuine connections with our community has
                  driven our growth into the beloved establishment we are today.
                </p>
                <p>
                  We source our beans directly from sustainable farms across the globe, ensuring
                  both quality and ethical practices. Every cup we serve is a testament to our
                  commitment to craft coffee and the relationships we've built with farmers
                  and customers alike.
                </p>
                <p>
                  Our baristas are more than just coffee makers – they're skilled artisans who
                  take pride in their craft and are always eager to share their knowledge with
                  our curious customers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
                alt="Coffee shop interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-serif mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={clsx(
                    'p-6 rounded-lg',
                    theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'
                  )}
                >
                  <value.icon className={clsx(
                    'w-12 h-12 mx-auto mb-4',
                    theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
                  )} />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className={clsx(
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  )}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

import { Coffee, Heart, Leaf } from 'lucide-react';

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on the quality of our coffee or ingredients.',
    icon: Coffee
  },
  {
    title: 'Community Focus',
    description: 'Building meaningful connections with our customers and community.',
    icon: Heart
  },
  {
    title: 'Sustainability',
    description: 'Committed to environmental responsibility in everything we do.',
    icon: Leaf
  }
];

export default About;