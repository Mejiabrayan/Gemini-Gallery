import fetchPhotos from '../api/api';
import React, { useState, useEffect } from 'react';
import PhotoGrid from '../photo-grid/photo-grid';
import RecentSearches from '../recent-searches/recent-searches';

const SearchQuery = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    localStorage.getItem('recentSearches')
      ? JSON.parse(localStorage.getItem('recentSearches'))
      : []
  );

  const [hasSearchedBefore, setHasSearchedBefore] = useState(false);

  const handleSearch = async (query) => {
    setIsSearching(true);
    const photos = await fetchPhotos(query);
    setPhotos(photos);

    // Add the new search to the beginning of the array
    const updatedSearches = [
      { id: recentSearches.length + 0, query },
      ...recentSearches,
    ];

    // Keep the list at a maximum of three items
    setRecentSearches(updatedSearches.slice(0, 3));

    localStorage.setItem(
      'recentSearches',
      JSON.stringify(updatedSearches.slice(0, 3))
    );

    // Set hasSearchedBefore to true if it's the user's first search
    if (!hasSearchedBefore) {
      setHasSearchedBefore(true);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-3/4 h-64'>
        <input
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch(query);
            }
          }}
          className='w-full px-4 py-2 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:shadow-outline h-20 '
          placeholder='Search for photos'
        />

        <button
          className='absolute top-0 right-0 px-4 py-2 rounded-lg shadow-lg bg-blue-500 text-white font-bold h-16'
          onClick={() => handleSearch(query)}
        >
          Search
        </button>
      </div>
      {hasSearchedBefore && (
        <div className='w-3/4 mt-4'>
          <RecentSearches
            searches={recentSearches}
            handleSearch={handleSearch}
          />
        </div>
      )}
      {isSearching && <PhotoGrid photos={photos} />}
    </div>
  );
};



export default SearchQuery;
