import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Career Recommender</div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/form" className="hover:text-gray-300">Form</Link>
          <Link to="/recommendations" className="hover:text-gray-300">Results</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-3 text-lg px-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/form" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Form</Link>
          <Link to="/recommendations" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Results</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
