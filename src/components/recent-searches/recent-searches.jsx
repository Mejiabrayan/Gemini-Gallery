import React from 'react';

const RecentSearches = ({ searches }) => {
  return (
    <div className='w-3/4 mt-4'>
      <div className='font-bold text-lg mb-2'>Recent Searches:</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {searches.map((search, index) => (
          <div
            key={search.id}
            className='bg-gray-300 rounded-lg px-4 py-2 text-center hover:bg-gray-400 cursor-pointer'
          >
            {search.query}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
