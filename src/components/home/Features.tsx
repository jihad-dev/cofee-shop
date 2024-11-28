import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Clock, Truck, Award, Gift, CreditCard } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { clsx } from 'clsx';

const features = [
  {
    icon: Coffee,
    title: 'Artisanal Coffee',
    description: 'Hand-selected beans roasted to perfection in small batches'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Order ahead and skip the wait with our mobile app'
  },
  {
    icon: Truck,
    title: 'Local Delivery',
    description: 'Fresh coffee delivered to your doorstep'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Satisfaction guaranteed with every cup'
  },
  {
    icon: Gift,
    title: 'Rewards Program',
    description: 'Earn points with every purchase and get free drinks'
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Secure and contactless payment options'
  }
];

const Features = () => {
  const { theme } = useTheme();

  return (
    <section className={clsx(
      'py-20 transition-colors duration-300',
      theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={clsx(
            'text-3xl font-serif mb-4',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Why Choose Brew Haven
          </h2>
          <p className={clsx(
            'text-lg max-w-2xl mx-auto',
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            Experience the perfect blend of quality, convenience, and community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={clsx(
                'p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1',
                theme === 'dark' ? 'bg-gray-700' : 'bg-white shadow-lg'
              )}
            >
              <feature.icon className={clsx(
                'w-12 h-12 mb-4',
                theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
              )} />
              <h3 className={clsx(
                'text-xl font-semibold mb-2',
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {feature.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;