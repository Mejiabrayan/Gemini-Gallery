import React from 'react';

const PhotoGrid = ({ photos = [] }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4'>
    {photos && photos.map((photo) => (
      <img
        key={photo.id}
        src={photo.src.medium}
        alt={photo.photographer}
        className='rounded-lg shadow-lg'
      />
    ))}
  </div>
);


export default PhotoGrid;
