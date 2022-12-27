import axios from 'axios';

const fetchPhotos = async (query) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PEXELS_API_KEY}`,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error(error);
  }
};

export default fetchPhotos;
