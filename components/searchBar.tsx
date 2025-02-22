"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

interface SearchBarProps {
  onChange: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onChange(input.trim());
      setInput("");
    }
  };

  return (
    <motion.div
      className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-md overflow-hidden p-1 w-full max-w-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name..."
        className="flex-grow px-4 py-2 outline-none text-gray-700 dark:text-white bg-transparent"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
        aria-label="search"
      >
        <FaSearch size={16} />
      </button>
    </motion.div>
  );
};

export default SearchBar;
