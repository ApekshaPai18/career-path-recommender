import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-25 bg-slate-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Career Recommender</div>
      <div className="space-x-4 text-xl">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/form" className="hover:text-gray-300">Form</Link>
        <Link to="/recommendations" className="hover:text-gray-300">Results</Link>
      </div>
    </nav>
  );
};

export default Navbar;
