import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { clsx } from 'clsx';

const Newsletter = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

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
          className="max-w-3xl mx-auto text-center"
        >
          <Mail className={clsx(
            'w-12 h-12 mx-auto mb-4',
            theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
          )} />
          <h2 className={clsx(
            'text-3xl font-serif mb-4',
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Stay Connected
          </h2>
          <p className={clsx(
            'text-lg mb-8',
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            Subscribe to our newsletter for exclusive offers, brewing tips, and coffee stories
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={clsx(
                'flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300',
                theme === 'dark'
                  ? 'bg-gray-800 text-white border-gray-700 focus:ring-amber-500'
                  : 'bg-gray-100 text-gray-900 border-gray-200 focus:ring-amber-700'
              )}
            />
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={clsx(
                'px-8 py-3 rounded-full font-medium transition-colors duration-300',
                theme === 'dark'
                  ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
                  : 'bg-amber-700 hover:bg-amber-800 text-white',
                status !== 'idle' && 'opacity-75 cursor-not-allowed'
              )}
            >
              {status === 'idle' && 'Subscribe'}
              {status === 'submitting' && 'Subscribing...'}
              {status === 'success' && 'Subscribed!'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;