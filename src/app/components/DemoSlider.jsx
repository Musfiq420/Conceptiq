"use client"

import React, { useState, useEffect } from "react";

const demoItems = [
  {
    title: "MCQ Quiz",
    description: "Answer interactive multiple choice questions and get instant feedback.",
    preview: (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg h-40 flex flex-col justify-center items-center">
        <p className="font-semibold mb-2">What is H₂O?</p>
        <div className="flex gap-2">
          {["Water", "Oxygen", "Hydrogen"].map((opt, i) => (
            <button key={i} className="px-3 py-1 bg-white shadow rounded hover:bg-primary/10">
              {opt}
            </button>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Table Quiz",
    description: "Fill in missing values in a periodic table or mathematical table.",
    preview: (
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg h-40 flex items-center justify-center">
        <table className="text-center border-collapse">
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
      </div>
    ),
  },
  {
    title: "Hotspot Interactive Image (Biology)",
    description: "Click on hotspots to explore different parts of the cell.",
    preview: (
      <div className="relative bg-gradient-to-br from-pink-50 to-red-50 rounded-lg h-40 flex items-center justify-center">
        <img src="/biology-cell.png" alt="Biology Cell" className="h-32" />
        <button className="absolute top-10 left-16 w-4 h-4 bg-warning rounded-full animate-ping"></button>
        <button className="absolute bottom-12 right-14 w-4 h-4 bg-success rounded-full animate-ping"></button>
      </div>
    ),
  },
  {
    title: "Physics Simulation",
    description: "Simulate motion, forces, and energy in a physics environment.",
    preview: (
      <div className="bg-gradient-to-br from-cyan-50 to-indigo-50 rounded-lg h-40 flex items-center justify-center">
        <div className="animate-bounce w-12 h-12 bg-primary rounded-full"></div>
        <p className="absolute bottom-4 text-xs text-gray-600">Gravity Simulation</p>
      </div>
    ),
  },
  {
    title: "Math Interactive Graph Visualizer",
    description: "Plot equations and visualize graphs interactively.",
    preview: (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg h-40 flex items-center justify-center">
        <svg width="120" height="80" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="gray" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="gray" />
          <path d="M0 80 Q50 0 100 80" stroke="blue" fill="transparent" />
        </svg>
      </div>
    ),
  },
];

const DemoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, preview } = demoItems[currentIndex];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-500">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-textPrimary">{title}</h4>
      </div>

      {preview}

      <p className="text-sm text-textSecondary mt-4">{description}</p>

      {/* Dots for navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {demoItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DemoSlider;
