import React from 'react';
import logo from "../assests/image 16.png";
import profile from '../assests/Ellipse 14.png';
import VideoCard from './VideoCard';

export default function Mobile() {
  return (
    <div className='sm:hidden'>
        <nav>
            <img src={logo} alt="Logo" className="h-16 mt-7 ml-52" />
        </nav>

        <div className='ml-4'>
            <h1 className="text-white text-2xl font-bold mt-4 mb-4">User Dashboard</h1>
            <div className=" flex items-center mb-4">
                <div> <img src={profile} alt="Profile" className="w-16 h-16 rounded-full" /></div>
                <div className='ml-4'>
                   <p className='text-pink-500'>Hi, Meowchle Scatt</p>
                   <p className="text-white rounded-lg">Track your details, progress, manage courses and check history here.</p>
                </div>
            </div>
         

            <div className="bg-white inline-block top-4 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">Personal Information <i className="fas fa-pen mr-2 mb-2"></i></h2>
                <p className="text-sm text-pink-500 mb-1">Name <span className="text-black">:- Meowchle Scatt</span></p>
                <p className="text-sm text-pink-500 mb-1">WhatsApp <span className="text-black">:- +91 92117 86420</span></p>
                <p className="text-sm text-pink-500 mb-1">Email <span className="text-black">:- meowchlegaryscatt@gmail.com </span></p>
                <p className="text-sm text-pink-500 mb-1">Password <span className="text-black">:- ******** </span></p>
                <p className="text-xs text-pink-500 mb-1">Change Password</p>
            </div>

            <h2 className="text-white text-2xl font-bold mb-4 mt-4">Course History</h2>
            <div className="flex mb-4 w-[100%] h-[260px]">
                <div className="bg-white rounded-3xl p-4 mr-4 inline-block w-[200px] h-[260px]">
                  <img src={profile} alt="Course" className="mx-auto mb-4 h-[80px]" />
                  <h3 className="text-gray-800 text-sm font-bold mb-2">Makeup for begineers</h3>
                  <p className="text-gray-600 text-xs mb-2">Basic makeup techniques for beginners and everyday makeup essentials</p>
                  <p className="text-gray-700 text-xs mb-1">Nonaberry</p>
                  <p className="text-pink-600 text-xs mb-1">Duration: <span className="text-gray-600 text-xs">3 days</span></p>
                  <p className="text-pink-600 text-xs">Fees: <span className="text-gray-600 font-bold text-xs">INR 9999</span></p>
                </div>

                <div className="bg-white p-4 inline-block w-[200px] h-[260px] rounded-3xl">
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

            <div className="w-[100%]">
                <VideoCard title = "Get Ready with me" videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4"/>
                <VideoCard title = "Get Ready with me" videoUrl="/js-fundamentals.mp4"/>
                <VideoCard title = "Get Ready with me" videoUrl="/js-fundamentals.mp4"/>
            </div>
        </div>
    </div>
  )
}
