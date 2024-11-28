import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { MenuItem } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { clsx } from 'clsx';

interface AddToCartButtonProps {
  item: MenuItem;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
  const { addToCart } = useCart();
  const { theme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => addToCart(item)}
      className={clsx(
        'flex items-center justify-center space-x-2 w-full py-2 px-4 rounded-full transition-colors duration-300',
        theme === 'dark' 
          ? 'bg-amber-500 hover:bg-amber-600 text-gray-900' 
          : 'bg-amber-700 hover:bg-amber-800 text-white'
      )}
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Add to Cart</span>
    </motion.button>
  );
};

export default AddToCartButton;