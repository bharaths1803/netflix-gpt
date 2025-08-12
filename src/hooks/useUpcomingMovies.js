import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constants";

const useUpcomingMovies = () => {  
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.upcomingMovies) 


  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

    useEffect(() => {
    !upcomingMovies && fetchMovies();
  }, []);
};

export default useUpcomingMovies;
