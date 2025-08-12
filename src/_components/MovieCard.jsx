import React from "react";

const MovieCard = ({ movieImgUrl }) => {
  if (!movieImgUrl) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie Image"
        src={"https://image.tmdb.org/t/p/w500/" + movieImgUrl}
        className="w-48"
      />
    </div>
  );
};

export default MovieCard;
