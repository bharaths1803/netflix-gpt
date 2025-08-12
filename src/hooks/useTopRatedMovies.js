import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.topRatedMovies)


  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && fetchMovies();
  }, []);
};

export default useTopRatedMovies;
