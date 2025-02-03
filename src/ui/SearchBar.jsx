import React, { useState, useEffect } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

function SearchBar() {
  const [placeholderText, setPlaceholderText] = useState('');
  const fullText = 'Search your projects';
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    const typeWriterEffect = () => {
      if (index < fullText.length) {
        setPlaceholderText(fullText.slice(0, index + 1)); // Get the substring up to the current index
        index++;
        setTimeout(typeWriterEffect, typingSpeed);
      }
    };

    // Start typing effect
    typeWriterEffect();

    return () => {}; // Cleanup if needed (not required in this case)
  }, []); // Only run once on mount

  return (
    <div className="relative mb-6 flex items-center philosopher-regular ">
      {/* Search Input */}
      <input
        type="text"
        placeholder={placeholderText}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none pl-10 pr-14 philosopher-regular"
      />
      
      {/* Search Icon on Left */}
      <span className="absolute left-3 text-gray-500 top-1/2 transform -translate-y-1/2">
        <FaSearch />
      </span>

      {/* Microphone Icon on Right */}
      <button className="absolute right-3 text-white bg-blue-500 p-2 rounded-full top-1/2 transform -translate-y-1/2">
        <FaMicrophone />
      </button>
    </div>
  );
}

export default SearchBar;
