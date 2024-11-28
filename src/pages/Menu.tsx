import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { menuItems } from '../data/menu';
import PageTransition from '../components/shared/PageTransition';
import { useTheme } from '../contexts/ThemeContext';
import { clsx } from 'clsx';
import AddToCartButton from '../components/menu/AddToCartButton';
import { Coffee, UtensilsCrossed, Cake } from 'lucide-react';

const Menu = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'specialty' | 'bakery'>('coffee');

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: Coffee },
    { id: 'specialty', name: 'Specialty Drinks', icon: UtensilsCrossed },
    { id: 'bakery', name: 'Bakery', icon: Cake }
  ] as const;

  return (
    <PageTransition>
      <div className={clsx(
        'min-h-screen pt-24 pb-12 transition-colors duration-300',
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-center mb-12"
          >
            Our Menu
          </motion.h1>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg p-1 bg-amber-100 dark:bg-gray-800">
              {categories.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={clsx(
                    'flex items-center space-x-2 px-6 py-2.5 rounded-lg transition-all duration-200',
                    activeCategory === id
                      ? theme === 'dark'
                        ? 'bg-amber-500 text-gray-900'
                        : 'bg-amber-700 text-white'
                      : 'hover:bg-amber-50 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>

          <MenuSection
            items={menuItems.filter(item => item.category === activeCategory)}
          />
        </div>
      </div>
    </PageTransition>
  );
};

const MenuSection: React.FC<{
  items: typeof menuItems;
}> = ({ items }) => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={clsx(
            'rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl',
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          )}
        >
          <div className="relative h-48 overflow-hidden group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span className={clsx(
                'font-semibold',
                theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
              )}>
                ${item.price.toFixed(2)}
              </span>
            </div>
            <p className={clsx(
              'mb-4 text-sm',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            )}>
              {item.description}
            </p>
            <AddToCartButton item={item} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Menu;