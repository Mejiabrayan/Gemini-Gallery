import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
            Search any photos you want to see and enjoy!
          </motion.div>
          <div className='flex'>
            <button className='px-4 py-2 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold'>
              Browse Art
            </button>
            <button className='ml-4 px-4 py-2 rounded-lg shadow-lg bg-gray-300 text-gray-800 font-bold'>
              Learn More
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LandingPage;
