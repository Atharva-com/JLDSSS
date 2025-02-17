import React, { useState } from 'react';
import { ShoppingCart, Phone, Menu, X, Search } from 'lucide-react';
import logo from '../assets/8[1].png'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 font-inter">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt='JLDSSS' className="text-2xl font-bold w-16 h-16" />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-[#32CD32] focus:outline-none focus:border-[#32CD32] focus:ring-1 focus:ring-[#32CD32] pl-10 font-medium font-inter"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 font-inter" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium font-inter text-lg tracking-wide">
            <a href="#" className="flex items-center text-[#32CD32] hover:text-[#228B22] transition-colors duration-200 ">
              <Phone className="w-5 h-5 mr-1" />
              <span>Contact</span>
            </a>
            <button className="flex items-center text-[#32CD32] hover:text-[#228B22] transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5 mr-1" />
              <span>Cart</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#32CD32] hover:text-[#228B22]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {/* Search Bar - Mobile */}
            <div className="px-2 pt-2 pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-[#32CD32] focus:outline-none focus:border-[#32CD32] focus:ring-1 focus:ring-[#32CD32] pl-10"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            <div className="px-2 space-y-1">
              <a 
                href="#" 
                className="flex items-center text-[#32CD32] hover:text-[#228B22] p-3 rounded-md transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Contact</span>
              </a>
              <button 
                className="flex items-center text-[#32CD32] hover:text-[#228B22] p-3 rounded-md w-full transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Cart</span>
                <span className="ml-2 bg-[#FF6B00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;