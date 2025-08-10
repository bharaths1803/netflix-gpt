import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button className="bg-white text-black bg-opacity-50 hover:bg-opacity-80 px-12 py-4 rounded-lg">
          Play
        </button>
        <button className="mx-2 bg-gray-500 bg-opacity-50 text-white px-12 py-4 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
