import { useMovies } from "context/Movies";
import css from "./index.module.css";

export const LoadMore = () => {
    const { canLoadMore, setPage } = useMovies();
    return (
        <div className={css.block}>
            {canLoadMore && <button onClick={() => setPage(prev => prev + 1)} className={css.loadMore}>Load more</button>}
        </div>
    );
}