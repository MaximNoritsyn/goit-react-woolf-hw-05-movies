import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzMjFlMTM3OTU5MzE3MmE5MjY1NzgzZWEzYTUyNyIsInN1YiI6IjY2MmNjNjVkNTExZDA5MDEyN2M0YzAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-PkgOUvGNjz06k4JKIG7Ya_5suCi_NdRIWusKqGE3s"
const HEADERS = {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const EMPTY_IMAGE = "https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg"

export const getMovieImage = (path) => {
    return path ? `${IMAGE_URL}${path}` : EMPTY_IMAGE;
}
  
const client = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: HEADERS
});

export const getTrendingMovies = async () => {
    const url = "trending/movie/day"
    const response = await client.get(url);
    return response.data;
}

export const searchMovies = async (query, page = 1) => {
    const url = `search/movie?query=${query}&page=${page}`
    const response = await client.get(url);
    return response.data;
}

export const getMovieDetails = async (id) => {
    const url = `movie/${id}`
    const response = await client.get(url);
    return response.data;
}

export const getMovieCredits = async (id) => {
    const url = `movie/${id}/credits`
    const response = await client.get(url);
    return response.data;
}

export const getMovieReviews = async (id) => {
    const url = `movie/${id}/reviews`
    const response = await client.get(url);
    return response.data;
}