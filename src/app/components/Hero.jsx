"use client"

import React, { useEffect, useState } from 'react';
import { Play, Star, Users, Award } from 'lucide-react';


const demoSlides = [
  {
    title: "MCQ Quiz",
    content: (
      <div className="space-y-2">
        <p className="text-sm font-medium text-textPrimary">What is H₂O?</p>
        {["Water", "Oxygen", "Hydrogen"].map((opt, i) => (
          <div
            key={i}
            className={`bg-surface rounded-lg p-2 text-sm hover:bg-primary/10 cursor-pointer ${
              opt === "Water" ? "border-2 border-primary bg-primary/10" : ""
            }`}
          >
            {opt}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Table Quiz",
    content: (
      <table className="text-center border-collapse text-sm w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">No.</th>
            <th className="border px-2 py-1">Symbol</th>
            <th className="border px-2 py-1">Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">1</td>
            <td className="border px-2 py-1">H</td>
            <td className="border px-2 py-1">Hydrogen</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">2</td>
            <td className="border px-2 py-1">He</td>
            <td className="border px-2 py-1 bg-primary/10 animate-pulse">?</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "Hotspot Interactive Image (Biology)",
    content: (
      <div className="relative bg-gradient-to-br from-pink-50 to-red-50 rounded-lg h-32 flex items-center justify-center">
        <img src="/biology-cell.png" alt="Biology Cell" className="h-24" />
        <button className="absolute top-6 left-10 w-4 h-4 bg-warning rounded-full animate-ping"></button>
        <button className="absolute bottom-6 right-10 w-4 h-4 bg-success rounded-full animate-ping"></button>
      </div>
    ),
  },
  {
    title: "Physics Simulation",
    content: (
      <div className="bg-gradient-to-br from-cyan-50 to-indigo-50 rounded-lg h-32 flex items-center justify-center">
        <div className="animate-bounce w-10 h-10 bg-primary rounded-full"></div>
        <p className="absolute bottom-4 text-xs text-gray-600">Gravity Simulation</p>
      </div>
    ),
  },
  {
    title: "Math Interactive Graph Visualizer",
    content: (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg h-32 flex items-center justify-center">
        <svg width="120" height="80" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="gray" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="gray" />
          <path d="M0 80 Q50 0 100 80" stroke="blue" fill="transparent" />
        </svg>
      </div>
    ),
  },
];

const Hero = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = demoSlides[currentIndex];
  
  return (
    <section className="bg-gradient-to-br from-blue-50 via-background to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-1" />
                #1 Interactive Learning Platform
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-textPrimary leading-tight">
                Master High School
                <span className="text-primary"> Sciences</span> with
                <span className="text-secondary"> Interactive</span> Learning
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed">
                Experience the future of education with our immersive courses in Math, Physics, Chemistry, and Biology. 
                Learn through interactive simulations, engaging quizzes, and stunning visualizations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Learning Free
              </button>
              <button className="flex items-center justify-center border-2 border-surface text-textSecondary px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-200">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-textPrimary">50K+</span>
                </div>
                <p className="text-textSecondary">Active Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-2xl font-bold text-textPrimary">95%</span>
                </div>
                <p className="text-textSecondary">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-warning mr-2" />
                  <span className="text-2xl font-bold text-textPrimary">4.9</span>
                </div>
                <p className="text-textSecondary">Student Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-textPrimary">Physics: Wave Motion</h3>
                  
                  {/* Simulated wave animation */}
                  {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-2 animate-pulse"></div>
                      <p className="text-sm text-textSecondary">Interactive Simulation</p>
                    </div>
                  </div> */}
                  {currentSlide.content}
                  
                  {/* Quiz preview */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-textPrimary">Quick Quiz:</p>
                    <div className="space-y-2">
                      <div className="bg-surface rounded-lg p-2 text-sm">A) Frequency increases</div>
                      <div className="bg-primary bg-opacity-10 border-2 border-primary border-opacity-30 rounded-lg p-2 text-sm">B) Wavelength decreases ✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce">
              Interactive!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">
              Real-time Feedback
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;