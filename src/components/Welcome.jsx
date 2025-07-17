import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/form');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-sky-200 to-sky-900 flex flex-col items-center justify-center text-white px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        Career Path Recommender
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-center max-w-lg mb-10">
        Discover your ideal career path based on your skills, interests, and education level.
      </p>

      <button
        onClick={handleStart}
        className="bg-white text-slate-950 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
