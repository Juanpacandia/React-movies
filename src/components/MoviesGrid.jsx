import { MovieCard } from './MoviewCard';
import styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../Utils/httpClient';
import { useLocation } from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);

    const query = useQuery();
    const search = query.get("search");
    console.log(search)

    useEffect(() => {
        const searchUrl = search 
        ? "/search/movie?query=" + search
        : "/discover/movie";       
        get(searchUrl)
          .then(data => {
            setMovies(data.results);
        })
    }, [search]);

    return (
    <ul className={styles.moviesGrid}>
        {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}/>
        })}
    </ul>
    );
}