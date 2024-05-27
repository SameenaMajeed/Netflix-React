import axios from 'axios';

const API_KEY = 'ae415049';
const BASE_URL = 'http://www.omdbapi.com/';

const fetchMovieData = async (movieTitle) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                t: movieTitle
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error;
    }
};

export default fetchMovieData;
