import { MoviesList } from '../../components/MovieList';
import { useMovies } from '../../context/Movies/index';


export const MoviesPage = () => {
    const { movies } = useMovies();
    
    return (
        <div>
        {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    );
    }