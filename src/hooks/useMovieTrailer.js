import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length > 0 ? filteredData[0] : json.results[0];
    console.log("Video", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};

export default useMovieTrailer;
