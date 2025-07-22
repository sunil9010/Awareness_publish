import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-[#1a1a1a] text-white px-6 py-3 shadow-md">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-xl font-bold">ScamWatch India</h1>
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/report" className="hover:underline">Report Scam</Link>
        <Link to="/evidence" className="hover:underline">Evidence</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
