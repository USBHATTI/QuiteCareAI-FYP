import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm">Q</span>
        </div>
        QuietCare AI
      </Link>
      
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/signin" className="hover:text-black transition">Sign In</Link>
        <Link to="/signup" className="hover:text-black transition">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;