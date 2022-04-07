import { memo } from "react";
import { MovieCard } from "./MovieCard"

interface ContentProps{
  title: string;
  movies: MovieProps[];
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export const ComponentContent:React.FC<ContentProps> = ({title, movies}:ContentProps) => {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const Content = memo(ComponentContent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
});