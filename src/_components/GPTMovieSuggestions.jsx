import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames || !movieResults) return null;
  return (
    <div className="bg-black text-white p-4 m-4 opacity-90">
      <div>
        {movieNames.map((movie, idx) => (
          <MovieList title={movie} movies={movieResults[idx]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
