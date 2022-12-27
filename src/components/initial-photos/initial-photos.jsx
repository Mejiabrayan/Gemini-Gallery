import React from 'react';
import { motion } from 'framer-motion';

const InitialPhotos = ({ photo1, photo2, photo3 }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4'>
    <motion.div
      initial={{ opacity: 0 }} //  the initial prop is used to set the initial state of the motion.div component
      animate={{ opacity: 1 }} // the animate prop is used to set the final state of the motion.div component
      transition={{ duration: 1 }} // the transition prop is used to set the duration of the animation
    >
      <img
        src={photo1.src.medium}
        alt={photo1.photographer}
        className='rounded-lg shadow-lg'
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <img
        src={photo2.src.medium}
        alt={photo2.photographer}
        className='rounded-lg shadow-lg'
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <img
        src={photo3.src.medium}
        alt={photo3.photographer}
        className='rounded-lg shadow-lg'
      />
    </motion.div>
  </div>
);

export default InitialPhotos;
