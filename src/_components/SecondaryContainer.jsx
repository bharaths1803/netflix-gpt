import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return;
  if (!movies.topRatedMovies) return;
  if (!movies.upcomingMovies) return;
  if (!movies.popularMovies) return;

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pt-[30%] md:pt-0">
        <div className="pl-4 md:pl-12 mt-0 md:-mt-52 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
