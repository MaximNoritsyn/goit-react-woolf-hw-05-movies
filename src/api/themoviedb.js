import { Axios } from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGMzMjFlMTM3OTU5MzE3MmE5MjY1NzgzZWEzYTUyNyIsInN1YiI6IjY2MmNjNjVkNTExZDA5MDEyN2M0YzAxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-PkgOUvGNjz06k4JKIG7Ya_5suCi_NdRIWusKqGE3s"
const HEADERS = {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }

export const getTrandingMovies = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/day"
    const response = await Axios.get(url, { headers: HEADERS });
    return response.data;
}

export const searchMovies = async (query, page=1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`
    const response = await Axios.get(url, { headers: HEADERS });
    return response.data;
}