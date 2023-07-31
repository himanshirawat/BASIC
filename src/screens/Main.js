import React from 'react';
import profile from '../assests/Ellipse 14.png';
import VideoCard from './VideoCard';

export default function Main() {
  return (
    <div className="flex-grow bg-black p-4 ml-8 hidden sm:block">
        <div className='w-full h-full'>
        <h1 className="text-white text-3xl font-bold mb-4">User Dashboard</h1>
        <div className="flex items-center mb-4">
          <img src={profile} alt="Profile" className="w-16 h-16 rounded-full" />
          <p className="text-pink-500 ml-4 bg-d5699a px-2 py-1 rounded-lg">Track your details, progress, manage courses and check history here.</p>
        </div>

        <div className="bg-white absolute right-2 top-4 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Personal Information</h2>
          <p className="font-bold text-sm mb-1">Name:- Meowchle Scatt <i className="fas fa-pen mr-2 mb-2"></i></p>
          <p className="font-bold text-sm mb-1">WhatsApp:- +91 92117 86420 <i className="fas fa-pen mr-2 mb-2"></i></p>
          <p className="font-bold text-sm mb-1">Emai:- meowchlegaryscatt@gmail.com <i className="fas fa-pen mr-2 mb-2"></i></p>
        </div>

        <h2 className="text-white text-2xl font-bold mb-4 mt-4">Course History</h2>
          <div className="flex mb-4 w-[500px] h-[260px]">
            <div className="bg-white rounded-3xl p-4 mr-4 inline-block w-[200px] h-[260px]">
              <img src={profile} alt="Course" className="mx-auto mb-4 h-[80px]" />
              <h3 className="text-gray-800 text-sm font-bold mb-2">Makeup for begineers</h3>
              <p className="text-gray-600 text-xs mb-2">Basic makeup techniques for beginners and everyday makeup essentials</p>
              <p className="text-gray-700 text-xs mb-1">Nonaberry</p>
              <p className="text-pink-600 text-xs mb-1">Duration: <span className="text-gray-600 text-xs">3 days</span></p>
              <p className="text-pink-600 text-xs">Fees: <span className="text-gray-600 font-bold text-xs">INR 9999</span></p>
            </div>

            <div className="bg-white rounded-3xl p-4 inline-block w-[200px] h-[260px]">
              <img src={profile} alt="Course" className="mx-auto mb-4 h-[80px]" />
              <h3 className="text-gray-800 text-sm font-bold mb-2">Makeup for begineers</h3>
              <p className="text-gray-600 text-xs mb-2">Basic makeup techniques for beginners and everyday makeup essentials</p>
              <p className="text-gray-700 text-xs mb-1">Nonaberry</p>
              <p className="text-pink-600 text-xs mb-1">Duration: <span className="text-gray-600 text-xs">3 days</span></p>
              <p className="text-pink-600 text-xs">Fees: <span className="text-gray-600 font-bold text-xs">INR 9999</span></p>
            </div>
          </div>


        <div className="flex items-center">
            <h2 className="text-pink-500 text-2xl font-bold mr-2">Recorded Session</h2>
            <div className="text-white text-xl">(EXTRAS)</div>
          </div>

          <div className="flex flex-wrap">
            <VideoCard title = "Get Ready with me" videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4"/>
            <VideoCard title = "Get Ready with me" videoUrl="/js-fundamentals.mp4"/>
            <VideoCard title = "Get Ready with me" videoUrl="/js-fundamentals.mp4"/>
          </div>

        </div>
      </div>
  )
}
