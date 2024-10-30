import axios from 'axios';

const BASE_URL = 'https://api.deezer.com';

export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data from Deezer API', error);
    throw error;
  }
};
