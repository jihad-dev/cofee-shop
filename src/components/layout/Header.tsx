import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { clsx } from 'clsx';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        "fixed w-full backdrop-blur-sm z-50 shadow-sm transition-colors duration-300",
        theme === 'dark' ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className={clsx(
              "h-8 w-8",
              theme === 'dark' ? 'text-amber-500' : 'text-amber-700'
            )} />
            <span className="text-xl font-serif font-bold">Brew Haven</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-amber-700 dark:hover:text-amber-500 transition">Home</Link>
            <Link to="/menu" className="hover:text-amber-700 dark:hover:text-amber-500 transition">Menu</Link>
            <Link to="/locations" className="hover:text-amber-700 dark:hover:text-amber-500 transition">Locations</Link>
            <Link to="/about" className="hover:text-amber-700 dark:hover:text-amber-500 transition">About</Link>
            <Link to="/contact" className="hover:text-amber-700 dark:hover:text-amber-500 transition">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Link
              to="/order"
              className={clsx(
                "px-6 py-2 rounded-full transition",
                theme === 'dark' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-amber-700 hover:bg-amber-800',
                "text-white"
              )}
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;