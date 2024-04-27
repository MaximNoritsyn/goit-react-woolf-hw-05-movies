import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzMjFlMTM3OTU5MzE3MmE5MjY1NzgzZWEzYTUyNyIsInN1YiI6IjY2MmNjNjVkNTExZDA5MDEyN2M0YzAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-PkgOUvGNjz06k4JKIG7Ya_5suCi_NdRIWusKqGE3s"
const HEADERS = {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
}
  
const client = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: HEADERS
});

export const getTrandingMovies = async () => {
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