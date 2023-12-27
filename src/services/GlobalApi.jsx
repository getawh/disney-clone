import axios from "axios";

const api_key = 'efaeb1aa715442f9cbd6968b639f1213'
const movieBaseUrl = 'https://api.themoviedb.org/3'
const movieByGenreBaseUrl='https://api.themoviedb.org/3/discover/movie?api_key=' + api_key;

//https://api.themoviedb.org/3/trending/all/day?api_key=efaeb1aa715442f9cbd6968b639f1213







const getTrandingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + api_key)
const getMovieByGenreId =(id) => axios.get(movieByGenreBaseUrl + '&with_genres=' + id)






export default { 
    getTrandingVideos,
    getMovieByGenreId
};