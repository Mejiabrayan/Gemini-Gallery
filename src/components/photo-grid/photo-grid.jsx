import React from 'react';
import { motion } from 'framer-motion';

const PhotoGrid = ({ photos }) => {
  if (photos === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4'>
      {photos.map((photo) => (
        <div key={photo.id} className='flex flex-col items-center'>
          <motion.img
            src={photo.src.medium}
            alt={photo.photographer}
            className='shadow-lg rounded-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className='text-center text-gray-700 text-sm mt-2'>
            {photo.photographer_url && (
              <a href={photo.photographer_url} target='_blank' rel='noreferrer'>
                Photo's by {photo.photographer}
              </a>
            )}
          </div>
          <div className='text-center text-gray-700 text-sm mt-2'>
            {photo.src.original && (
              <button className='px-4 py-2 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold'>
              <a href={photo.src.original} target='_blank' rel='noreferrer'>
                Download
              </a>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
