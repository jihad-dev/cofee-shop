import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { clsx } from 'clsx';
import PageTransition from '../components/shared/PageTransition';

const locations = [
  {
    id: '1',
    name: 'Downtown Haven',
    address: '123 Coffee Street, Downtown',
    hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-6pm',
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800'
  },
  {
    id: '2',
    name: 'Riverside Brew',
    address: '456 River Road, Waterfront',
    hours: 'Mon-Sun: 6am-9pm',
    phone: '(555) 987-6543',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800'
  },
  {
    id: '3',
    name: 'University Corner',
    address: '789 Campus Drive, University District',
    hours: 'Mon-Sun: 7am-11pm',
    phone: '(555) 456-7890',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800'
  }
];

const Locations = () => {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className={clsx(
        'min-h-screen pt-24 pb-12',
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif text-center mb-12"
          >
            Our Locations
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={clsx(
                  'rounded-lg overflow-hidden shadow-lg',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative h-48">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className={clsx(
                        'w-5 h-5 mt-1',
                        theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
                      )} />
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className={clsx(
                        'w-5 h-5 mt-1',
                        theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
                      )} />
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {location.hours}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className={clsx(
                        'w-5 h-5 mt-1',
                        theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
                      )} />
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {location.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Locations;