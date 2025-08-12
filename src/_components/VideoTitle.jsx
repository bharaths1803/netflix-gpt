import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-1/4 text-lg py-6">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black bg-opacity-50 hover:bg-opacity-80 px-3 md:px-12 py-1 md:py-4 rounded-lg">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 bg-opacity-50 text-white px-12 py-4 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
