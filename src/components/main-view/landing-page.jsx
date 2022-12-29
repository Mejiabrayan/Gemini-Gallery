import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PhotoGrid from '../photo-grid/photo-grid';
import Search from '../search/search';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This is a hack to make the animation work on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-5xl font-bold text-gray-800 mb-6'
          >
            Welcome to Gemini Gallery
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-xl text-gray-700 mb-6'
          >
            Find the perfect photo for your project
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className='flex flex-col items-center'>
              <Search />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LandingPage;
