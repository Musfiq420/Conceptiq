"use client"

import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Search } from 'lucide-react';
// import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-textPrimary">LearnLab</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div to="/courses" className="text-textSecondary hover:text-primary transition-colors">Browse All Courses</div>
            <a href="#features" className="text-textSecondary hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-textSecondary hover:text-primary transition-colors">About</a>
            <a href="#pricing" className="text-textSecondary hover:text-primary transition-colors">Pricing</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-textSecondary cursor-pointer hover:text-textPrimary" />
            <button className="text-textSecondary hover:text-primary transition-colors">Sign In</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div to="/courses" className="text-textSecondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>Browse All Courses</div>
              <a href="#features" className="text-textSecondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#about" className="text-textSecondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#pricing" className="text-textSecondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <div className="pt-4 border-t border-surface">
                <button className="w-full text-left text-textSecondary mb-2">Sign In</button>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;