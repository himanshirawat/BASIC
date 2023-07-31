import React from 'react';

const VideoCard = ({title, videoUrl }) => {
  return (
    <div className="bg-black rounded-lg p-4 mb-4 ml-4 sm:w-[20%] relative">
    <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
      <video src={videoUrl} controls={false} className="w-full h-full rounded-lg absolute top-0 left-0"/>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg"className="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4v12l11-6z" />
        </svg>
      </div>
    </div>
    <p className="text-pink-500 text-lg font-bold mb-2">{title}</p>
  </div>
  );
};

export default VideoCard;