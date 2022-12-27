import fetchPhotos from '../api/api';
import React, { useState, useEffect } from 'react';
import PhotoGrid from '../photo-grid/photo-grid';
import InitialPhotos from '../initial-photos/initial-photos';
import RecentSearches from '../recent-searches/recent-searches';

const CACHE_KEY = 'initialPhotos';

const SearchQuery = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [recentSearches, setRecentSearches] = useState(
    localStorage.getItem('recentSearches')
      ? JSON.parse(localStorage.getItem('recentSearches'))
      : []
  );

  useEffect(() => {
    const fetchInitialPhotos = async () => {
      const cache = localStorage.getItem(CACHE_KEY);
      if (cache) {
        const initialPhotos = JSON.parse(cache);
        setPhoto1(initialPhotos[0]);
        setPhoto2(initialPhotos[1]);
        setPhoto3(initialPhotos[2]);
      } else {
        const initialPhotos = await fetchPhotos('landscape');
        setPhoto1(initialPhotos[0]);
        setPhoto2(initialPhotos[1]);
        setPhoto3(initialPhotos[2]);
        localStorage.setItem(CACHE_KEY, JSON.stringify(initialPhotos));
      }
    };
    fetchInitialPhotos();
  }, []);

  const handleSearch = async (query) => {
    setIsSearching(true);
    const photos = await fetchPhotos(query);
    setPhotos(photos);

    // Add the new search to the beginning of the array
    const updatedSearches = [
      { id: recentSearches.length + 1, query },
      ...recentSearches,
    ];

    // Keep the list at a maximum of three items
    setRecentSearches(updatedSearches.slice(0, 3));

    localStorage.setItem(
      'recentSearches',
      JSON.stringify(updatedSearches.slice(0, 3))
    );
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-3/4 h-64'>
        <input
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full px-4 py-2 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:shadow-outline'
          placeholder='Search by name...'
        />

        <button
          className='absolute top-0 right-0 px-4 py-2 rounded-lg shadow-lg bg-blue-500 text-white font-bold'
          onClick={() => handleSearch(query)}
        >
          Search
        </button>
      </div>
      <div className='w-3/4 mt-4'>
        <RecentSearches searches={recentSearches} />
      </div>
      {!isSearching && photo1 && (
        <InitialPhotos photo1={photo1} photo2={photo2} photo3={photo3} />
      )}
      {isSearching && <PhotoGrid photos={photos} />}
    </div>
  );
};

export default SearchQuery;
