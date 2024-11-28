import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { clsx } from 'clsx';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    content: 'The best coffee shop in town! Their attention to detail and quality is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Food Blogger',
    content: 'A perfect spot for both work and relaxation. Their pastries are heavenly!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Local Artist',
    content: 'The atmosphere is incredible, and their seasonal drinks are always creative.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5
  }
];

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <section className={clsx(
      'py-20 transition-colors duration-300',
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
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
            What Our Customers Say
          </h2>
          <p className={clsx(
            'text-lg max-w-2xl mx-auto',
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            Don't just take our word for it – hear from our valued customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={clsx(
                'p-6 rounded-lg',
                theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'
              )}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className={clsx(
                    'font-semibold',
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    {testimonial.name}
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={clsx(
                      'w-5 h-5 fill-current',
                      theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
                    )}
                  />
                ))}
              </div>
              <p className={clsx(
                'italic',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;