import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gpt = useSelector((store) => store.gpt);

  return (
    <div>
      <Header />
      {gpt.gptView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
