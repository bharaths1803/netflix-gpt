import { useDispatch, useSelector } from "react-redux";
import { lang, options } from "../utils/constants";
import ai from "../utils/ai";
import { useRef } from "react";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const config = useSelector((store) => store.config);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieFromDb = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, options);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    console.log(response.text);

    const movieNames = response?.text?.split(", ");
    console.log(movieNames);

    const searchMoviesPromises = movieNames.map((movie) =>
      searchMovieFromDb(movie)
    );

    const movieResults = await Promise.all(searchMoviesPromises);

    console.log("Search movies results", movieResults);
    dispatch(addGptMovieResult({ movieNames, movieResults }));
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="col-span-3 p-4 rounded-lg m-4 border bg-white"
          placeholder={lang[config.lang].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="bg-red-600 text-white col-span-1 px-4 py-2 rounded-lg m-4"
          onClick={handleGptSearch}
        >
          {lang[config.lang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
