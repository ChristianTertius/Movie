import axios from "axios";

const moviewBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "fd1f53ca2a5a40890cc89639098718e4";

const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=fd1f53ca2a5a40890cc89639098718e4";

const getTrendingVideos = axios.get(moviewBaseUrl + "/trending/all/day?api_key=" + apiKey);

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
