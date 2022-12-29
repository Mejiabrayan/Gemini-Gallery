import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PhotoGrid from '../photo-grid/photo-grid';
import InitialPhotos from '../initial-photos/initial-photos';
import RecentSearches from '../recent-searches/recent-searches';


const CACHE_KEY = 'initialPhotos'; // This is the key we'll use to store the initial photos in localStorage

export default function MainContent() {
const [photos, setPhotos] = useState([]);
const [photo1, setPhoto1] = useState(null);
const [photo2, setPhoto2] = useState(null);
const [photo3, setPhoto3] = useState(null);
const [isSearching, setIsSearching] = useState(false);
// const [recentSearches, setRecentSearches] = useState(
//     localStorage.getItem('recentSearches')
//       ? JSON.parse(localStorage.getItem('recentSearches'))
//       : []
//   );

//   const [hasSearchedBefore, setHasSearchedBefore] = useState(false);

useEffect(() => {
const fetchInitialPhotos = async () => {
const cache = localStorage.getItem(CACHE_KEY); // Check if we have the initial photos in localStorage
if (cache) {
const initialPhotos = JSON.parse(cache); // if we do have them, parse them and set them to state
setPhoto1(initialPhotos[0]);
setPhoto2(initialPhotos[1]);
setPhoto3(initialPhotos[2]);
} else {
// if we don't have them, fetch them from the API
const initialPhotos = await fetchPhotos('landscape');
setPhoto1(initialPhotos[0]);
setPhoto2(initialPhotos[1]);
setPhoto3(initialPhotos[2]);
// and save them to localStorage
localStorage.setItem(CACHE_KEY, JSON.stringify(initialPhotos));
}
};
fetchInitialPhotos(); // call the function we just defined to fetch the initial photos
}, []);

return (
<div className='flex justify-center mt-6'>
<AnimatePresence>
{!isSearching && photo1 && photo2 && photo3 && (
<InitialPhotos photo1={photo1} photo2={photo2} photo3={photo3} />
)}
</AnimatePresence>
<AnimatePresence>
{isSearching && <PhotoGrid photos={photos} />}
</AnimatePresence>
</div>
);
}
