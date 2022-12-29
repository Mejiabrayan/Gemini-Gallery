import axios from 'axios';

const PEXELS_API_KEY = '563492ad6f91700001000001e664840e08d1429eb42f5a734668d86c';


const fetchPhotos = async (query) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
      {
        headers: {
          Authorization: `Bearer ${PEXELS_API_KEY}`,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error(error);
  }
};

export default fetchPhotos;
