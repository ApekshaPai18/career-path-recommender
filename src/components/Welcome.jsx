import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate=useNavigate();

    const handleStart=()=>{
        navigate('/form');
    }
  return (
   
    <div className=" w-full min-h-screen bg-gradient-to-bl from-sky-200 to-sky-900 flex flex-col items-center justify-center text-white px-4">
       
      <h1 className="text-4xl mt-10 md:text-5xl font-bold mb-4">Career Path Recommender</h1>
      <p className="text-center max-w-md mb-8 text-lg ">
        Discover your ideal career path based on your skills, interests, and education level.
      </p>
      <button
        className="bg-white text-slate-950 px-6 py-3 rounded font-semibold shadow hover:bg-gray-100 transition"
        onClick={handleStart}
      >
        Get Started
      </button>

      
    </div>
    
  );
};

export default Welcome;
