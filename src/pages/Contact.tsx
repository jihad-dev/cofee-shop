import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { clsx } from 'clsx';
import PageTransition from '../components/shared/PageTransition';

const Contact = () => {
  const { theme } = useTheme();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <PageTransition>
      <div className={clsx(
        'min-h-screen pt-24 pb-12',
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      )}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-serif mb-4">Contact Us</h1>
            <p className={clsx(
              'text-lg',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            )}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className={clsx(
              'p-8 rounded-lg shadow-lg',
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            )}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg border transition-colors duration-300',
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-amber-500'
                      : 'bg-white border-gray-300 focus:border-amber-700'
                  )}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg border transition-colors duration-300',
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-amber-500'
                      : 'bg-white border-gray-300 focus:border-amber-700'
                  )}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className={clsx(
                    'w-full px-4 py-2 rounded-lg border transition-colors duration-300',
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-amber-500'
                      : 'bg-white border-gray-300 focus:border-amber-700'
                  )}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus !== 'idle'}
                className={clsx(
                  'w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2',
                  theme === 'dark'
                    ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
                    : 'bg-amber-700 hover:bg-amber-800 text-white',
                  formStatus !== 'idle' && 'opacity-75 cursor-not-allowed'
                )}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
                {formStatus === 'sending' && <span>Sending...</span>}
                {formStatus === 'sent' && <span>Message Sent!</span>}
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className={clsx(
              'p-6 rounded-lg',
              theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'
            )}>
              <Mail className={clsx(
                'w-8 h-8 mb-4',
                theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
              )} />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                info@brewhaven.com
              </p>
            </div>

            <div className={clsx(
              'p-6 rounded-lg',
              theme === 'dark' ? 'bg-gray-800' : 'bg-amber-50'
            )}>
              <MessageSquare className={clsx(
                'w-8 h-8 mb-4',
                theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
              )} />
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Available 7 days a week<br />
                8:00 AM - 10:00 PM EST
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;