import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies", movies);

  return (
    <div className="p-6">
      <h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard movieImgUrl={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
